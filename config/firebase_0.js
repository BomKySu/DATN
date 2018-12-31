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

////20190101
var config_Elec_GV = {
  apiKey: "AIzaSyDV6J-2qCGizAZlqHo1gMM3Ofr0uyWCiok",
  authDomain: "diengovap-6962f.firebaseapp.com",
  databaseURL: "https://diengovap-6962f.firebaseio.com",
  projectId: "diengovap-6962f",
  storageBucket: "diengovap-6962f.appspot.com",
  messagingSenderId: "289339575571"
};
// Initialize another app with a different config
var tertiary = firebase.initializeApp(config_Elec_GV, "tertiary");
// Retrieve the database.
global.database_Elec_GV = tertiary.database();
require('../backEnd/handleHourData');
////20190101

module.exports = firebase;