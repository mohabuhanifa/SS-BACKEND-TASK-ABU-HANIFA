const {
  createMovie,
  getAllMovies,
  getSingleMovie,
} = require("../controllers/movieController");

const router = require("express").Router();

router.route("/").post(createMovie).get(getAllMovies);

router.route("/:id").get(getSingleMovie);

module.exports = router;
