const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  companyAuth: {
    type: String,
    // ref: 'Auth',
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  companyAddress: {
    type: String,
    required: true,
  },
  companyMobile: {
    type: Number,
    required: true,
  },
  companyEmail: {
    type: String,
    required: true,
  },
  companyLogo: String,
},
{
  timestamps: true,
});

const Profile = model('Profile', profileSchema);
module.exports = Profile;
