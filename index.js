const db = require('./firebase');

const webscraping = require('./webscraping');

webscraping()
  .then((dataObj) => {
    db.collection('exercises')
      .doc('exerciseList')
      .set(dataObj)
      .then(console.log('Document successfully written!'));
  })
  .catch(console.error);
