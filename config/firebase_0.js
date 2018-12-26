console.log('config/firebase_0.js is called..');
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
console.log('Firebase Auth/DataInfo configed..');
// console.log(firebase);

////20181226
var config_Elec_TD = {
  apiKey: "AIzaSyB-uXrgU9_Tbjpd9fqH3RBA_4_0zpFNokM",
  authDomain: "dienthuduc.firebaseapp.com",
  databaseURL: "https://dienthuduc.firebaseio.com",
  projectId: "dienthuduc",
  storageBucket: "dienthuduc.appspot.com",
  messagingSenderId: "730476876302"
};
// Initialize another app with a different config
var secondary = firebase.initializeApp(config_Elec_TD, "secondary");
// Retrieve the database.
global.database_Elec_TD = secondary.database();
console.log('global.database_Elec_TD configed..');
require('../backEnd/handlePayment');
////20181226

module.exports = firebase;