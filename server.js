const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');

const indexRouter = require('./routes/index');
const workoutRoutes = require('./routes/workouts');



const app = express();

// load Routers
app.use('/',require('./routes/router'))

// Load environment variables from .env file
require('dotenv').config();
// Database setup
require('./config/database');
// Database setup
require('./config/passport');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Serve your CSS files from the /public/style directory at /css route
app.use('/css',express.static(path.resolve(__dirname, 'public', 'style')));

// Setup Express session
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

// Initialize Passport and setup sessions
app.use(passport.initialize());
app.use(passport.session());

// Add this middleware BELOW passport middleware
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});
// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



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

















