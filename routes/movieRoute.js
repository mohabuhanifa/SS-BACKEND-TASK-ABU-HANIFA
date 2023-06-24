const { createMovie } = require("../controllers/movieController");

const router = require("express").Router();

router.route("/").post(createMovie);

module.exports = router;
