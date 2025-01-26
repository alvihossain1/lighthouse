require('dotenv').config()
const jwt = require("jsonwebtoken")
const secretKey = process.env.ACCESS_TOKEN_SECRET

exports.tokenValidator = (req, res, next) => {
    // verify a token symmetric
    const token = req.headers.authorization;
    let checker = false;
    // console.log("TOKEN", token)
    if(token){
        jwt.verify(token, secretKey, function(error, decoded) {
            if(error){
                checker = true
            }
        });
    }
    else{
        checker = true;
    }
    if(checker){
        res.send({status: 404});
    }
    else{
        res.send({status: 200});
    }
}

exports.protectedRoute = (req, res, next) => {
    // verify a token symmetric
    const token = req.headers.authorization;
    console.log("--- PROTECTED ROUTE ---")
    if(token){
        jwt.verify(token, secretKey, function(error, decoded) {
            if(error){
                res.send({status: 401, data: "Invalid Token"});
            }
            else{
                next();
            }
        });
    }
    else{
        res.send({status: 401, data: "No token found"});
    }
    
}

exports.authorization_success = (req, res, next) => {
    res.send({status: 200, data: "okay access"})
}

exports.generate_token = (user) => {
    return jwt.sign(user, secretKey, { expiresIn: 60 * 60 * 24 * process.env.TOKEN_EXPIRATION_DAYS  });
}