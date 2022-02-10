const mongoose = require("mongoose");

const filmSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  actor: {
    type: String,
    default: "actor unknown",
  },
  year: {
    type: Number,
    default: true,
  },
  oscar: {
    type: String,
    default: "unknown",
  },
});

const FilmModel = mongoose.model("Movies", filmSchema);

module.exports = FilmModel;
