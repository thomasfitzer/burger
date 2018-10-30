


// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();

app.use(express.static(__dirname + '/public')); 
app.use(express.static('public'));

//Connects to the server
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Defines that "handlebars" will be used to show the page.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require("../burger/controllers/burgers_controller.js");
app.use('/', router);



app.listen(PORT, function(){
    console.log("Server is listening on: http://localhost:" + PORT);
});






