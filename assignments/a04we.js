const express = require('express');
const app = express();

app.use(express.static("sf"));

app.get("/login",(req,resp)=>{


    let username = req.query.username;
    let password = req.query.password;

    let loginstatus = { status:false, message:"login due to user"}
    
    if(username === password)
    {
        loginstatus.status = true;
        loginstatus.message = "success";
    }
    
    resp.send(loginstatus);

});
 
app.get("/updateprofile",(req,resp)=>{
    resp.send("ok for update profile");

});

app.listen(900,function(){
    console.log("server listening at port 8081....");
});