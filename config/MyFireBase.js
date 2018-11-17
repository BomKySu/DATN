console.log('config/MyFireBase.js is called..');
// Import Admin SDK
var admin = require("firebase-admin");  //final-project-nghia.firebaseio.com
// var serviceAccount = require('279faa42c0d62f435de865756eb215bc81b37e75');//khong duoc
var serviceAccount = require('./final-project-nghia-279faa42c0d6.json');
// var async = require("async");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://final-project-nghia.firebaseio.com/'
});
console.log('Firebase0 configed..');
// Get a database reference to our posts
var db = admin.database();
var ref = db.ref("UserInfo/14141211/");
var dbUserInfo = db.ref("UserInfo");

module.exports = {
    getPass: function /*getPass*/(ID, myCallback) { // phải thêm đối số call back
        console.log('MyFireBase > getPass > ID = ' +  ID);
        // var path = require('path');
        // console.log('dbUserInfo in main FUNCTION: ' + dbUserInfo);
        // var userData = dbUserInfo.child('14141211');
        var userData = dbUserInfo.child(ID);
        var userPass = userData.child('Passwords');
        userPass.on("value", function(snapshot) 
        {
            // return snapshot.val();  //  in asynchronous operations, return does not wait for the I/O operation to complete.
            myCallback(snapshot.val());
        }
        );    },
    getValue: function (path, myCallback) { // phải thêm đối số call back
        var pathResult = db.ref(path);
        pathResult.on("value", function(snapshot) 
        {
            // console.log('snapshot.val():', snapshot.val());
            myCallback(snapshot.val());
        }
        );    },
};

