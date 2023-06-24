const Movie = require("../models/Movie");

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.status(200).json({
      data: movies,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error,
      success: false,
    });
  }
};

const getSingleMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json({
      data: movie,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error,
      success: false,
    });
  }
};

const createMovie = async (req, res) => {
  const movie = req.body;
  try {
    const duplicate = await Movie.findOne({ name: movie.name });

    if (duplicate) {
      return res.json({
        message: `Movie ${movie.name} already exists`,
        success: false,
      });
    }
    const newMovie = await Movie.create(movie);

    res.status(201).json({
      message: "Movie created successfully",
      data: newMovie,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error,
      success: false,
    });
  }
};

module.exports = {
  createMovie,
  getAllMovies,
  getSingleMovie,
};
