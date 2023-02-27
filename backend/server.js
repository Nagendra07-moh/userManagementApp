const  express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const cors =  require('cors')
const port = process.env.PORT || 5000;

function writeJsonFile(fileName,data){
   const datastr =  JSON.stringify(data,null,2);
   const filePath = path.join(process.cwd(),fileName);

   try{
      fs.writeFileSync(filePath,datastr);
   }catch(err){
      console.log(err)
   }
}

function savejson(bdata){
   const file = require('./data.json')
   file.push(bdata)
   console.log(bdata)
   writeJsonFile('data.json',file)
}
app.use('/static', express.static('public'))

app.use(cors())

app.listen(port,()=>{
   console.log(`Your Server is running ar port no. ${port}`);  
})

app.use(express.json())

//TO TEST THE SERVER IS RUNNING FINE

app.get('/',(req,res)=>{
   res.send("Server is running fine")
})

//GET THE DATA INSIDE DATA.JSON
app.get('/show',(req,res)=>{
   let data = require('./data.json')
   console.log(data);
   res.send(data)
})


//PUCH DATA INTO THE JSON FILE

app.post('/add',(req,res)=>{
   const bdata = req.body
   console.log(bdata)
   savejson(bdata)
   res.send({"msg":"data has been pushed"})

})
