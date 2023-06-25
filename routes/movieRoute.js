const {
  createMovie,
  getAllMovies,
  getSingleMovie,
  deleteSingleMovie,
  updateSingleMovie,
} = require("../controllers/movieController");

const verifyAdmin = require("../middlewares/verifyAdmin");
const verifyJWT = require("../middlewares/verifyJWT");

const router = require("express").Router();

router.route("/").post(verifyAdmin, verifyJWT, createMovie).get(getAllMovies);

router
  .route("/:id")
  .get(getSingleMovie)
  .delete(verifyAdmin, verifyJWT, deleteSingleMovie)
  .patch(verifyAdmin, verifyJWT, updateSingleMovie);

module.exports = router;
