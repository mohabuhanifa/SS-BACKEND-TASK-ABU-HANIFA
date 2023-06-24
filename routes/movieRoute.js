const {
  createMovie,
  getAllMovies,
  getSingleMovie,
  deleteSingleMovie,
  updateSingleMovie,
} = require("../controllers/movieController");

const verifyAdmin = require("../middlewares/verifyAdmin");

const router = require("express").Router();

router.route("/").post(createMovie).get(getAllMovies);

router
  .route("/:id")
  .get(getSingleMovie)
  .delete(verifyAdmin, deleteSingleMovie)
  .patch(verifyAdmin, updateSingleMovie);

module.exports = router;
