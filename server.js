const express = require("express");
const app = express();
const port = 4000;
app.listen(port, ()=>{
    console.log(`The Server started successfully on port ${port}`);
})

app.get("/", function(request, response){
    response.send("Hello");
});