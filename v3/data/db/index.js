const mongoose = require('mongoose');

const config = require('./config');

const Country = require('./models/Country');
const Doodle = require('./models/Doodle');
const Tag = require('./models/Tag');

const db = {};

const conn = mongoose.createConnection(
  config.mongoURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  (err) => {
    if (err) {
      throw err;
    }
  },
);

db.conn = conn;

db.Country = Country(conn);
db.Doodle = Doodle(conn);
db.Tag = Tag(conn);

db.drop = () => conn.dropDatabase();

module.exports = db;
