var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Qi' });
  console.normal('GET request for /  ::--> returned index.jade');
});

module.exports = router;
