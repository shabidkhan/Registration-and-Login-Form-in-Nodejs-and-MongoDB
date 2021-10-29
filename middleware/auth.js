const jwt = require("jsonwebtoken");
const db = require("../model/userDatabase");

const { token } = require('morgan')
const createError = require('http-errors')

// This is for the generating the token 
const generateToken = user => {
    const Token = jwt.sign(user, process.env.SECRET_KEY,{expiresIn: "24h"})
    return Token
}
// This is for the  token autentication 
const authenticateToken = async(req, res, next) => {
    try {
        if (req.headers.cookie == undefined) {
            return res.redirect("/users/login")
        }
        const authHeader = req.headers.cookie.split('=')
        const token = authHeader[1]

        const verifyUser = jwt.verify(token, process.env.SECRET_KEY)
        req.userDetail = verifyUser;
        next()
    } catch (error) {
        // console.log( 'message :',error);
        res.send({'message ':error})
    }


}

module.exports = { generateToken, authenticateToken};