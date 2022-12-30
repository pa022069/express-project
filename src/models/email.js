var nodemailer = require('nodemailer');
const conf = require('../utils/config');

//宣告發信物件
var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: conf.gmail.user,
    pass: conf.gmail.password
  }
});

module.exports = {
  send: function (options) {
    transporter.sendMail(options, function (error, info) {
      if (error) {
        return error;
      } else {
        return info.response;
      }
    });
  }
}