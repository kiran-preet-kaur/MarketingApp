const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');


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

      console.log('Message sent: ' + info.response);
    });
    res.status(200).send({ 'msg': 'Email sent' });
  },
);

module.exports = router;