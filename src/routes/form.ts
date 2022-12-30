import express, { Request, Response } from 'express';
import form from '../models/form';
import postMail from '../models/email';
import formController from '../controllers/form';

const router = express.Router();

router.route('/')
  .get(formController.callSuccess);

router.route('/:id')
  .get(form.item)

export default router;