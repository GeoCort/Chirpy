var express = require('express');
var router = express.Router();
let userController = require("../controllers/userController")
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
router.post("/login",userController.login );
module.exports = router;
