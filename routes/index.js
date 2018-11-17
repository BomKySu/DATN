var express = require('express');
var router = express.Router();
var util = require('util');

const io = require('socket.io-client');
const socket = io('http://localhost');


router.get('/', function(req, res, next) {
  // console.log('get / in routes/index.js');

  // console.log('COOKIE: ', util.inspect(req.cookies, false, null, true));
  // console.log('SESSION: ', util.inspect(req.session, false, null, true));
  
  // console.log('COOKIE: ', JSON.stringify(req.cookies, null, 4));
  // console.log('SESSION: ', JSON.stringify(req.session, null, 4));
  console.log('session ID: ', req.session.id);
  // console.log('req.session.someAttribute.email: ', req.session);
  socket.emit('connect', 'hahahahaha');
  res.redirect('/login');
  });
// router.get('/:something', function(req, res, next) {   // loop infinity
//   console.log(2);
//   if (glbIsLoggedIn)
//   {
//     res.redirect('/user');
//   }
//   else
//   {
//     res.redirect('/login');
//   }
// });

module.exports = router;
