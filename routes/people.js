/**
 * Created by mko on 15/11/14.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('people', {title: 'Qi People'});
});

module.exports = router;