const knock = (name = "User", age) => {
  for (let i = 0; i < 3; i++) {
    console.log("knock knock knock " + name + "! ---> " + age)
  }
}

knock("Bipin", 24)

knock() // undefined is printed in place of name as undefined is the default value