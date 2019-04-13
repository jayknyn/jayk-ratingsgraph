const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../db/db.js');
const app = express();
const axios = require('axios');
app.use(express.static('dist'));
app.use(bodyParser.json({urlEncoded: false}));
app.use(cors());


app.post('/api/getreviews', (req, res) => {
  console.log('route getreviews started');
  console.log('req.body.productId:', req.body.productId);
  db.getReviewsById(req.body.productId, (err, success) => {
    if (err) {
      console.log('Server: db getReview error')
      res.end();
    } else {
      console.log('Server: db getReview success');
      res.status(201).send(success);
    }
  });
});

// For db seeding
app.post('/api/reviews', (req, res) => {
  console.log('app.post started');
  for (let x = 0; x < req.body.length; x++) {
    console.log('req.body[x]:', req.body[x]);
    db.postReview(req.body[x], (err, success) => {
      if (err) {
        console.log('Server: db postReview error')
        res.end();
      } else {
        console.log('Server: db postReview success');
        res.end('success');
      }
    });
  }
});

app.get('/api/jbsreviews', (req, res) => {
  axios.get('http://18.219.116.84/api/reviews/dbmerge')
    .then(reviews => {
      console.log('jbs reviews: ')
      res.send('got the reviews')
    })
    .catch(err => {
      console.log('jbs reviews axios get error')
      res.send('didnt get the reviews')
    })
})

app.get('/api/allreviews', (req, res) => {
  db.getAllReviews((err, data) => {
    if (err) {
      console.log('app.get all reviews error')
    } else {
      console.log('app.get all reviews success')
      res.send(data)
    }
  })
})

module.exports = app;