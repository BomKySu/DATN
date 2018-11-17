var express = require('express');
var router = express.Router();
// var firebase = require('../config/firebase_0.js');

router.get('/', function(req, res, next) {
  // console.log('GET / in user.js');
  // console.log("req.session USER.JS", req.session);
  var user_ = req.session.sessUser;
  user_ = {};
  res.render('user', {user:user_});
  return;
  if (user_ !== null && user_ !== undefined)
  {
    // console.log('user (from session.someAttribute) in user.js', user_.email);
    if (req.session.userType  === "Customer")
    {
      res.render('user', {user:user_});
      // console.log('render user in user.js');
    }
    else if (req.session.userType  === "AdminKV")
    {
      res.render('admin_2');
      // console.log('render admin_1 in user.js');
    }    
    else if (req.session.userType  === "AdminTong")
    {
      res.send("<a href=\"/login/logout\" style=\"color:rgb(255,0,0);font-weight:bold;font-size:xx-large;text-align:center;align-items:center;padding-left:60px\">TRANG NÀY ĐANG CẬP NHẬT, VUI LÒNG CHỜ...<br><br>LIÊN HỆ QUẢN TRỊ VIÊN NẾU CẦN THÊM THÔNG TIN..!</a>");
    }
  }
  else
  {
    console.log('user (from session.someAttribute) in user.js', user_);
    res.redirect('/login');
    console.log('redirected /login from user.js');
  }
});
router.get("/changePass/:email", function(req, res, next) 
{
  console.log("GET /changePass/:email");
  console.log(req.params.email);
  global.firebase_0.auth().sendPasswordResetEmail(req.params.email).then(function() {
    // Email sent.
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
}
);
// router.post("/changePass/:email", function(req, res, next) 
// {
//   console.log("POST /changePass/:email");
//   console.log(req.params.email);
//   global.firebase_0.auth().sendPasswordResetEmail(req.params.email).then(function() {
//     // Email sent.
//   }).catch(function(error) {
//     // An error happened.
//   });
// }
// );


router.get("/changePass2", function(req, res, next) 
{
  console.log("GET /changePass2");
  // firebase_0.auth().signOut().then(function() 
  // {
  //   console.log('\nSign out successfull');  
  // }).catch(function(error) 
  // {
  // });
  // var bodyParser = require('body-parser');
  // router.use(bodyParser.json());
  email_i = req.query.email;
  password_i = req.query.oldPass;
  password_iNew = req.query.newPass;
  console.log(email_i);
  console.log(password_i);
  console.log(password_iNew);

  console.log(req.session.sessUser);
  try
  {
    var a = req.session.sessUser.reauthenticateWithCredential(firebase_0.auth.EmailAuthProvider.credential(req.session.sessUser.email, password_i));
  }
  catch(eee){console.log(eee.message)}
  console.log(a);
  res.send("Change password OK" + a);
  return;
  req.session.sessUser.updatePassword(password_iNew).then(function()
  {
    //Do something
    res.send("Change password OK");
  }).catch(function(err)
  {
    //Do something
  });

  return;
  firebase_0.auth()
  .signInWithEmailAndPassword(email_i, password_i)
  .then(function(user) 
  {
    firebase_0.auth().currentUser.updatePassword(password_iNew).then(function(){
      //Do something
      res.send("Change password OK");
    }).catch(function(err){
      //Do something
    })
  })
  .catch(function(error) 
  {
    // error
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode)
    {
      if (errorCode == 'auth/wrong-password')  errorMessage = "Mật khẩu cũ không đúng!";   
      else if (errorMessage.includes("network error")) errorMessage = "Lỗi mạng! Hãy kiểm tra kết nối và thử lại...";
      try
      {
        res.send(errorMessage);
        console.log(errorMessage);
      }
      catch(error) { console.log(error.message)};
    }
    else
    {
      try
      {
        res.send("Đổi mật khẩu thành công!");
        console.log(errorMessage);
      }
      catch(error) {console.log(error.message)};
    }
  });
  return;
  firebase_0.auth().onAuthStateChanged(function(user)
  {
    console.log('\nAuthState changed HERE???');
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


router.get("/test", function(req, res, next)
{
  var user_ = {uid:"XH38IMRE4tRRs2Od4gJivmLEM1F3"}
  res.render('user', {user:user_});
});

module.exports = router;
