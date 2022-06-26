const express = require('express');
const app = express();

app.length("/abc",(req,resp)=>{
    resp.send("abc request is being processed");

});

app.get("/def",(req,resp)=>{
    resp.send("def request is being processed");
})
app.listen(900,function(){

    console.log("server listening at port 8081....");
})
