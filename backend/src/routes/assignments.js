const express = require('express');
const auth = require('../middleware/auth');
const { Assignment } = require('../models');
const router = express.Router();
router.get('/my', auth('reviewer'), async (req,res)=>{
  const list = await Assignment.findAll({ where: { reviewerId: req.user.id } });
  res.json(list);
});
module.exports = router;
