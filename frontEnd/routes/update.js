var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/update', function(req, res, next) {
    res.render('data/update', { title: 'Express' });
});

module.exports = router;