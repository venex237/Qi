var express = require('express');
var router = express.Router();
var jade = require('jade'),
    fs = require('fs');

/* GET ajax. */
router.get('/:file', function(req, res) {

    console.log('sent ' + req.params.file);

    res.sendfile('/images' + req.params.file);

});

module.exports = router;
