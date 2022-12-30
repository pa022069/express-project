const express = require('express');
const form = require('../models/form');
const postMail = require('../models/email');
const router = express.Router();
const formController = require('../controllers/form');

router.route('/')
  .get(formController.callSuccess);

router.route('/:id')
  .get(function (req, res) {
    form.item(req, function (err, results) {
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

module.exports = router;