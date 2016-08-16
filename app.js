/**
 * Created by razon on 8/14/16.
 */
// Initial declaraization
var  express = require('express');
var app = express();
var bodyParser = require("body-parser");
var passport = require("passport");
require("./passport-init");


// view engine setup
app.set("views", "./views");
app.set('view engine', 'ejs');



// Configuring path for static folders
app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));
app.use(express.static("node_modules/jquery/dist"));


// using bodyparser middleware to add data or json from frontend on the request object
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// middleware for authentication using passport and express-session
app.use(require('express-session')({
    secret: 'keyboard cat', resave: false, saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


// verifying authentication before handling any routing
var authRouter = require('./auth');
app.use(authRouter);


// if not authenticated then redirected to login page again
app.use(function (req, res, next) {
    if (req.isAuthenticated()) {
        res.locals.user = req.user;
        next();
        return;
    }
    res.redirect("/login");
});



// Initial routing
var rootRouter = require('./dashboard');
app.use(rootRouter);


// Running the server on port 3000
app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
