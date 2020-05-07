var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'keiron_app'
});

connection.connect(function (err) {
  if (!!err) {
    console.log('Err while connecting to datadase');
  } else {
    console.log('Connected successfully to database');
  }
});

module.exports = connection;
