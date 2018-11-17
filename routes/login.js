console.log('login.js is called..');
var express = require('express');
var router = express.Router();
var path = require('path');

global.firebase_0 = require('../config/firebase_0.js'); // auth
var LoginUserName = {};
firebase_0.database().ref('/LoginUserName').once('value').then(function(snapshot) 
{   
    // console.log(snapshot.val());
    LoginUserName = snapshot.val();
}); 
    
var validator = require("email-validator");

router.get('/', function(req, res, next) {
  var user_ = req.session.sessUser;
  if (user_ === null || user_ === undefined)
  {
    firebase_0.database().ref('/LoginUserName').once('value').then(function(snapshot) 
    {   
        // console.log(snapshot.val());
        LoginUserName = snapshot.val();
    });
    try
    {
      res.render('login', {alertMessage:null});
    }
    catch(error) { console.log(error.message)};
  }
  else
  {
    res.redirect('/user');
  }

});

// router.post('/logout', function(req, res, next) {   // >> GET (ahef="logout")
router.get('/logout', function(req, res, next) {
  firebase_0.auth().signOut().then(function() {
    console.log('\nSign out successfull');
  }).catch(function(error) {
    // An error happened.
  });
  req.session.destroy(function(err) {
    if(err) {
      console.log('error session destroy' + err);
    } else {
    }
  });
  res.redirect('/login');
});

router.get('/submit', function(req, res, next) {
  res.redirect('/login');
});

router.post('/submit', function(req, res, next) {
  // nhấn login
  console.log('Submit clicked');
  firebase_0.auth().signOut().then(function() 
  {
    console.log('\nSign out successfull');  
  }).catch(function(error) 
  {
  });
  var bodyParser = require('body-parser');
  router.use(bodyParser.json());
  email_i = req.body.username;
  password_i = req.body.password;
  if  (validator.validate(email_i) == false)
  {
    email_i = LoginUserName[email_i];
    if (email_i == null)
    {
      try
      {
        res.render('login', {alertMessage:"Tên người dùng này chưa được đăng ký!"});
      }
      catch(error) { console.log(error.message)};
    }
  }

  firebase_0.auth().signInWithEmailAndPassword(email_i, password_i).catch(function(error) {
    // error
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode)
    {
      if (errorCode == 'auth/user-not-found') errorMessage = 'Không tìm thấy người dùng này!';
      else if (errorCode == 'auth/invalid-email')  errorMessage = 'Email không hợp lệ!';
      else if (errorCode == 'auth/wrong-password')  errorMessage = 'Email/Tên đăng nhập hoặc mật khẩu không đúng!';   
      else if (errorMessage.includes("network error")) errorMessage = "Lỗi mạng! Hãy kiểm tra kết nối và thử lại...";
      ;   
      try
      {
        res.render('login', {alertMessage:errorMessage});
      }
      catch(error) { console.log(error.message)};
    }
    });

  firebase_0.auth().onAuthStateChanged(function(user)
  {
    console.log('\nAuthState changed');
    if ( (user !== null && user !== undefined) )
    {
      console.log('current user: ', user.email);
      var pathUserType = '/UserInfo/' + user.uid + '/type';
      firebase_0.database().ref(pathUserType).once('value').then(function(userType)       
      {
        console.log(userType.val());
        req.session.userType = userType.val();
        req.session.sessUser = user;
        // console.log("req.session.userType LOGIN.JS", req.session);
        try
        {
          res.redirect('/user');
        }
        catch(error) { console.log(error.message)};
      });
    };
  }
  )
});


router.get('/changePassword', function(req, res, next) 
{
  // var newPassword = getASecureRandomPassword();
  var newPassword = "adminpass";
  var user = firebase_0.auth().currentUser;
  user.updatePassword(newPassword).then(function() {
    // Update successful.
  }).catch(function(error) {
    // An error happened.
  });
});


module.exports = router;


