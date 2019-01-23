const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let movieSchema = new Schema({
  "title": String,
  "productionCountries": Array,
  "productionYear": Number,
  "length": Number,
  "genre": String,
  "distributor": String,
  "language": String,
  "subtitles": String,
  "director": String,
  "actors": Array,
  "description": String,
  "image": String,
  "youtubeTrailer": String,
  "reviews": Array
});