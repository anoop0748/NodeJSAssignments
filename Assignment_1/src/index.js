const fs = require('fs')
const path = require("path")

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	// fs.writeFile(fileName, fileContent, (err) => {
	// 	console.log(err)
	// })
	let file = fs.writeFileSync(fileName,fileContent)
}

const myFileReader =  async (fileName) => {
	// write code here
	// dont chnage function name
	// fs.readFile(fileName, { encoding: "utf-8" }, (err, data) => {
	// 	if (err) {
	// 		console.log(err)
	// 	}
	// 	else {
	// 		console.log(data)
	// 	}
	// })
	let data = fs.readFileSync(fileName)
	console.log(data.toString())
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
     let upData = fs.appendFileSync(fileName, fileContent )
	 
	
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink("file.txt", (err) => {
		console.log(err)
	})
}
// fs.rename("file.txt","newFile.txt", (err)=>{
// 	console.log(err)
// })

myFileWriter("file.txt", "This is my frist txt file.")
//myFileReader("file.txt")
myFileUpdater("file.txt", "\n I am adding more contant.");

//myFileDeleter("file.txt")
myFileReader("file.txt")

 module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }