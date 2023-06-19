const { registerUser } = require('../controllers/userController');

const router = require('express').Router();

router.route('/').post(registerUser);

module.exports = router;