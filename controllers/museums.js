// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all museums
  res.render('museums/index');
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.send('STUB - NEW MUSEUM POST');
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.render('museums/new');
});

router.get('/:id', async (req, res) => {
  // TODO: Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
  try {
    const museum = await db.Museum.findById(req.params.id);
    const pieces = await db.Piece.find({ museum: museum._id });
    museum.pieces = (await pieces) || [];
    console.log(museum.pieces);
    res.render('museums/show', { museum: museum });
  } catch (err) {
    console.log(err);
    res.send('TODO: Make a beautiful error page for the user');
  }
});

module.exports = router;
