var express = require('express');
var router = express.Router();
var util = require('util');

//test firebaseThuDuc
// router.get('/', function(req, res, next) {
// var firebaseThuDuc = require('../config/firebaseThuDuc.js');
// firebaseThuDuc.getValue('/', function(text)
//   {
//     console.log(text);
//     res.send(text);
//   }
//   );
//   });

//test with test.ejs
router.get('/', function(req, res)
{
  res.render('test', {alertMessage:'?'});
});
router.get('/login', function(req, res)
{
  res.render('testLoginFrontEnd', {});
});
router.get('/click', function(req, res)
{
  res.status(200).json({alertMessage:"TEST RES.STATUS"})
});

module.exports = router;
