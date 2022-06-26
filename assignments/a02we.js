const express = require('express');
const app = express();

app.use(express.static("sf"));

app.get("/login",(req,resp)=>{
    resp.send("ok for login we need to do some logic");

});

app.get("/updateprofile",(req,resp)=>{
    resp.send("ok for update profile");

});

app.listen(300,function(){
    console.log("server listening at port 8081....");
});