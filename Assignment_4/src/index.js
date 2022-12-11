
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
// Parse JSON bodies (as sent by API clients)
//  app.use(express.json());
 app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())
// your code goes here
app.post("/add", (req, res) => {
    console.log(req.body)
    if(isNaN(req.body.num1) || isNaN(req.body.num2)){
                console.log(req.body.num1)
              res.json({
                    "status": "Given input is not a Number"
                })
    }
    else{
    let sum = Number(req.body.num1) + Number(req.body.num2);
    console.log(sum)
    res.json({
        "status": "success",
        "message": `the sum of given two numbers is :${sum}`
    })
    }   
})

app.post("/sub", (req, res) => {
    console.log(req.body)
    if(isNaN(req.body.num1) || isNaN(req.body.num2)){
                console.log(req.body.num1)
              res.json({
                    "status": "Given input is not a Number"
                })
    }
    else{
    let mins = Number(req.body.num1) - Number(req.body.num2);
    console.log(mins)
    res.json({
        "status": "success",
        "message": `The difference of given two numbers  is :${mins}`
    })
    }   
})

app.post("/multiply", (req, res) => {
    console.log(req.body)
    if(isNaN(req.body.num1) || isNaN(req.body.num2)){
                console.log(req.body.num1)
              res.json({
                    "status": "Given input is not a Number"
                })
    }
    else{
    let multiply = Number(req.body.num1) * Number(req.body.num2);
    console.log(multiply)
    res.json({
        "status": "success",
        "message": `The product of given numbers  is :${multiply}`
    })
    }   
})



app.post("/divide", (req, res) => {
    console.log(req.body)
    if(isNaN(req.body.num1) || isNaN(req.body.num2)){
                console.log(req.body.num1)
              res.json({
                    "status": "Given input is not a Number"
                })
    }
    else{
        if(req.body.num2 === 0){
            return res.json({
                "status": "Can not divide by zero"
            })
        }
    let div = Number(req.body.num1) / Number(req.body.num2);
    console.log(div)
    res.json({
        "status": "success",
        "message": `The division of given numbers is :${div}`
    })
    }   
})
app.listen(port, () => console.log(`App listening on port ${port}!`))
module.exports = app;