/**
 * Created by razon on 8/14/16.
 */
// Initial declaraization
var  express = require('express');
var app = express();



// view engine setup
app.set("views", "./views");
app.set('view engine', 'ejs');



// Configuring path for static folders
app.use(express.static("public"));




// Initial routing
app.get('/', function (req, res) {
    res.render('dashboard');
});



// Running the server on port 3000
app.listen(3000, function () {
    console.log("Server is running");
});
