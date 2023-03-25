/*

JS can be used to send and fetch information from the network when needed(AJAX).
Fetch API - is used to get data over the network.
let promise = fetch(url,[option])  //without option a get request is sent.

promise.then((value1)=>{
    return 
})

Getting a response is a 2-stage process.
1. An object of Response class containing "status" & "ok" properties.
- status -> The http status code . eg 200
- ok -> boolean, true if the HTTP status code is 200-299.

2. After that we need to call another method to access the body in different formats:
- response.text() -> Read and return the text
- response.json() -> parse the response as JSON.
Other methods include response.formData(), response.blob(), response.arrayBuffer()
 
Note - We can use only one body reading method example if we have already got the response with response.text() then response.json() won't work.
response header - are available in response.header()

request headers - to set a request header in fetch, we can use the headers option.
let res = fetch(url,{ headers: {
    Authorization: 'secret'
}})

POST Request - To make a post request, we need to use fetch options:
- method -> HTT-method eg POST
- body -> the request body

let response = await fetch('/url',{
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    }
    body: '{"a":"apple"}'
})
let result = await response.json();

Javascript Cookies - cookies are small strings of data stored directly in the browser.
In JS, document.cookie provides access to cookies.

Cookies are set by a web server using the set-cookie HTTP-header. Next time when the request is sent to the same domain, the browser sends the cookie using the cookie HTTP-header.
That why the server knows who sent the request.

Writing to cookie - An assignment to document.cookie is treated specially in a way that a writr operation doesn't touch other cookies.

encode URI Component - This function helps keep the valid formatting. It is used like this:
document.cookie = encodeURIComponent(name)+'='+encodeURIComponent(value)
 ---- This way the special characters are encoded.

cookie options - cookies have several options which can be provided after key = value to a set call like below:
document.cookie = "user=bhr; path=/a; expires=Tue, 29 March 2023"

path option makes the cookie visible at /a, /a/b etc. expires sets the cookie expiration time.

Note:
1. The name=value pair, after encodeURIComponent, should not exceed 4kb.
2. Total no. of cookies per domain is limited to around 20+ (exact no. is browser dependent).


localStorage - localStorage is a web storage object which are not sent to server with each request.
This data survives a full page refresh and even a full browser restart.

There are different methods which are provided by the localStorage
- setItem(key, value) -> store key/value pair.
- getItem(key)
- removeItem(key)
- clear()
- key(index) -> get the key on a given position
- length -> the number of stored items.

We can get and set values like an object.
localStorage.one = 1
delete localStorage.one

Important note:
1. Both key and value must be strings
2. We can use the two JSON methods to store objects in localStorage:

    JSON.stringify(object) -> convert object to JSON strings
    JSON.parse(string) -> cconverts string to objects

session storage - Used less often than localStorage. Properties and methods are same as localStorage but:
1. The sessionStorage exists only within the current browser tab. Another tab with same page will host a different storage.
2. The data survives page refresh but not closing/opening the tab.

Storage Event - When the data gets updated in localStorage or sessionStorage, storage event triggers with these properties:
- key -> the key
- oldvalue -> Previous value
- newValue -> new value
- url -> page url
- storageArea -> local or sessionStorage

We can listen the onstorage event of window which is triggered when updates are made to the same storage from other documents.
ex - window.onstorage = (e) => {
    alert("changed")
    console.log(e)
}



*/