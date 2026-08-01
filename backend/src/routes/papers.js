const express = require('express');
const multer = require('multer');
const path = require('path');
const auth = require('../middleware/auth');
const { Paper } = require('../models');
const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage, fileFilter: (req,file,cb)=>{
  if (path.extname(file.originalname).toLowerCase() !== '.pdf') return cb(new Error('Only PDFs allowed'));
  cb(null,true);
}});
router.post('/submit', auth('author'), upload.single('paper'), async (req, res) => {
  try {
    const { title, abstract, keywords } = req.body;
    if (!title || !abstract || !keywords) return res.status(400).json({ error: 'Title, abstract and keywords are required' });
    if (!req.file) return res.status(400).json({ error: 'PDF required' });
    const paper = await Paper.create({ title, abstract, keywords, filePath: req.file.path, authorId: req.user.id, status: 'submitted' });
    res.json({ message: 'Submitted', paper });
  } catch (err) { console.error(err); res.status(500).json({ error: 'Server error' }); }
});
router.post('/:paperId/camera-ready', auth('author'), upload.single('paper'), async (req,res) => {
  try {
    const { paperId } = req.params;
    const paper = await Paper.findByPk(paperId);
    if (!paper) return res.status(404).json({ error: 'Paper not found' });
    if (paper.authorId !== req.user.id) return res.status(403).json({ error: 'Not your paper' });
    if (paper.status !== 'accepted') return res.status(400).json({ error: 'Only accepted papers can upload camera-ready version' });
    if (!req.file) return res.status(400).json({ error: 'PDF required' });
    paper.filePath = req.file.path;
    paper.status = 'camera-ready';
    await paper.save();
    res.json({ message: 'Camera-ready version uploaded', paper });
  } catch (e) { console.error(e); res.status(500).json({ error: 'Server error' }); }
});
router.get('/mine', auth('author'), async (req,res)=>{
  const papers = await Paper.findAll({ where: { authorId: req.user.id } });
  res.json(papers);
});
module.exports = router;
