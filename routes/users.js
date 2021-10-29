var express = require('express');
var router = express.Router();
var userdb = require("../model/userDatabase")
var bcrypt = require('bcryptjs');
const { authenticateToken,generateToken } = require('../middleware/auth');
const { token } = require('morgan');
const fs = require("fs")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// for the the render the singup page 
router.get("/signup",(req,res)=>{
  res.render("signup",{message:""})
});


// insert the data database after checking it.
router.post("/signup",(req,res)=>{
  const{name,email,password,mobile}  = req.body
  var hash = bcrypt.hashSync(password, 8);//hashing password 
  var data = {
    name,
    email,
    mobile,
    password:hash,
  }

  if(!(email && password && name && mobile)){
    res.render("signup",{message:"Please fill the form properly"})
  }
  userdb.insertMany(data)
  .then(data=>{
    console.log("done");
    res.send("Submission successful")
  })
  .catch(err=>{
    console.log("user exist");
    res.render("signup",{message:"user exist"})
  })
});


// rendering the login page
router.get("/login",(req,res)=>{
  res.render("index",{message:""})
});


// checking the login details  and after that genearting the token
router.post('/login',async(req,res)=>{
  const {email,password} = req.body
  if(!(email && password)){
    res.render("index",{message:"Please fill the form properly"})
  }
  userdb.find({email:email})
  .then((userData) => {
    if (userData!==[]){
      if (bcrypt.compareSync(password, userData[0].password)){
        console.log(true);
        var token = generateToken({id:userData[0]._id,name:userData[0].name})// token genearate
        console.log("login")
        res.cookie('token', token)
        res.redirect("/home")
        
      } // true , password check
      else{
        console.log("password incorrect");
        res.render("index",{message:"password incorrect"})
      }
    }else{
      res.send({message:"User not exist"})
      res.render("index",{message:"User not exist"})
    }
  }).catch((err) => {
    console.log("err");
    res.send({message:"err"})
  });
});

// Logout route  
router.get('/logout', function(req, res){
  cookie = req.cookies;
  for (var prop in cookie) {
      if (!cookie.hasOwnProperty(prop)) {
          continue;
      }    
      res.cookie(prop, '', {expires: new Date(0)});
  }
  res.redirect('/users/login');
});


module.exports = router;
