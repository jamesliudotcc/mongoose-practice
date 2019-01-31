// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();
const db = require('../models');

router.get('/', async (req, res) => {
  try {
    const museums = await db.Museum.find();
    res.render('museums/index', { museums: museums });
  } catch (err) {
    console.log(err);
    res.send('TODO: Make a beautiful error page for the user');
  }
  res.render('museums/index');
});

router.post('/', async (req, res) => {
  try {
    db.Museum.create({ ...req.body });
  } catch {
    console.log(err);
    res.send('TODO: Make a beautiful error page for the user');
  }

  res.redirect('/museums');
});

router.get('/new', (req, res) => {
  res.render('museums/new');
});

router.get('/:id', async (req, res) => {
  try {
    const museum = await db.Museum.findById(req.params.id);
    const pieces = await db.Piece.find({ museum: museum._id });
    museum.pieces = (await pieces) || [];

    res.render('museums/show', { museum: museum });
  } catch (err) {
    console.log(err);
    res.send('TODO: Make a beautiful error page for the user');
  }
});

module.exports = router;
