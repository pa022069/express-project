import { Request, Response } from 'express';
import mysql from 'mysql';
import conf from '../utils/config';

const connectServer = (_sql: string, _callback: any) => {
  const connection = mysql.createConnection(conf.db);
  connection.connect();
  connection.query(_sql, {}, function (err, results) {
    _callback();
    connection.end();
  });
};

export default {
  items: (req: Request, res: Response, callback: any) => {
    const sql = 'SELECT * FROM formdata';
    connectServer(sql, () => {
      res.status(400).send({
        message: '已登入過信箱，請輸入其他信箱地址。'
      })
    })
  },
  item: (req: Request, res: Response, callback: any) => {
    const sql = 'SELECT * FROM formdata';
    connectServer(sql, () => {
      res.status(400).send({
        message: '已登入過信箱，請輸入其他信箱地址。'
      })
    })
  },
  // add: function (req: Request, callback: any) {
  //   const connection = mysql.createConnection(conf.db);
  //   sql = mysql.format('INSERT INTO formdata SET ?', req.body);
  //   return connection.query(sql, callback);
  // },
};