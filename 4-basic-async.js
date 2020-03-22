console.log("Starting")

// Basic asynchronous function that waits for 2 second before executing
setTimeout(() => {
  console.log("2s Timeout")
}, 2000)

setTimeout(() => {
  console.log("0s Timeout")
}, 0)

console.log("Stopping")