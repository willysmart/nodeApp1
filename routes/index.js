var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node App 1' });
  console.log("test 1");
  console.log("test 2");
  console.log("test 3");
});

module.exports = router;
