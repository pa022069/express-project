import express, { Request, Response } from 'express';
import item from '../controllers/item';
import postMail from '../function/email';
import formController from '../controllers/form';

const router = express.Router();

router.route('/')
  .get(formController.callSuccess);

router.route('/:id')
  .get(item.item)

export default router;