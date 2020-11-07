const db = require('./firebase');

const webscraping = require('./webscraping');

webscraping()
  .then((dataObj) => {
    db.collection('exercises').add(dataObj);
  })
  .catch(console.error);
