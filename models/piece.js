// Require Mongoose node module
const mongoose = require('mongoose');

const creatorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  imageUrl: { type: String },
  birthYear: { type: Number },
  deathYear: { type: Number },
});

const pieceSchema = new mongoose.Schema({
  name: { type: String, default: 'Untitled' },
  originCountry: String,
  imageUrl: String,
  museum: { type: mongoose.Schema.Types.ObjectId, ref: 'Museum' },
  creator: creatorSchema,
});

module.exports = mongoose.model('Piece', pieceSchema);

// NOTE: You don't need to worry about Creator schema. You don't need to
// create a model for it or export it. This is because it lives inside
// the Piece model, so that takes care of it all! Yay for embedded schemas!
