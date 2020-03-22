const fs = require("fs")

// const book = {
//   title : "Angels and Demons",
//   author : "Dan Brown"
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync("1-json.json", bookJSON)

const dataBuffer = fs.readFileSync("1-json.json")
// console.log(dataBuffer)

const data = JSON.parse(dataBuffer.toString())
data.title = "The Da Vinci Code"

fs.writeFileSync("1-json.json", JSON.stringify(data))
