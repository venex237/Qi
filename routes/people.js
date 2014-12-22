/**
 * Created by mko on 15/11/14.
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');

// handle registration post request here
// request goes to /people/new from client
router.post('/new', function(req, res){
    // return successful json
    res.json({ 'status': 'success' });

    console.log('\nPOST REQUEST REGISTRATION');
    console.log(req.body.email + '\n' + req.body.name + '\n' + req.body.pseudo + '\n' + req.body.pw + '\n');

    // to do
    // work with passport to authenticate
    //
});

/* GET home page. */
router.get('/', function(req, res) {
    res.render('people', {title: 'Qi People'});
});

module.exports = router;