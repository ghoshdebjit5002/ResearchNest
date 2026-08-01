const express = require('express');
const auth = require('../middleware/auth');
const { Assignment, Paper, User, Review } = require('../models');
const router = express.Router();
router.post('/assign', auth(['admin','chair']), async (req,res)=>{
  try {
    const { paperId, reviewerId } = req.body;
    if (!paperId || !reviewerId) return res.status(400).json({ error: 'paperId and reviewerId required' });
    const paper = await Paper.findByPk(paperId);
    const reviewer = await User.findByPk(reviewerId);
    if (!paper || !reviewer) return res.status(404).json({ error: 'Paper or reviewer not found' });
    const exists = await Assignment.findOne({ where: { PaperId: paperId, reviewerId } });
    if (exists) return res.status(400).json({ error: 'Already assigned' });
    const assignment = await Assignment.create({ PaperId: paperId, reviewerId });
    res.json({ message: 'Assigned and reviewer notified (simulation)', assignment });
  } catch(e){ console.error(e); res.status(500).json({ error: 'Server error' }); }
});
router.post('/decision', auth(['admin','chair']), async (req,res)=>{
  try{
    const { paperId, decision, adminComment } = req.body;
    if (!paperId || !decision) return res.status(400).json({ error: 'paperId and decision required' });
    const paper = await Paper.findByPk(paperId);
    if(!paper) return res.status(404).json({ error: 'Paper not found' });
    const finalizedReviews = await Review.count({ where: { PaperId: paperId, finalized: true } });
    if (finalizedReviews < 2) {
      return res.status(400).json({ error: `At least 2 finalized reviews required. Current: ${finalizedReviews}` });
    }
    if (!['accepted','rejected'].includes(decision)) return res.status(400).json({ error: 'Invalid decision' });
    paper.status = (decision === 'accepted') ? 'accepted' : 'rejected';
    await paper.save();
    res.json({ message: `Decision recorded and author notified (simulation): ${decision}`, paper });
  }catch(e){ console.error(e); res.status(500).json({ error: 'Server error' }); }
});
module.exports = router;
