const router = require('express').Router();
const { profileValidation } = require('../validation/profileValidation');
const {
  createProfile, showProfile, deleteProfile, updateProfile,
} = require('../controller/profileController');

const { adminProtect } = require('../middleware/authenticate');

router.route('/profile').post(adminProtect, profileValidation, createProfile);
router.route('/profile').get(adminProtect, showProfile);
router.route('/profile/:id').put(adminProtect, updateProfile);
router.route('/profile/:id').delete(adminProtect, deleteProfile);

// router.get('/testProfile', (req, res) => {
//   res.send('test past profile');
// });
module.exports = router;
