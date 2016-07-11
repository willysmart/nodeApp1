var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node App 1' });
  console.log("test 1");
  console.log("test 2");
  console.log("test 3");
  console.log("test 4");
  console.log("branch1_add_1");
  console.log("branch2_add_2");
  console.log("b1_add_1");
});

module.exports = router;
