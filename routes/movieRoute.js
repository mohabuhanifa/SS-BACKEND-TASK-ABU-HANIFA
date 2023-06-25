const {
  createMovie,
  getAllMovies,
  getSingleMovie,
  deleteSingleMovie,
  updateSingleMovie,
} = require("../controllers/movieController");

const verifyJWT = require("../middlewares/verifyJWT");

const router = require("express").Router();

router.route("/").post(verifyJWT, createMovie).get(getAllMovies);

router
  .route("/:id")
  .get(getSingleMovie)
  .delete(verifyJWT, deleteSingleMovie)
  .patch(verifyJWT, updateSingleMovie);

module.exports = router;
