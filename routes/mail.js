const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

const Subscription = require('../models/Subsription');


// @route     POST api/mail
// @desc      Send a mail
// @access    Public
router.post(
  '/',
  [
    check('name', 'Please add name')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, content } = req.body;

    let transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com", // hostname
      secureConnection: false, // TLS requires secureConnection to be false
      port: 587, // port for secure SMTP
      tls: {
        ciphers: 'SSLv3'
      },
      auth: {
        user: 'test99957@outlook.com',
        pass: 'answer999'
      }
    });

    let mailOptions = {
      from: '<test99957@outlook.com>', // sender address (who sends)
      to: 'kiran.kalra487@gmail.com', // list of receivers (who receives)
      subject: 'Message from Contact Form', // Subject line
      text: `Mesaage from ${name}, ${email} "${content}"`, // plaintext body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(500).send('Server Error');
        return console.log(error);

      }

    });
    res.status(200).send({ 'msg': 'Email sent' });
  },
);

// @route     POST api/mail/subscribe
// @desc      Send a subsciption true
// @access    Public
router.post(
  '/subscribe',
  [
    check('name', 'Please add name')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email } = req.body;

    let transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com", // hostname
      secureConnection: false, // TLS requires secureConnection to be false
      port: 587, // port for secure SMTP
      tls: {
        ciphers: 'SSLv3'
      },
      auth: {
        user: 'test99957@outlook.com',
        pass: 'answer999'
      }
    });

    let mailOptions = {
      from: '<test99957@outlook.com>', // sender address (who sends)
      to: `${email}`, // list of receivers (who receives)
      subject: "Thanks for subscribing!", // Subject line
      text: `Hello ${name}, We'll notify you when the product is in stock`, // plaintext body
    };

    let subscription = await Subscription.findOne({ email })
    if (subscription) {
      res.status(200).send({ 'msg': 'User already subscribed!' });
    }
    subscription = new Subscription({ name, email });

    await subscription.save();

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(500).send('Server Error');
        return console.log(error);

      }

    });
    res.status(200).send({ 'msg': 'Email sent' });
  },
);

module.exports = router;