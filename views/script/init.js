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
// Get a reference to the database service
var database = firebase.database();

var config_Elec = {
    apiKey: "AIzaSyB-uXrgU9_Tbjpd9fqH3RBA_4_0zpFNokM",
    authDomain: "dienthuduc.firebaseapp.com",
    databaseURL: "https://dienthuduc.firebaseio.com",
    projectId: "dienthuduc",
    storageBucket: "dienthuduc.appspot.com",
    messagingSenderId: "730476876302"
};
// Initialize another app with a different config
var secondary = firebase.initializeApp(config_Elec, "secondary");
// Retrieve the database.
var database_Elec = secondary.database();
