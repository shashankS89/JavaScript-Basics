/* Events and Other DOM properties

console.log shows the element DOM tree
console.dir shows the element as an object with its properties.

tagName / nodeName - used to read tag name of an element
tagName - only exist for element node.
nodeName - defined for any node (text, comment etc).

innerHTML and outerHTML 
- inner html property allows to get the HTML inside the element as a string.
- outerHTML property contains the full HTML i.e., innerHTML + the element itself.

innerHTML is valid only for element nodes. For other node types we can use nodeValue or data.

textContent - provide access to the text inside the element.
 
id.hidden = false; // to see hidden element 

Attribute Methods 
* elem.hasAttribute(name)
* elem.getAttribute(name)
* elem.setAttribute(name,value)
* elem.removeAttribute(name)
* elem.attributes 

data-* attributes - We can always create custom attribute but the ones starting with "data-" are reserved for programmers use.
They are available in a property named dataset.
If an element has an attribute named "data-one", its available as element.dataset.one.

Some more Insertion method to insert element in the DOM.
let div = document.createElemnet('div')
div.className = 'alert'
div.innerHTML = "<span>hello</span>"
document.body.append(div)

* node.append(e)
* node.prepend(e)
* node.before(e)
* node.after(e)
* node.replaceWith(e) - replace node with given node.

insertAdjacentHTML/Text/Element - This method is used to insert HTML. The first parameter is a code word, specifying where to insert. Must be one of the following:
* beforebegin - insert HTML immediately before element
* afterbegin
* beforeend - insert element into element at the end.
* afterend
example - first.insertAdjacentHTML('beforeend', '<div class="text">beforeend</div>)

element.remove() // to remove element

className and classList - If we assign something to elem.className, it replaces the whole string of classes.
Often we want to add/remove/toggle a single class.
* elem.classList.add/remove("class") - adds/removes a class
* elem.classList.toggle("class") - Adds the class if it doesn't exist, otherwise removes it.
* elem.classList.contains("class") - checks for the given class, returns true/false.
Example - 
first.classList.remove("red")
first.classList.add("red")
first.classList.toggle("red")
first.classList.contains("red")

setTimeout() and setInterval()
setTimeout allows us to run a function once after the interval of time.
syntax - let timerId = setTimeout(function,<delay>,<arg1>,<arg2>) //return timer Id
clearTimeout is used to cancel the execution
setInterval method have a similar syntax as setTimeout. But it runs the func not only once, but regularly after the given interval of time.
clearInterval is used to cancel the setInterval esecution.

let a = setTimeout(()=>{
    alert("I am inside of setTimeout")
}, 5000)
clearTimeout(timerId)

Browser Events - An event is a signal that something has happened. All the DOM nodes generate such signals.

Some imp DOM evenets are:
Mouse events
Keyboard evenets
form element events
document events

Events can handled through HTML attributes
<input value="hey" onClick="alert('hey') type="button">

Events can also be handled through the onClick property
elem.onClick = function(){alert("Yes")};
Adding a handler with JavaScript overwrites the existing handler.

addEventListener and removeEventListener
addEventListener is used to assign multiple handlers to an event.
element.addEventListener(event, handler)
element.removeEventListener(event,handler)

Event Object - When an event happens, the browser creates an event object, puts details into it and passes it as an argument to the handler.
elem.onClick = function(e){
    ....
}
event.type : Event type
event.currentTarget : Element that handled the event
event.clientX / event.clientY : coordinates of the cursor


*/