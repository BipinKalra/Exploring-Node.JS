// const square = function (x) {
//   return x*x
// }

// // Arrow function long syntax
// const square = (x) => {
//   return x*x
// }

// //Arrow function short syntax
// const square = (x) => x*x

// console.log(square(4))

const event = {
  name: "Birthday",
  guestList: ["Bipin", "Himanshi", "Nomit"],
  // printGuestList : function () {
  //   console.log("Guest List For " + this.name)
  // }

  //Arrow function Syntax for methods
  
  // printGuestList: () => {
  //   console.log("Guest List For " + this.name)
  // }

  // Arrow functions do not bind their own this values and that is why "this.name" is not defined in the scope.
  // Thus arrow functions are not suitable for methods as object properties.

  //ES6 shorthand for defining methods

  printGuestList() {
    console.log("Guest list for " + this.name)

    // This wont work as the function binds its own context to this value
    // this.guestList.forEach(function (guest) {
    //   console.log(guest + " is attending " + this.name)
    // })

    // Arrow functions work here as they dont do the same and thus have the this value of the context they are defined in.
    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name)
    })

  }
}

event.printGuestList()