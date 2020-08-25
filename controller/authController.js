const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const asyncHandler = require('../utilis/async');
const errorFormator = require('../utilis/errorFormater');
const Auth = require('../models/AuthModel');

// user register
exports.register = asyncHandler(async (req, res) => {
  // validation
  const errors = validationResult(req).formatWith(errorFormator);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.mapped(),
    });
  }
  const {
    userName, role, email, password,
  } = req.body;

  const auth = await Auth.findOne({ email });
  if (auth) {
    return res.status(500).json({ msg: 'Email already exists' });
  }
  bcrypt.hash(password, 11, (err, hash) => {
    if (err) {
      return res.status(500).json({ msg: 'Server Error' });
    }
    const newAuth = new Auth({
      userName,
      email,
      role,
      password: hash,
    });
    newAuth.save();
    return res.status(201).json({
      msg: 'Created Successfully',
      success: true,
      newAuth,
    });
  });
  return 0;
});

// login user or admin
exports.logIn = asyncHandler(async (req, res) => {
  // validation
  const errors = validationResult(req).formatWith(errorFormator);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.mapped(),
    });
  }
  const { email, password } = req.body;
  const auth = await Auth.findOne({ email });
  if (!auth) {
    return res.status(500).json({ msg: 'Auth Not Found' });
  }
  bcrypt.compare(password, auth.password, (err, result) => {
    if (err) {
      return res.status(500).json({ msg: 'server error compare' });
    }
    if (!result) {
      return res.status(400).json({ msg: 'password doesnot match' });
    }
    const { _id, userName } = auth;
    // create token
    const token = jwt.sign({
      _id,
      userName,
      email: auth.email,
    }, `${process.env.SERCRET}`, { expiresIn: '24h' });

    return res.status(200).json({
      msg: 'login succesfull',
      token: `Bearer ${token}`,
      success: true,
    });
  });
  return 0;
});

//  get auth
exports.getAuth = asyncHandler(async (req, res) => {
  const { _id } = req.auth;
  const auth = await Auth.findOne(_id);
  res.status(200).json({ success: true, auth });
});

// get all auth
exports.getAllAuth = asyncHandler(async (req, res) => {
  const auth = await Auth.find();
  res.status(200).json({ success: true, auth });
});

// delete auth

exports.deleteAuth = asyncHandler(async (req, res) => {
  const deleteAuth = await Auth.findByIdAndRemove(req.params.id);
  res.status(200).json({ success: true, msg: 'delete success', deleteAuth });
});

// change password
exports.changePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const { _id } = req.auth;

  const match = await bcrypt.compare(oldPassword, req.auth.password);
  if (!match) {
    return res.status(400).json({ success: false, msg: 'Old password doesnot match' });
  }

  const hash = await bcrypt.hash(newPassword, 11);

  await Auth.findOneAndUpdate(
    { _id },
    { $set: { password: hash } },
  );
  return res.status(200).json({ success: true, msg: 'Change success' });
});

// forget
exports.forget = asyncHandler(async (req, res) => {
  crypto.randomBytes(32, async (err, buffer) => {
    if (err) {
      return res.status(500).json({ msg: 'Server Error' });
    }
    const token = buffer.toString('hex');
    const auth = await Auth.findOne({ email: req.body.email });
    if (!auth) {
      return res.status(500).json({ msg: 'Auth Not Found' });
    }
    auth.resetPasswordToken = token;
    auth.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await auth.save();
    const smtpTransport = nodemailer.createTransport({
      service: 'gmail',
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      to: auth.email,
      from: process.env.EMAIL,
      subject: 'Password Reset',
      text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
      'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
      'http://' + req.headers.host + '/reset/' + token + '\n\n' +
      'If you did not request this, please ignore this email and your password will remain unchanged.\n',
    };

    // send mail with defined transport object
    smtpTransport.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      return res.status(201).json({ success: true, msg: 'Email has been sent' });
    });
    return 0;
  });
});

//  reset and new password set
exports.reset = asyncHandler(async (req, res) => {
  const { newPassword } = req.body;
  const user = await Auth.findOne({
    resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } });
  if (!user) {
    return res.status(400).json({ success: false, msg: 'Try again session expried' });
  }
  const hash = await bcrypt.hash(newPassword, 11);
  const newAuth = new Auth({
    password: hash,
    resetToken: undefined,
    expireToken: undefined,
  });
  newAuth.save();
  return res.status(200).json({ success: true, msg: 'password update success', newAuth });
});
