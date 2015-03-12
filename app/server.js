var express = require("express");
var morgan = require("morgan");

var app = express();

//logging middleware
app.use(morgan('combined'));

app.get("/", function(req, res) {
   res.send("Working"); 
});

app.listen(3000);