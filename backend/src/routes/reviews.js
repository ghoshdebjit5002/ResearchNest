const express = require('express');
const auth = require('../middleware/auth');
const { Review, Assignment, Paper } = require('../models');
const router = express.Router();
router.post('/submit', auth('reviewer'), async (req,res)=>{
  try{
    const { paperId, score, comments, finalize } = req.body;
    if (!paperId) return res.status(400).json({ error: 'paperId required' });
    const assigned = await Assignment.findOne({ where: { PaperId: paperId, reviewerId: req.user.id } });
    if(!assigned) return res.status(403).json({ error: 'Not assigned to this paper' });
    let review = await Review.findOne({ where: { PaperId: paperId, reviewerId: req.user.id } });
    const willFinalize = !!finalize;
    if (willFinalize && (score === undefined || !comments)) {
      return res.status(400).json({ error: 'To finalize, provide score and comments' });
    }
    if (!review) {
      review = await Review.create({ PaperId: paperId, reviewerId: req.user.id, score, comments, finalized: willFinalize });
    } else {
      review.score = (score !== undefined) ? score : review.score;
      review.comments = comments || review.comments;
      if (willFinalize) review.finalized = true;
      await review.save();
    }
    const numFinalized = await Review.count({ where: { PaperId: paperId, finalized: true } });
    if (numFinalized >= 1 && numFinalized < 2) {
      const p = await Paper.findByPk(paperId);
      if (p) { p.status = 'under-review'; await p.save(); }
    }
    res.json({ message: willFinalize ? 'Review submitted and finalized' : 'Review saved (not finalized)', review });
  }catch(e){ console.error(e); res.status(500).json({ error: 'Server error' }); }
});
module.exports = router;
