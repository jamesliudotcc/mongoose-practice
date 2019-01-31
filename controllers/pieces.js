// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();
const db = require('../models');

router.get('/', async (req, res) => {
  try {
    const pieces = await db.Piece.find().populate('museum');
    res.render('pieces/index', { pieces: pieces });
  } catch (err) {
    console.log(err);
  }
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  try {
    db.Piece.create({
      name: req.body.name,
      originCountry: req.body.originCountry,
      imageUrl: req.body.pieceImageUrl,
      museum: req.body.museum,
      creator: {
        firstName: req.body.creatorFirstName,
        lastName: req.body.creatorLastName,
        birthYear: req.body.birthYear,
        deathYear: req.body.deathYear,
        imageUrl: req.body.creatorImageUrl,
      },
    });
    res.redirect('/pieces');
  } catch (err) {
    console.log(err);
    res.send('TODO: Make a beautiful error page for the user');
  }
});

router.get('/new', async (req, res) => {
  try {
    const museums = await db.Museum.find();
    res.render('pieces/new', { museums: museums });
  } catch (err) {
    console.log(err);
    res.send('TODO: Make a beautiful error page for the user');
  }
  // TODO: Replace stub route with page that renders form for adding new piece
});

router.get('/:id', async (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  try {
    const piece = await db.Piece.findById(req.params.id).populate('museum');
    console.log(piece.museum);
    res.render('pieces/show', { piece: piece });
  } catch (err) {
    console.log(err);
    res.send('TODO: Make a beautiful error page for the user');
  }
});

module.exports = router;
