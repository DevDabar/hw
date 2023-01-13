//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("hola mundo");
});


let port = process.env.PORT;
if(port == null || port == ""){
    port = 3000;
}
app.listen(port, function(req,res){
    console.log("server started");
})