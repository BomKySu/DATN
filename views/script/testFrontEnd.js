// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
    apiKey: "AIzaSyB11Dv2F1cO_x1AqvG4IwLySuUDTRkzcjE",
    authDomain: "final-project-nghia.firebaseapp.com",
    databaseURL: "https://final-project-nghia.firebaseio.com",
    projectId: "final-project-nghia",
    storageBucket: "final-project-nghia.appspot.com",
    // messagingSenderId: "14259981773"
};
firebase.initializeApp(config);
// Get a reference to the database service
var database = firebase.database();

// var outputText = document.getElementById('outputText');
firebase.database().ref('/').once('value').then(function(snapshot) 
{
    // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // outputText.innerHTML = JSON.stringify(snapshot.val());
    // document.body.innerHTML = JSON.stringify(snapshot.val());
    console.log(snapshot.val());
    var x = new Date(2018, 11, 05);
    console.log(x.toString("YYYYMMDD_HHmmss")); // k được gì, như không
});


