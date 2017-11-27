var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/new', function(req, res, next) {
    const message = req.param('message');
    console.log(req.params, message);
    res.send(message);
});

module.exports = router;
