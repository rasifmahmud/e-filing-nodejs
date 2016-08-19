/**
 * Created by razon on 8/14/16.
 */
// Initial declaraization
var  express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
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
server.listen(3000, function () {
    console.log("Server is running on port 3000");
});

// kono user connected hoilei jei ghotona ghotbe
io.sockets.on('connection', function (socket) {
    socket.on('notification', function (data,callback) {
        console.log(data);
        socket.broadcast.emit('broadcast', 'Amra notification peyechi');
        callback("Shobaike notification pathai felsi");
    });
    // function updateNickNames() {
    //     io.sockets.emit('usernames', Object.keys(users));
    // }
    // socket.on('send message', function (data,callback) {
    //     var msg = data.trim();
    //     if(msg.substr(0,3)==='/w '){
    //         msg = msg.substr(3);
    //         var index = msg.indexOf(" ");
    //         if(index>=0){
    //             var name = msg.substr(0,index);
    //             msg = msg.substr(index+1);
    //             if(name in users) {
    //                 users[name].emit('new message', {msg: msg, nick: socket.nickname});
    //             }
    //             else{
    //                 callback("Please Enter An Online UserName ");
    //             }
    //         }
    //         else{
    //             callback("Please Enter A Message");
    //         }
    //     }
    //     else {
    //         io.sockets.emit('new message', {msg: data, nick: socket.nickname});
    //     }
    // });
    // socket.on('disconnect', function () {
    //     if(!socket.nickname){
    //         return;
    //     }
    //     else{
    //         delete users[socket.nickname];
    //         updateNickNames();
    //     }
    //
    //
    // });


});
