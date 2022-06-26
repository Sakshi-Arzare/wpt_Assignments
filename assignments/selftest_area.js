let dbparams=
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'pleasework',
	port:3306
}; 
const mysql = require('mysql2'); //fate
const con=mysql.createConnection(dbparams);//fate  

const express = require('express');
const app = express();

app.use(express.static("sf"));


app.get("/getArea",(req,resp)=>{
let input = req.query.x;
//console.log(input);

let output ={ pinnofoundstatus:false, areadetails:{pinno:0,area:'Hinjewadi'}};

con.query('select * from city where pincode= ?',[input],(error,rows)=>{
    if(rows.length>0)
    {
        output.pinnofoundstatus = true;
        output.areadetails = rows[0];
    }
    resp.send(output);
}
);
});

app.get("/addArea",(req,resp)=>{
    let input = { pincode:req.query.x,
        areaname:req.query.y};

let output=true;
con.query('insert into city(pincode,areaname) values(?,?)',
[input.pincode,input.areaname],
(error,whathappenedtoinsert)=>{
    if(error)
    {

    }
    else if(whathappenedtoinsert.affectedRows>0)
    {
        output = true;
    }
    resp.send(output);
});

});
app.get("/updateitem",(req,resp)=>{

    let output=false;
    let input={pincode:req.query.pincode,
    areaname:req.query.areaname};
    
    
    con.query('update city set areaname =? ,where pincode=?',
    [input.areaname,input.pincode],
    (error,whathappenedtoinsert)=>{
            if(error)
            {
                //when you dont have data why problem is there collect data first.
                    
            }
    
            else if(whathappenedtoinsert.affectedRows>0)
               output=true;
    
            
    resp.send(output);
               
    }
    
    
    );
    
    
    
    
    
    });
    
    




app.listen(500,function(){
    console.log("server listening at port 500.....");
});