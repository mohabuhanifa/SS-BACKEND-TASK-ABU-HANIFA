const { createMovie, getAllMovies } = require("../controllers/movieController");

const router = require("express").Router();

router.route("/").post(createMovie).get(getAllMovies);

module.exports = router;
