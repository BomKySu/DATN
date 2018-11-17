

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var indexRouter = require('./routes/index');
// var sessionRouter = require('./routes/session');
var loginRouter = require('./routes/login');
var userRouter = require('./routes/user');
var test = require('./routes/test');

var app = express();

// view engine setup
app.engine('ejs', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// use script in ejs
// app.use('/', express.static(__dirname + '/views'));
// app.use('/login', express.static(__dirname + '/views'));
// app.use('/user', express.static(__dirname + '/views'));
// app.use('/test', express.static(__dirname + '/views'));
app.use('/', express.static(path.join(__dirname, 'views')));
app.use("/login", express.static(path.join(__dirname, 'views')));
app.use('/user', express.static(path.join(__dirname, 'views')));
app.use('/test', express.static(path.join(__dirname, 'views')));

app.use(cookieParser()); // sử dụng để đọc thông tin từ cookie
app.use(bodyParser()); // lấy thông tin từ form HTML
// app.use(session({ secret: 'xxxxxxxxxxxxx' })); 


// app.use(flash()); 


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

global.glbUserID = '';
global.glbUserType = '';
global.glbIsLoggedIn = false;

app.use(session({ secret: 'this-is-a-secret-token', cookie: { maxAge: 1000*60*60 }})); // max 2 week
// app.get('/', function(req, res, next) {
//   req.session.someAttribute = "dduocjw khoong????";
//   res.send('Returning with some text');
// });

// const io = require('socket.io-client');
// const socket = io('http://localhost');


app.use('/test', test);    // just tesst
app.use('/', indexRouter);
// app.use('/*', indexRouter);  // khong duoc // loop infinity
// app.use('/sessionLogin', sessionRouter);
app.use('/login', loginRouter);
// app.use('/loginClick', loginRouter);
app.use('/user', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
