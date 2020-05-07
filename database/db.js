const config = require('config');

Mongoose.connect('mongodb://' + config.db, { useNewUrlParser: true });
const db = Mongoose.connection;
// TODO: auto generate db and create admin user.
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('Connection with database succeeded.');
});

module.exports = db;
