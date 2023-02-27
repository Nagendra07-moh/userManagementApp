const fs = require('fs');
const express = require('express');
const cors = require('cors')
const app = express();
const mysql = require('mysql');

const {createPool} = require('mysql');

app.use(cors());

const pool = createPool({
   host:"127.0.0.1",
   user:"root",
   password:"123",
   database:"back",
   port:3308
})

let data = new Object();

let sql  = "select * from userdata "
pool.query(sql,function(err,res){
   if(err){
     return console.log("error occured");
   }else{
      return;
   }
});



const port = 4000;

app.post('/add',(req,res)=>{
   res.send("hello world");   
});


















//TO GET THE DATA INSIDE THE JSON FILE
// app.get('/add',(req,res)=>{
//    const file = require('./data.json')
//    res.json(file);
// })
// function writeJsonfile(fileName,data){
//    const testJsonString = JSON.stringify(data, null, 2);
//    const filePath = path.join(process.cwd(), fileName);   
//    try {        
//       fs.writeFileSync(filePath, testJsonString);
//     } catch (err) {
//       console.error(err);
//     }
// }

// function readJsonfile(fileName){
//    const filePath = path.join(process.cwd(), fileName);

//    try {
//    const contents = fs.readFileSync(filePath, 'utf8');
//    console.log(typeof contents)
//    const jsonString = JSON.parse(contents);
//    console.log(typeof jsonString)
//    console.log(jsonString);
//    return jsonString
//    } catch (err) {
//    console.error(err);
//    }
// }


// function saveJson(data){
//    let jsn = readJsonfile('./data.json')
//    jsn.push(data)
//    writeJsonfile('info.json',jsn) 
// }


// TO APPEND DATA INTO THE JSON FILE

// app.post('/add',(req,res) =>{
//    let data = req.parms.body;
//    console.log(data)
//    saveJson(data)  
//    res.json({msg:'susscess'});

// });




app.listen(port,()=>{
   console.log(`server is running... at port ${port}`);
});
