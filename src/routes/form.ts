import express, { Request, Response } from 'express';
import form from '../models/form';
import postMail from '../models/email';
import formController from '../controllers/form';

const router = express.Router();

router.route('/')
  .get(formController.callSuccess);

router.route('/:id')
  .get(function (req: Request, res: Response) {
    form.item(req, function (err: any, results: any) {
      if (err) {
        res.sendStatus(500);
        return console.error(err);
      }

      if (!results.length) {
        res.sendStatus(404);
        return;
      }

      res.json(results);
    });
  })

export default router;