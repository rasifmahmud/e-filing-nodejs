// intial declarization
var express = require("express");
var passport = require("passport");
var users = require("./data/users.json");

// exporting router module to the outer world
var router = express.Router();
module.exports = router;


// if user is already authenticated he is redirected to dashboard, else to login page
router.get("/login", function (req, res) {
    if (req.isAuthenticated()) {
        res.redirect('/');
    }
    res.render("login");
});

// if correct username and password is posted the redirected to dashboard else login
router.post("/login", passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

// logout routing
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/login');
});