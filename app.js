var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var scribe = require('scribe'); /*npm install git+https://github.com/bluejamesbond/Scribe.js.git*/
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var people = require('./routes/people');
var users = require('./routes/users');
var ajax = require('./routes/ajax');
var images = require('./routes/images');

var app = express();

/* ==================================================================================
 *                              SCRIBE LOGGING
 *                  https://github.com/bluejamesbond/Scribe.js
 * ==================================================================================
 */

// Configuration --> logging
// --------------
scribe.configure(function(){
    scribe.set('app', 'Qi');
    scribe.set('logPath', 'logs/');                      // Doublecheck
    scribe.set('defaultTag', 'QI');
    scribe.set('divider', ':::');
    scribe.set('identation', 5);                          // Identation before console messages

    scribe.set('maxTagLength', 30);                       // Any tags that have a length greather than
                                                          // 30 characters will be ignored

    scribe.set('mainUser', 'root');                       // Username of the account which is running
                                                          // the NodeJS server
});

// Create Loggers
// --------------
scribe.addLogger('log', true , true, 'green');            // (name, save to file, print to console,
scribe.addLogger('realtime', true, true, 'underline');    // tag color)
scribe.addLogger('high', true, true, 'magenta');
scribe.addLogger('normal', true, true, 'white');
scribe.addLogger('low', true, true, 'grey');
scribe.addLogger('info', true, true, 'cyan');


/* ==================================================================================
 *                              SCRIBE LOGGING
 * ==================================================================================
 */




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

/*
 * SCRIBE
 */
app.use(scribe.express.logger(function(req, res){         // Express.js access log
    return true;                                          // Filter out any Express messages
}));

// Control Panel
// WARNING: ExpressJS must be installed for this to work
// You also need to start an ExpressJS server in order for
// this to work.
// --------------
app.get('/log', scribe.express.controlPanel());           // Enable web control panel
/*
 * SCRIBE
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/people', people);
app.use('/users', users);
app.use('/ajax', ajax);
app.use('/images', images);
app.use('/hello/:name', function(req, res){
    res.send('Hello, ' + req.params.name);
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
