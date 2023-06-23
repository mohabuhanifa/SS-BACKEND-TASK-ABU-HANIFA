const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: { type: String, required: true },
  actors: [{ type: String }],
  crew: [{ type: String }],
  runtime: { type: Number, required: true },
  directors: [{ type: String }],
  producers: [{ type: String }],
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
