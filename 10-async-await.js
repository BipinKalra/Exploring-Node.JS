const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("Numbers must be positive!")
      }

      resolve(a + b)
    }, 1000)
  })
}

const doWork = async () => {
  // throw new Error("Something went wrong!")
  // return "Andrew"

  // wait gets called with the promise returned by add and using await makes async code look like sync b/c of the syntax
  const sum = await add(4,5)
  const sum2 = await add(sum, -25)
  const sum3 = await add(sum2, 30)
  return sum3
}

// console.log(doWork()) // This would return a promise fulfilled by return value of the function

doWork().then((result) => {
  console.log("Result - " + result)
}).catch((error) => {
  console.log(error)
})