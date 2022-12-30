const bodyparser = require('body-parser');    // 解析 HTTP 請求主體的中介軟體
const express = require('express');
const config = require('./utils/config');
const password = require('./utils/crypto');
const app = express();
const cors = require('cors');
const form = require('./routes/form');

app.use(cors({
  origin: '*',
  // origin: [
  //     '',
  // ],
}));

// 使用 bodyparser.json() 將 HTTP 請求方法 POST、DELETE、PUT 和 PATCH，放在 HTTP 主體 (body) 發送的參數存放在 req.body
app.use(bodyparser.urlencoded({ limit: '1mb', extended: true }));
app.use(bodyparser.json({ limit: '1mb' }));

app.use(password.passwdCrypto);

app.get('/', (req: any, res: any) => {
  res.send('Hello World');
})
app.use('/form', form);

app.listen(process.env.PORT || config.port, function () {
  console.log('app listening on port ' + config.port + '!');
});
