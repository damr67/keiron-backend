const express = require('express');
const connection = require('../db');

const { version } = require('../package.json');

const router = express.Router();

// Version
router.get('/version', async (req, res) => {
  connection.query('SELECT * FROM usuarios;', function (err, rows, fields) {
    if (!!err) {
      res.status(500).json({ version, message: 'Interal server err: DB' });
    } else {
      const queryData = {
        rows,
        fields
      };
      res
        .status(200)
        .json({ version, message: 'Successful query', data: queryData });
    }
  });
});

module.exports = router;
