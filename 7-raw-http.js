const https = require("https")

const url = "https://api.darksky.net/forecast/dd2f1f18a45729116d6efae80c5f7989/37.8267,-122.4233"

const request = https.request(url, (response) => {
  let data = ""

  response.on("data", (chunk) => {
    data += chunk.toString()
  })

  response.on("end", () => {
    const body = JSON.parse(data)
    console.log(body)
  })
})

request.on("error", (error) => {
  console.log(error)
})

request.end()