const mongoose = require('mongoose');
require('dotenv').config();
console.log('before mongo connect')
// mongoose.connect(`mongodb+srv://dbjay:${process.env.MONGOPW}@jayaxe-uogon.mongodb.net/graph2?retryWrites=true`, {useNewUrlParser: true}, (err, success) => {
const uri = `mongodb+srv://dbjay:${process.env.MONGOPW}@jayaxe-uogon.mongodb.net/Graph?retryWrites=true`;
mongoose.connect(uri, {useNewUrlParser: true}, (err, success) => {
  if (err) {
    console.log('db connect error')
    throw err
  } else {
    console.log('db connect success')
  }
});

const graphSchema = mongoose.Schema({
  username: String,
  body: String,
  score: Number,
  proscons: {
    reliability: Boolean,
    durability: Boolean,
    looks: Boolean,
    performance: Boolean,
    value: Boolean
  },
  likes: Number,
  dislikes: Number,
  productId: Number
});

const Graph = mongoose.model('Graph', graphSchema);

const postReview = (data, cb) => {
  // console.log('data in postReview:', data)
    const newReview = new Graph(data);
    newReview.save((err, success) => {
      if (err) {
        console.log('db: save error');
        cb(err, null);
      }
      else {
        console.log('db: save success');
        cb(null, success);
      }
    });

}

const getReviewsById = (selectedId, cb) => {
  Graph.find({productId: selectedId})
    .exec((err, results) => {
      if (err) {
        console.log('db: find error');
        cb(err, null);
      } else {
        console.log('db: find success');
        cb(null, results);
      }
    })
    .explain("executionStats");
}

const getAllReviews = (cb) => {
  Graph.find()
    .exec((err, results) => {
      if (err) {
        console.log('db get all: find error');
        cb(err, null);
      } else {
        console.log('db get all: find success');
        cb(null, results);
      }
    })
}

module.exports = {postReview, getReviewsById, getAllReviews}