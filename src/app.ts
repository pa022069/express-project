import express, { Request, Response } from 'express';
import bodyparser from 'body-parser';// 解析 HTTP 請求主體的中介軟體
import config from './utils/config';
import password from './utils/crypto';
import cors from 'cors';
import form from './routes/form';

const app = express();

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

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
})
app.use('/form', form);

app.listen(process.env.PORT || config.port, function () {
  console.log('app listening on port ' + config.port + '!');
});
