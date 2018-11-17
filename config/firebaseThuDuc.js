console.log('config/firebaseThuDuc.js is called..');
// Import Admin SDK
var admin = require("firebase-admin");

var serviceAccount_firebaseThuDuc = require("./diennangtieuthu-thuduc-firebase-adminsdk-94ych-02c29bce40.json");

var secondaryAppConfig = ({
  credential: admin.credential.cert(serviceAccount_firebaseThuDuc),
  databaseURL: "https://diennangtieuthu-thuduc.firebaseio.com"
});
// Initialize another app with a different config
var firebaseThuDuc = admin.initializeApp(secondaryAppConfig, "secondary");
var db = firebaseThuDuc.database();
console.log('firebaseThuDuc configed..');
module.exports =    
{
    getValue: function (path, myCallback) 
    { // phải thêm đối số call back
        var pathResult = db.ref(path);
        pathResult.on("value", function(snapshot) 
        {
            myCallback(snapshot.val());
        }
        );    
    },
};

