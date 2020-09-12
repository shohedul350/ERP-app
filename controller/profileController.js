const { validationResult } = require('express-validator');
const errorFormator = require('../utilis/errorFormater');
const asyncHandler = require('../utilis/async');
const Profile = require('../models/ProfileModel');

// create profile by admin
exports.createProfile = asyncHandler(async (req, res) => {
  
//  validation
  const errors = validationResult(req).formatWith(errorFormator);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.mapped(),
    });
  }
  const {
    companyAuth,
    companyName,
    companyAddress,
    companyMobile,
    companyEmail,
    compnayLogo,
  } = req.body;
  const profile = await Profile.find();
  if (profile.length) {
    return res.status(404).json({ msg: 'Profile Already Created' });
  }
  const newprofile = new Profile({
    companyAuth,
    companyName,
    companyAddress,
    companyMobile,
    companyEmail,
    compnayLogo,
  });
  const createdProfile = await newprofile.save();
  return res.status(200).json({ msg: 'Profile Create Succesfully', success: true, createdProfile });
});

// show profile by user and admin
exports.showProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.find();
  if (!profile) {
    return res.status(404).json({ msg: 'Profile Not Found' });
  }
  return res.status(200).json({ success: true, profile });
});

// update profile by admin
exports.updateProfile = asyncHandler(async (req, res) => {
  const updateProfile = await
  Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
  return res.status(200).json({ msg: 'Profile Update Success ', success: true, updateProfile });
});

// delete profile by admin
exports.deleteProfile = asyncHandler(async (req, res) => {
  const profile = await
  Profile.findByIdAndRemove(req.params.id);
  return res.status(200).json({ msg: 'Profile Delete Success ', success: true, profile });
});
