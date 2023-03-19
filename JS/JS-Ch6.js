/*

Callbacks, Promises and Async/Await

Asynchronous actions are the actions that we initiate now and they finish later. Ex - setTimeout.
Synchronous actions are the actions that initiate and finish one-by-one.

Callback functions : A callback functions is a function passed into another function as an argument, which is then invoked inside the outer function to complete an action.
Ex - function loadscript(src,callback){
    let script = document.createElement('script')
    script.src = src
    script.onload = () => callback(script)
    documen.head.append(script)
}
This is called 'callback-based' style of async programming. Afunction that does something asynchronously
should provide a callback argument where we put the function to run after its complete.

Handling Errors - We can handle callback error by supplying error argument like below:
function loadscript(src,callback){
    ...
    ...
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error('failed));
    ...
}

Pyramid of Doom - When we have callback inside callback, the code get difficult to manage.
loadscript((){
    loadscript..
        loadscript..
            loadscript..
})

As call become more nested, the code becomes deeper and increasingly more difficult to manage. This is sometimes called "callback hell".

Promises - The solution to the callback is the promises. A promise is a "promise of code execution". 
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
The code either executes or fails in both the cases the subscriber will be notified.

The syntax of a Promise looks like:
let promise = new Promise(function(resolve, reject){
    //execute
})

resolve and rigid are the two callbacks provided by js itself. They are called like:
resolve(value) -> if the job is finished successfully.
reject(error) -> If the job fails

The promise object returned by the new Promise constructor has these properties.
* state: Initially pending, then changes to either "fulfilled" when resolve is called or "rejected" when reject is called
* result: Initially undefined, then changes to value if resolved or error when reject

Consumers : then() and catch()
The consuming code can receive the final result of a promise through then and catch.

If we are interested only in successful completions, we can provide only one function argument to: .then() .
If we are interested only in errors we can use null as the first argumet: .then(null,f) or we can use .catch().
promises.finally(()=>{}) is used to prepare general cleanups

Promise Chaining
We can chain promises and make them pass the resolved value to one another.
p.then((res)=>{
    alert(res);
    return 2;
}).then((res)=>{
    console.log(res)
})
The idea is to pass the result through the chain of .then handlers.

We can attach multiple handlers to one promises. They don't pass the result to each other, instead they process it independently
p.then(handler1)
p.then(handler2)
p.then(handler3)

Promise API - There are 6 static methods of Promise class.
* Promise.all(promise) -> wait for all promises to resolve and returns the array of their results. If any one fails, it become the error and all other results are ignored.
* Promise.allSettled(promises) -> wait for all promises to resolve and returns the results as an array of objects with status and value.
* Promise.race(promises) -> waits for the first promise to settle and its result/error becomes the outcome.
* Promise.any(promises) -> waits for the first promise to fulfill( & not rejected), and its result becomes the outcome. Throws aggregate error if all the promises are rejected.
* Promise.resolve(value) -> makes a resolved promise with given value.
* Promise.reject(error) -> makes a rejected promise with the given error.

Async/Await - There is a special syntax to work with promises in js.
A function can be made asynchronous by using async keyword.
An async function always returns a promise. other value are wrapped in a promise automatically.
There is another keyword called await that works only inside async functions.
await keyword makes js wait until the promise settle and returns its value.

It's just a more elegant syntax of getting the promise result than promise.then + it's easier to read and write.

The try ... catch syntax allows us to catch error so that the script instead of dying can do something more reasonable.
try{
    ...
}
catch{
    ...
}
try catch works synchronously. If an exception happens in scheduled code, like in setTimeout, then try..catch won't catch it.

Error Object - For all the built in errors, the error object has two main properties: name and message (sometimes we get stack also).
try{
    ...
}
catch(err){
    console.log(err.name,err.message,err.stack)
}
to throw custom error - throw new ReferenceError("Shashank is not defined")

finally clause - The try..catch construct may have one or more code clause : finally.
If it exists it runs in all cases :
- after try if there were no errors
- after catch if there were errors

If there is a return in try, finally is executed just befor the control returns to the outer code.
try{
    ..
}
catch(e){
    ..
}
finally{
    ..
}

ques3 
let a = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("Please this is not acceptable"))
        }, 3000)
    })
}

let a = async () => {
    try{
        let c = await p()
        console.log("Value of c: " + c);
    }
    catch(err){
        console.log("This error has been handled")
    }
}

*/