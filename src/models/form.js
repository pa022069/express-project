const mysql = require('mysql');
const conf = require('../utils/config');

const connection = mysql.createConnection(conf.db);
let sql = '';

module.exports = {
  items: function (req, callback) {
    sql = 'SELECT * FROM formdata';
    return connection.query(sql, callback);
  },
  item: function (req, callback) {
    sql = mysql.format('SELECT * FROM formdata WHERE id = ?', [req.params.id]);
    return connection.query(sql, callback);
  },
  add: function (req, callback) {
    sql = mysql.format('INSERT INTO formdata SET ?', req.body);
    return connection.query(sql, callback);
  },
};