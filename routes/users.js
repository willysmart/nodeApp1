var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log("branch1_add_1");
  console.log("branch2_add_1");
  console.log("branch2_add_2");
});

module.exports = router;
