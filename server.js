const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const port = 3000;

app.get("/", function(request, response){
    response.send("Hello");
});

app.listen(port, function(req, res){
    console.log(`Server scuccessfully started on port ${port}`);
});