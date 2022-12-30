import { Request } from 'express';
import mysql from 'mysql';
import conf from '../utils/config';

const connection = mysql.createConnection(conf.db);
let sql = '';

export default {
  items: function (req: Request, callback: any) {
    sql = 'SELECT * FROM formdata';
    return connection.query(sql, callback);
  },
  item: function (req: Request, callback: any) {
    sql = mysql.format('SELECT * FROM formdata WHERE id = ?', [req.params.id]);
    return connection.query(sql, callback);
  },
  add: function (req: Request, callback: any) {
    sql = mysql.format('INSERT INTO formdata SET ?', req.body);
    return connection.query(sql, callback);
  },
};