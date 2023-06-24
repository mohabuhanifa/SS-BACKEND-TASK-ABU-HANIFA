const { handleLogin, registerUser } = require("../controllers/authController");

const router = require("express").Router();

router.route("/register").post(registerUser);
router.route("/login").post(handleLogin);

module.exports = router;
