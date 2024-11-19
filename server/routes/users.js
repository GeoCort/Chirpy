var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
/* GET users listing. */
router.get('/',userController.getUsers);
router.post('/create', userController.createAccount)
module.exports = router;
