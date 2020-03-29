// This is essentially a promise
const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([1,2,3,4])
    reject("This is my error!")
  }, 2000)
})

// .then method on promises allows us to run a function when resolve is called
doWorkPromise.then((result) => {
  console.log("Success! ", result)
}).catch((error) => {
  // .catch runs when reject is called from the promise i.e. failure case

  console.log(error)
})