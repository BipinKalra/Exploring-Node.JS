// setTimeout(() => {
//   console.log("2 seconds have passed")
// }, 2000)


// Callback pattern being used in filter which is a synchronous example of callbacks

// const names = ["Bipin", "Himanshi", "Pradhan"]
// const shortNames = names.filter((name) => {
//   return name.length <=6
// })

// console.log(shortNames)


// This wouldn't work in case of async examples as in case of an async function, callback wouldn't get executed
// till the main function ends and data is being returned by the callback and not by a function in main
const geocodeNotWorking = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0
    }

    return data
  }, 2000)
}

const data = geocodeNotWorking("Something")
console.log(data) // We end up seeing undefined because of this as data isnt being returned by geocode function but rather by the setTimeout function which uses callback pattern


// Working code using callback pattern
const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0
    }

    callback(data)
  }, 2000)
}

geocode("Something", (data) => {
  console.log(data)
})


// const add = (a,b,callback) => {
//   setTimeout(() => {
//     const sum = a+b

//     callback(sum)
//   }, 2000)
// }

// add(5, 7, (sum) => {
//   console.log(sum)
// })