// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Museum Schema

// TODO: Use schema to create model

const museumSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String },
  country: { type: String },
  imageUrl: { type: String },
});

// TODO: Export Museum Model
module.exports = mongoose.model('Museum', museumSchema);
