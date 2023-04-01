/*

Iterator in Javascript - is an object which defines a sequence and potentially a return value upon its termination.
Specifically, an iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties:

ex - function fruitsIterator(values) {
    let nextIndex = 0;

    return {
        next: function () {
            if(nextIndex < values.length){
                return {
                    value: values[nextIndex],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}
const array = ['Apple','Grapes','Banana']

const fruits = fruitsIterator(array)
console.log(fruits.next().value)  // Apple

generator in JS - While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly maintain their internal state. Generator functions provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continuous.
Generator functions are written using the function* syntax.

ex - function* numbersGen(){
    let i=0;
    while(true){
        yield i++;
    }
}

const gen = numbersGen();
console.log(gen.next().value)

Immediately Invoke Function Expressions(IIFE) - is a JS function that runs as soon as it is defined.
(function(){
    ...
    ...
})();

It is used to avoid polluting the global namespace, execute an async-await, etc.
ex - let a = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(456)
        },4000)
    })
}

(async ()=>{
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
})()

Destructuring - is used to unpack values from an array, or properties from objects, into distinct variables.
ex - let [x, y] = [7, 20]

Spread Syntax - allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected.
In an object literal, the spread syntax enumerate the properties of an object and adds the key-value pairs to the object beeing created.

ex - const arr = [1,7,11]
const obj = {...arr};   // {0:1,1:7,2:11}

function sum(v1,v2,v3){
    return v1+v2+v3
}

console.log(sum(...arr))


function, global and block scopes - JS has 3 types of scopes:
1. Block Scope
2. Function Scope
3. Global Scope

let and const provide block level scope which means that the variable declared inside a {} cannot be accessed from outside the block
{
    let a = 27;
}
// a is not available here

variable declared within a JS func, become local to the function.

A variable declared outside a function, becomes global

Hoisting - refers to the process whereby the interpreter appears to move the declarations to the top of the code before execution.
Variables can thus be referenced before they are declared in JS.

Note: JS only hoists declarations, not initializations. The variable will be undefined until the line where its initialized is reached.
ex - console.log(a) // undefined
var a = 9;
console.log(a) // 9

this happen with var but not with const and let // error will be cannot access 'a' before initialization.
function expressions and class expression are not hoisted.

Closure - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  return displayName;
}
let c = init();
c()

function returnFun() {
    const x = () => {
        let a = 1
        console.log(a)
        const y = () =>{
            console.log(a)
            const z = () => {
                console.log(a)
            }
            z()
        }
        a = 999
        y()
    }
    return x
}

let a  = returnFun()
a()  // 1 999 999



*/

