const express = require('express');
const auth = require('../middleware/auth');
const generateCertificate = require('../utils/certGenerator');
const { Paper, User, Certificate } = require('../models');
const path = require('path');
const router = express.Router();
router.get('/paper/:paperId', auth(), async (req,res) => {
  try {
    const { paperId } = req.params;
    const paper = await Paper.findByPk(paperId);
    if (!paper) return res.status(404).json({ error: 'Paper not found' });
    const user = await User.findByPk(req.user.id);
    if (paper.authorId !== req.user.id && !['admin','chair'].includes(req.user.role)) {
      return res.status(403).json({ error: 'Not authorized to generate certificate for this paper' });
    }
    if (!['accepted','camera-ready'].includes(paper.status)) {
      return res.status(400).json({ error: 'Certificate allowed only for accepted/presenting papers' });
    }
    const certPath = path.join('uploads', `certificate-${paperId}-${Date.now()}.pdf`);
    await generateCertificate(user.name || user.email, 'Presentation', certPath);
    await Certificate.create({ type: 'presentation', filePath: certPath });
    return res.download(certPath);
  } catch (e) { console.error(e); res.status(500).json({ error: 'Server error' }); }
});
module.exports = router;
