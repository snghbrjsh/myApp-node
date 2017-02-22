var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/whoami', function(req, res, next) {
  res.send('you\'re Brijesh Singh!');
});

module.exports = router;
