const express = require('express')
const router = express.Router()

// middlewares
const auth = function (req, res, next) {
    console.log("Authorisation starts ....");

    // Dummy user
    req.user = {userId:1, role:"admin"};

    if(req.user){
        // valid
        next();
    }else{
        // Not valid
        res.json({
            success:false,
            message:"Not a Valid User",
        })
    }
}

const isStudent = function(req,res,next){
    console.log("Checking if student ...")
    if(req.user.role === "student"){
        next();
    }else{
        console.log("Not Student, Access Denied");
        res.json({
            success: false,
            message: "Access Denied. Route only for student"
        })
    }
}

const isAdmin = function(req,res,next){
    console.log("Checking if Admin ....")
    if(req.user.role === "admin"){
        next();
    }else{
         console.log("Not Admin, Access Denied");
        res.json({
            success: false,
            message: "Access Denied. Route only for admin"
        })
    }
}


// routes

router.get("/student", auth, isStudent, (req,res) => {
    console.log("Inside student route");
    res.send("Students specific page");
})

router.get("/admin", auth, isAdmin, (req,res) => {
    console.log("Inside Admin Route");
    res.send("Admin Specific page");
})

module.exports = router