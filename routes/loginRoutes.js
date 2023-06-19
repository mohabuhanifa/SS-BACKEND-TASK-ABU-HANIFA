const {  handleLogin } = require('../controllers/userController');

const router = require('express').Router();

router.route('/').post(handleLogin);

module.exports = router;