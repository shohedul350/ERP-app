const router = require('express').Router();

const {
  registerValidation,
  loginValidation,
} = require('../validation/authValidation');

const {
  register, logIn, getAuth, getAllAuth, changePassword, forget, reset, deleteAuth, updateUserRole,
} = require('../controller/authController');

const { adminProtect, protect } = require('../middleware/authenticate');

router.route('/register').post(registerValidation, register);
router.route('/login').post(loginValidation, logIn);
router.route('/auth').get(protect, getAuth);
router.route('/all-auth').get(adminProtect, getAllAuth);
router.route('/delete-auth/:id').delete(adminProtect, deleteAuth);
router.route('/change-password').put(protect, changePassword);
router.route('/change-auth-role/:id').put(adminProtect, updateUserRole);
router.route('/forget').post(forget);
router.route('/reset/:token').post(reset);
module.exports = router;
