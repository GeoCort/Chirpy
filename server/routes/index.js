var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/m4', (req,res,next)=>{
  res.json({"message":"Hi"})
})
router.post("/", (req,res)=>{
  res.json({"message":"Successfully posted"})
})
module.exports = router;
