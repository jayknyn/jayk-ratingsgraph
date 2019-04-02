const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../db/db.js');
const port = process.env.port || 3000;
const app = express();
app.use(express.static('dist'));
app.use(bodyParser.json({urlEncoded: false}));
app.use(cors());
app.listen(port, (err, success) => {
  if (err) console.log('Server run error')
  else console.log(`Server running on port: ${port}`)
})

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