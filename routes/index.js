const express = require('express');
const connection = require('../db');

const { version } = require('../package.json');

const router = express.Router();

// Version
router.get('/version', async (req, res) => {
  res.status(500).json({ version });
});

// Version
router.get('/', async (req, res) => {
  res.status(200).send('Welcome to the keiron app.');
});

// Get All Users
router.get('/api/users', async (req, res) => {
  connection.query('SELECT * FROM usuarios;', function (err, rows, fields) {
    if (!!err) {
      res.status(500).json({ message: 'Interal server err: DB' });
    } else {
      const queryData = {
        rows,
        fields
      };
      res
        .status(200)
        .json({ message: 'Successful query', data: queryData.rows });
    }
  });
});

// Get All Tickets
router.get('/api/tickets', async (req, res) => {
  connection.query('SELECT * FROM tickets;', function (err, rows, fields) {
    if (!!err) {
      res.status(500).json({ message: 'Interal server err: DB' });
    } else {
      const queryData = {
        rows,
        fields
      };
      res
        .status(200)
        .json({ message: 'Successful query', data: queryData.rows });
    }
  });
});

// Add Tickets
router.get('/api/tickets/add', async (req, res) => {
  const { id_user, description, ticket_pedido } = req.query;
  const ADD_TICKET = `INSERT INTO \`tickets\` (\`id_user\`, \`description\`, \`ticket_pedido\`) VALUES (${id_user}, \'${description}\' ,${ticket_pedido});`;
  connection.query(ADD_TICKET, function (err, results) {
    if (!!err) {
      res
        .status(500)
        .json({ message: `Interal server err: cannot insert ${err}` });
    } else {
      res.status(200).json({ message: 'Successful query', data: results });
    }
  });
});

// Delete Tickets
router.get('/api/tickets/delete', async (req, res) => {
  const { id } = req.query;
  const DELETE_TICKET = `DELETE FROM \`tickets\` WHERE id = ${id};`;
  connection.query(DELETE_TICKET, function (err, results) {
    if (!!err) {
      res
        .status(500)
        .json({ message: `Interal server err: cannot insert ${err}` });
    } else {
      res.status(200).json({ message: 'Successful query', data: results });
    }
  });
});

// Update Tickets
router.get('/api/tickets/update', async (req, res) => {
  const { id, id_user, ticket_pedido, description } = req.query;
  const UPDATE_TICKET = `UPDATE \`tickets\` SET \`id_user\`= \'${id_user}\', \`description\`= \'${description}\',  \`ticket_pedido\`= \'${ticket_pedido}\' WHERE id = ${id}`;
  connection.query(UPDATE_TICKET, function (err, results) {
    if (!!err) {
      res
        .status(500)
        .json({ message: `Interal server err: cannot insert ${err}` });
    } else {
      res.status(200).json({ message: 'Successful query', data: results });
    }
  });
});

// Update Tickets
router.get('/api/tickets/asign', async (req, res) => {
  const { id, id_user } = req.query;
  const ASIGN_TICKET = `UPDATE \`tickets\` SET \`id_user\`= \'${id_user}\' WHERE id = ${id}`;
  connection.query(ASIGN_TICKET, function (err, results) {
    if (!!err) {
      res
        .status(500)
        .json({ message: `Interal server err: cannot insert ${err}` });
    } else {
      res.status(200).json({ message: 'Successful query', data: results });
    }
  });
});

// Update Tickets
router.get('/api/auth/login', async (req, res) => {
  const { mail, pass } = req.query;
  const LOGIN_QUERY = `SELECT \`id_user\`, \`id_tipouser\`, \`nombre\`, \`mail\`, \`pass\` FROM \`usuarios\` WHERE mail = \'${mail}\' AND pass = \'${pass}\';`;
  connection.query(LOGIN_QUERY, function (err, results) {
    if (!!err) {
      res
        .status(500)
        .json({ message: `Interal server err: cannot insert ${err}` });
    } else {
      res.status(200).json({ message: 'Successful query', data: results });
    }
  });
});

// Update Tickets
router.get('/api/auth/register', async (req, res) => {
  const { nombre, mail, pass } = req.query;
  const UPDATE_TICKET = `INSERT INTO \`usuarios\`(\`nombre\`, \`mail\`, \`pass\`) VALUES (\'${nombre}\', \'${mail}\',\'${pass}\');`;
  connection.query(UPDATE_TICKET, function (err, results) {
    if (!!err) {
      res.status(200).json(false);
    } else {
      res.status(200).json({ message: 'Successful query', data: results });
    }
  });
});

module.exports = router;
