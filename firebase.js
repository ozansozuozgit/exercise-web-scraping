const firebase = require('firebase');
const firebaseConfig = {
  apiKey: 'AIzaSyDbgqkxPFMe4YjIAglaJGKP8leo_ygVgds',
  authDomain: 'workout-creator-29a33.firebaseapp.com',
  databaseURL: 'https://workout-creator-29a33.firebaseio.com',
  projectId: 'workout-creator-29a33',
  storageBucket: 'workout-creator-29a33.appspot.com',
  messagingSenderId: '509611031953',
  appId: '1:509611031953:web:92403587aa442f4ee46e30',
  measurementId: 'G-MBTVXEK89D',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

module.exports = db;
