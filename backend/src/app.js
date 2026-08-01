// ResearchNest - app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/auth');
const paperRoutes = require('./routes/papers');
const adminRoutes = require('./routes/admin');
const reviewRoutes = require('./routes/reviews');
const sessionRoutes = require('./routes/sessions');
const assignRoutes = require('./routes/assignments');
const certRoutes = require('./routes/certificates');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use('/api/auth', authRoutes);
app.use('/api/papers', paperRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/assignments', assignRoutes);
app.use('/api/certificates', certRoutes);
app.get('/api/health', (req, res) => res.json({ ok: true }));
// Serve frontend
app.use(express.static(path.join(__dirname, '../../frontend')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/index.html'));
});
module.exports = app;
