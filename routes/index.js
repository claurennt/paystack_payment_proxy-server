const express = require('express');
const axiosInsta = require('axios');
const path = require('path');
const router = express.Router();

router.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = router;
