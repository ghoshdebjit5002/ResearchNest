const express = require('express');
const auth = require('../middleware/auth');
const { Session } = require('../models');
const { Op } = require('sequelize');
const router = express.Router();
router.post('/', auth(['admin','chair']), async (req,res)=>{
  try {
    const { name, startTime, endTime } = req.body;
    if (!name || !startTime || !endTime) return res.status(400).json({ error: 'name, startTime, endTime required' });
    const sStart = new Date(startTime);
    const sEnd = new Date(endTime);
    if (sEnd <= sStart) return res.status(400).json({ error: 'endTime must be after startTime' });
    const conflict = await Session.findOne({
      where: {
        [Op.or]: [
          { startTime: { [Op.between]: [sStart, sEnd] } },
          { endTime: { [Op.between]: [sStart, sEnd] } },
          { startTime: { [Op.lte]: sStart }, endTime: { [Op.gte]: sEnd } }
        ]
      }
    });
    if (conflict) return res.status(400).json({ error: 'Time conflict with existing session' });
    const s = await Session.create({ name, startTime: sStart, endTime: sEnd });
    res.json({ message: 'Session created', session: s });
  } catch(e){ console.error(e); res.status(500).json({ error: 'Server error' }); }
});
router.get('/', auth(), async (req,res)=>{
  const list = await Session.findAll({ order: [['startTime','ASC']] });
  res.json(list);
});
module.exports = router;
