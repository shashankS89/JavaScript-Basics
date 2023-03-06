// console.log("Hello World")

// run-time value can be change of a variable.
// let a = 1
// console.log(a)

// a = "Shashank"
// console.log(a)

// let vs var vs const
// var is globally scoped while let and const are block scoped
// var can be updated & re-declared within its scope
// let can be updated but not re-declared
// const can neither be updated nor be re-declared
// var and let variable are initialized with undefined whereas const are not initialized.


// let a = 1
// {
//     let a = 2
//     console.log(a)
// }
// console.log(a)
// Output : 2 1

// var a = 1
// {
//     var a = 2
//     console.log(a)
// }
// console.log(a)
// Output : 2 2

// primitives - n(null)n(number) b(boolean)b(bigint) s(string)s(symbol) u(undefined)

// Object
// const item = {
//     "name": "Shashank"
//     "age": 22
// }

// const a1 = 3
// a1 = 4

// const item1 = {
//     "name": "Shashank",
//     "age": 22
// }
// item1["name"] = "Sagar"
// Object.keys(item1) = array of keys
// item1[Object.keys(item1)[0]] = value of 0th index key
// console.log(item1)

// let a = prompt("prompt return string always")
// a = Number.parseInt(a)
// if (a > 0) {
//     alert("a is greater than 0")
// }
// else {
//     alert("a is less than 0")
// }

// loops in js
// for, for of(for value of object), for in(for key of object), while, do while

// function in js
// function func_name(){return "Hello"}
// const sum = (a,b) => {return a+b}

// string in js
// strings are immutable
// string can be created using "" and ''
// let str = "Shashank"
// let s = `My name is ${str}` String Interpolation
// let a = 'Shashank\'s Home' escape sequence character
// string method - str.length, str.toUpperCase(), str.toLowerCase(), str.slice(start,end(not included)), str.replace("Sha","sha"),
// str.concat(s), str.trim()
