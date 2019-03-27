const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/graph');

const graphSchema = mongoose.Schema({
  id: Number,
  username: String,
  body: String,
  score: Number,
  pros: {
    reliability: Boolean,
    durability: Boolean,
    looks: Boolean,
    performance: Boolean
  },
  cons: {
    reliability: Boolean,
    durability: Boolean,
    looks: Boolean,
    performance: Boolean
  },
  likes: Number,
  dislikes: Number,
  productId: Number
});

let Repo = mongoose.model('Repo', graphSchema);

let save = (repoData) => {
  let newInstance = new Repo(repoData);
  newInstance.save((err, success) => {
    if (err) {
      console.log('db: save error');
    }
    else console.log('db: save success');
  })
}

let find = (cb) => {
  Repo.find({})
    .sort('-stargazers_count')
    .limit(10)
    .exec((err, results) => {
      if (err) console.log('db: find error')
      else {
        console.log('db: find success, results[0]:', results[0].owner);
        cb(null, results);
      }
    })
}

module.exports = {save, find}