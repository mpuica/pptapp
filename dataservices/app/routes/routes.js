const express = require('express');
const router = express.Router();

const PPTapp = require('../modules/PPTapp.js');

router.all('/api',  (req, res) => {
  PPTapp.generate();
  res.sendStatus(200);
})

router.all('/*', (req, res) => {
  res.sendStatus(405);
})

module.exports = router;
