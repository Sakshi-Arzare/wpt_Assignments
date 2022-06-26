const express = require('express');
const app = express();


app.use(express.static("sf"));

app.get("/abc",(req,resp)=>{
    resp.send("abc request is being processed");
});

app.get("/def",(req,resp)=>{
    resp.send("def request is being processed");
});


app.listen(8081,function(){
    console.log("server listening at port 8081.....");
});
//localhost:900/abc
