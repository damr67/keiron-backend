const express = require('express');

const { version } = require('../package.json');

const router = express.Router();

// Version
router.get('/version', async (req, res) => {
  res.status(200).json({ version });
});

module.exports = router;
