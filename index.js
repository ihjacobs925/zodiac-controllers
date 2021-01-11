const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

app.get('/', (req, res) => {
    res.render('home')
  });

app.get('/water', (req, res) => {
    res.render('/water', {water: []});
  });

  app.get('/air', (req, res) => {
    res.render('/air', {air: []});
  });

  app.get('/fire', (req, res) => {
    res.render('/fire', {fire: []});
  });

app.get('/earth', (req, res) => {
    res.render('/earth', {earth: []});
  });

  app.listen(8005);