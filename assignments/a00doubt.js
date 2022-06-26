const express = require('express');
const app = express();

app.use(express.static("sf"))

app.get("/getEmployeeInfo",(req,res)=>{
    let input = req.query.empno;
    res.send("get employee details");

    let output={status:false, empdetail:{empno:0,empname:" ",mobileno:0}};
    console.log("input got is "+input);
    if(parseInt(input)==2)
    {
        output.status= true;
        output.empdetail.empno = 2;
        output.empdetail.empname = "A";
        output.empdetail.mobileno = 4;
    }
    res.send(output); 
});

app.listen(900,function(){
    console.log("server listening at port 900....");
});
