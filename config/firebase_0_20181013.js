console.log('config/firebase_0_20181013.js is called..');
var firebase = require("firebase");
// Initialize Firebase
var config = {
  apiKey: "AIzaSyB11Dv2F1cO_x1AqvG4IwLySuUDTRkzcjE",
  authDomain: "final-project-nghia.firebaseapp.com",
  databaseURL: "https://final-project-nghia.firebaseio.com",
  projectId: "final-project-nghia",
  storageBucket: "final-project-nghia.appspot.com",
  messagingSenderId: "14259981773"
};
firebase.initializeApp(config);
console.log('Firebase Auth configed..');
// console.log(firebase);
module.exports = firebase;