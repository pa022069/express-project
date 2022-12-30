import express, { Express, Request, Response, NextFunction } from 'express';
import crypto from 'crypto';// 加解密軟體 (內建模組)
import conf from './config';

export default {
  // 將明文密碼加密
  passwdCrypto: function (req: Request, res: Response, next: NextFunction) {
    if (req.body.password) {
      req.body.password = crypto.createHash('md5')
        .update(req.body.password + conf.salt)
        .digest('hex');
    }
    next();
  }
};