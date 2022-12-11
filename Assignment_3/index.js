const fs = require('fs')
const http = require("http");
const server = http.createServer();

let student_name = "Anoop"
const myFileWriter =  (fileName, fileContent) => {
	
	 fs.writeFile(fileName, fileContent, (err) => {
		console.log(err)
	})
	
}
myFileWriter("index.html", `<h1> Hello World </h1> <p> This is ${student_name}... </p>`);

server.on("request", (req,res)=>{
    fs.readFile("index.html", (err,data)=>{
        res.end(data)
    })
})
server.listen(5000,()=>{
    console.log("Server run by Anoop")
});