require('dotenv').config();

module.exports = {
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE
  },
  gmail: {
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASSWORD
  },
  port: 3310,
  // 自訂密碼的加鹽
  salt: '@2#!A9x?3'
};