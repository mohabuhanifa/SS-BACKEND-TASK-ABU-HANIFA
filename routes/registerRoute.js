const { registerUser } = require("../controllers/userController");
const verifyAdmin = require("../middlewares/verifyAdmin");

const router = require("express").Router();

router.route("/").post(verifyAdmin, registerUser);

module.exports = router;
