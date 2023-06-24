const {
  createMovie,
  getAllMovies,
  getSingleMovie,
  deleteMovie,
} = require("../controllers/movieController");
const verifyAdmin = require("../middlewares/verifyAdmin");

const router = require("express").Router();

router.route("/").post(createMovie).get(getAllMovies);

router.route("/:id").get(getSingleMovie).delete(verifyAdmin, deleteMovie);

module.exports = router;
