var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
require('dotenv').config();
const connectionString =process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var Monitor = require("./models/monitor");

async function recreateDB()
{
  // Delete everything
  await Monitor.deleteMany();
  let instance1 = new Monitor({model:"Monitor 1", screen_size:24,price:199.99});
  instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
  });
}
let reseed = true;
if (reseed) {recreateDB();}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var monitorsRouter = require('./routes/monitor');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/monitor', monitorsRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);


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
