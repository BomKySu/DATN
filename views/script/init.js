// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
    apiKey: "AIzaSyB11Dv2F1cO_x1AqvG4IwLySuUDTRkzcjE",
    authDomain: "final-project-nghia.firebaseapp.com",
    databaseURL: "https://final-project-nghia.firebaseio.com",
    projectId: "final-project-nghia",
    storageBucket: "final-project-nghia.appspot.com",
    messagingSenderId: "14259981773"
};
firebase.initializeApp(config);
var firebaseForCreateUser = firebase.initializeApp(config, "quaternary"); // 20181219
// Get a reference to the database service
var database = firebase.database();

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
var database_Elec_TD = secondary.database();
 
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
var database_Elec_GV = tertiary.database();

