/**
 * Created by razon on 8/14/16.
 */

// initial declarization
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var _ = require("lodash");
var users = require("../models/users");


// setting authentication strategy and crosschecking username and password
passport.use(new LocalStrategy(function (username, password, done) {
    users.getUserbyUsername(username, function (err, user) {
        if (err) return console.log(err);
        if(!user || user.password !== password){
        // if (!user) {
            done(null, false);
            return;
        }

        done(null, user);

    });

}));


// authenticated user is serialised in the session and the whole user object is saved in the session
passport.serializeUser(function (user, done) {
    done(null, user);
});


// authenticated user is reinvented from the session. if he is loggied in previeously, no need for further authentication
passport.deserializeUser(function (user, done) {
    done(null, user);
});
