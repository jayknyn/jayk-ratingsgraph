const fs = require('file-system');

let file = './db/dummy_data.json';

fs.readFile(file, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    const newData = JSON.parse(data);
    for(let i = 0; i < newData.length; i++) {
      newData[i].productId = Math.floor(Math.random() * 5) + 1;
    }
    fs.writeFile(file, JSON.stringify(newData) ,(err, data) => {
      if(err) {
        console.error(err);
      } else {
        console.log("successful write");
      }
    })
  }
});