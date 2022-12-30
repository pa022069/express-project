import { EmailOptionType } from '../type/emailType';
import nodemailer from 'nodemailer';
import conf from '../utils/config';

//宣告發信物件
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: conf.gmail.user,
    pass: conf.gmail.password
  }
});

export default {
  send: (options: EmailOptionType) => {
    transporter.sendMail(options, function (error: any, info: any) {
      if (error) {
        return error;
      } else {
        return info.response;
      }
    });
  }
};