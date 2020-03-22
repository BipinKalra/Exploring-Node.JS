// Object Property Shorthand

// Normal Object definition

const name = "Bipin"
const age = 22

const user = {
  // name: name,
  name, // This can be used (es6) when keyword and variable name from which the value is being derived are the same
  age: age, // Thus, can't be done for age
  location: "Delhi"
}

console.log(user)

// Object destructuring

const product = {
  label: "Something",
  price: 3,
  stock: 201,
  salePrice: undefined
}

const {label, price, stock, rating} = product

console.log(label)
console.log(stock)
console.log(price)
console.log(rating) // This remains undefined as this property doesn't exist in the object

// In case you want the variables to have names that are different than the keywords in objects

const {label: article, price: cost, something = 5} = product

console.log(article)
console.log(cost)
console.log(something) // Now something does get a value as we can specify default values while destructuring

// Destructuring an object right when it is passed to a function so that the function then has access to 
// only the inner variables and not the complete object
const transaction = (type, {label, stock}) => {
  console.log(type, label, stock)
}

transaction("order", product)