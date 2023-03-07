let marks_class = [91, 82, 63, 84]
// console.log(marks_class)

let dynamic_values = [91, 82, 63, false, 'Not Present']
// console.log(dynamic_values)

// console.log(dynamic_values[1], dynamic_values[6]) // index 6 doesnot exist

dynamic_values[6] = 99  // adding a new value to the array
dynamic_values[6] = 100 // updating a value in array
// console.log(dynamic_values[6]) // In JavaScript, arrays are object

///// array methods ////

let num = [1, 2, 3, 4, 5]
let b = num.toString() // b is now string
let c = num.join('_')

// console.log(b, c)
let r = num.pop() // return the popped element
let s = num.push(5) // return the length of the new array
// console.log(r, s)

let x = num.shift() // remove the first element from the array and return popped element
let y = num.unshift(1) // add element to the begining and return length
// console.log(num, x)

// delete num[0] //delete the element but the length will be same
// console.log(num)

n1 = [1, 2, 3, 4]
n2 = [5, 6, 7, 8]
newN = n1.concat(n2) // n1.concat(n2, n2) - doesnot change existing array
// console.log(newN)

let a = [1, 5, 8, 2, 111, 22]
// a.sort() // change the existing array

// let compare = (a, b) => {
//     return b - a
// }
// a.sort(compare)
// console.log(a)

// splice and slice

// arr.splice(position to add, no. of element to remove, element to be added)
// console.log(a)
// a.splice(2, 3, 21, 22, 23) return deleted values
// console.log(a)

// console.log(a.slice(1),a.slice(1, 5))  // return new array

// for (let i = 0; i < a.length; i++) {
//     console.log(a[i])
// }

// a.forEach((val) => console.log(val))

let n = "Shashank"
n = Array.from(n)
// console.log(n)

// for (let i of n) {
//     console.log(i) // value
// }

// for (let i in n) {
//     console.log(i) // key (index)
// }

// map, filter and reduce

let arr = [22, 34, 32, 22]
// map return new array
let newArr1 = arr.map((value) => {
    return value + 1
})
// console.log(newArr1)

// it filters an array with values that passesa test and return new array
let newArr2 = arr.filter((value) => {
    return value < 25
})
// console.log(newArr2)

// reducer reduces an array to a single value
let sumArr = arr.reduce((a, b) => {
    return a + b
})
// console.log(sumArr)








