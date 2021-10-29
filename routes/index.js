var express = require('express');
const { authenticateToken,generateToken } = require('../middleware/auth');

var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/home")
});

// this is our home which executed after the autentication
router.get("/home",authenticateToken,(req,res)=>{
  res.render("home",{message:req.userDetail.name})
})


module.exports = router;
