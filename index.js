const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', (req, res) => {
    res.render('home')
  });

app.get('/water', (req, res) => {
    res.render('/water', {signs: ['Pisces', 'Cancer', 'Scorpio'], traits: ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']});
  });

  app.get('/air', (req, res) => {
    res.render('/air', {signs: ['Aquarius', 'Gemini', 'Libra'], traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']});
  });

  app.get('/fire', (req, res) => {
    res.render('/fire', {signs: ['Aries', 'Leo', 'Sagittarius'], traits: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']});
  });

app.get('/earth', (req, res) => {
    res.render('/earth', {signs: ['Taurus', 'Vergo', 'Capricorn'], traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']});
  });

  app.listen(8005);