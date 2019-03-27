const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/db.js');
const port = process.env.port || 3010;
const app = express();
app.use(express.static('dist'));
app.use(bodyParser.json({urlEncoded: false}));
app.listen(port, (err, success) => {
  if (err) console.log('Server run error')
  else console.log(`Server running on port: ${port}`)
})