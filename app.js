const createError   = require('http-errors');
const express       = require('express');
const cookieParser  = require('cookie-parser');
const logger        = require('morgan');
const fileUpload    = require('express-fileupload');

//Require all routes-------------------------------------------------------
const indexRouter   = require('./routes/index');
const resultsRouter = require('./routes/results');

const app = express();

// Data config-------------------------------------------------------------
require('dotenv').config();

// view engine setup-------------------------------------------------------
app
    .set('views',`${__dirname}/views`)
    .set('view engine', 'hbs');

// Middlewares-------------------------------------------------------------
app
    .use(logger('dev'))
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(cookieParser())
    .use('/assets', express.static(`${__dirname}/public`))
    .use(fileUpload());

// Routes------------------------------------------------------------------
app
    .use('/', indexRouter)
    .use('/results', resultsRouter);


// catch 404 and forward to error handler----------------------------------
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler------------------------------------------------------------
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
