// This is essentially a promise
const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([1, 2, 3, 4])
    // reject("This is my error!")
  }, 2000)
})

// .then method on promises allows us to run a function when resolve is called
doWorkPromise.then((result) => {
  console.log("Success! ", result)
}).catch((error) => {
  // .catch runs when reject is called from the promise i.e. failure case

  console.log(error)
})

// Example for promise chaining
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 2000)
  })
}

// Promise chaining with better clean syntax
// This results in code that is not nested and thus looks sleek
// Furthermore, only a single catch call is required
add(4, 5).then((sum) => {
  console.log(sum)

  return add(sum, 10)
}).then((sum2) => {
  console.log(sum2)
}).catch((error) => {
  console.log(error)
})

// DEPRECATED CODE FOR LEARNING

// Promise chaining with basic nesting syntax

// add(4,5).then((sum) => {
//   console.log(sum)

//   // Nested call to the promise in order to execute 2 asynchronous tasks in a chain
//   add(sum, 10).then((sum2) => {
//     console.log(sum2)
//   }).catch((error) => {
//     console.log(error)
//   })
// }).catch((error) => {
//   console.log(error)
// })