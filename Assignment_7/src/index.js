const express = require('express')
const app = express()
const bodyParser = require("body-parser");
let data = require('./InitialData');
const { count } = require('../../Assignment_6/src/models/Blog');
const port = 8080;
let countData = data.length;
app.use(express.urlencoded());


// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here

app.get("/",(req,res)=>{
    res.status(200).send('wellcome to student portal')
})
app.get('/student',(req,res)=>{
   
    let id = req.query.id
    console.log(id,countData)
    if(id > 0 && id <= countData){
        let idData = data[id-1]
        res.json(idData)
    }
    else if(id <= 0 || id > countData){
        res.status(400).json({
            status:' Id Not Found'
        })
    }
   else{res.json(data)}
})

app.post('/student',async(req,res)=>{
    res.setHeader('content-type','application/x-www-form-urlencoded');
    try {
        
        let studentData = req.body;
        if((studentData.id > countData) && (studentData.name) && (studentData.currentClass) && (studentData.division)){
           
            data.push(studentData);
            res.json({
                'status': "success"
            })
        }
        else{
            res.json({
                'Error Massage': "Given Id already there Plz give another id."
            })
        }
        
    } catch (error) {
        res.header(400).json({
            status:"error",
            massage:error.massage
        })
    }
})
// app.put()
// app.delete()
app.put('/:id', (req,res)=>{
    let target=data.find(e=>e.id==req.params.id)
    if(req.body.name||req.body.currentClass||req.body.division&&target){
        let index=data.findIndex(e=>e.id==req.params.id)
        data[index]={...target,...req.body}
        
        res.json(data[index])
    }
    else{
        res.status(404).json("Get Failed!! Id not found")
    }
})
app.delete('/:id', (req,res)=>{
    let target=data.findIndex(e=>e.id==req.params.id)
    if(target){
        
        data.splice(target,1)
        
        res.json("succesful delete")
    }
    else{
        res.status(404).json("Get Failed!! Id not found")
    }
})
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   