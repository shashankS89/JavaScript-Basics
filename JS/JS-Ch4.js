/*
Working with DOM
DOM tree refers to the HTML page where all the nodes are objects. There can be 3 main types of nodes in the DOM tree:
1. text nodes
2. element nodes
3. comment nodes

In an HTML page, <html> is at the root and <head> and <body> are at childre etc.

A text node is always a leaf of the tree.
Auto correction - If an erroneous HTML is encountered by the browser, it tends to correct it.

Note - document.body can sometimes be null if js is written before the body tag.

Direct as well as deeply nested elements of an element are called its children.
element.firstChild -> first child element
element.lastChild -> last child element
element.childNodes -> all child nodes
element.hasChildNodes()

childNodes looks like an array but it's not actually an array but a collection.
We can use Array.from(collection) to convert it into array.

Notes on DOM collection
- They are read-only.
- They are live. elem.childNodes variable will automatically update if childNodes of elem is changed.
- They are iterabe using for .. of loop.

Sibling are nodes that are children of same parents.
to get the next sibling of element
- document.body.firsChild.nextSibling

console.log(document.documentElement.parentNode) // retur document since it is node
console.log(document.documentElement.parentElement) // retur null since document is not element

Element Only Navigable
- firstElementChild
- previousElementSibling
- nextElementSibling
- lastElementChild

Table Links - Certain dom element may provide additional properties specific to their type for convenience.
Table element support the following properties:
table.rows - collection of tr element
table.caption - reference to <caption>
table.tHead - reference to <thead>
table.tFoot - reference to <tfoot>
table.tBodies - collection of <tbody> element
tbody.rows - collection of <tr> element
tr.cells - collection of td and th
tr.sectionRowIndex - index of tr inside enclosing element
tr.rowIndex - row number starting from 0
td.cellIndex - no. of cell inside enclosing <tr>


Searching the DOM
DOM navigation properties are helpful when the elements are close to each other. If they are not close to each other, we have some more methods to search the DOM.
- document.getElementByID
- document.querySelectorAll() - return all element inside an element matching the given CSS selector
- document.querySelector - return the first element for the given CSS selector 
- document.getElementsByTagName
- document.getElementsByClassName
- document.getElementsByName

There are 3 imp methods to search the DOM
- elem.matches(CSS) -> to check if element matches the given the CSS selector
- elem.closest(CSS) -> To look for the nearest ancestor that matches the given CSS selector. The elem itself is also checked.
- elemA.contains(elemB) -> return true if elemB is inside elemA or when elemA==elemB


Excercise - 2 - Snake, Water and Gun
let user = prompt('Enter S, W or G')
let cpuI = Math.floor(Math.random() * 3);
let cpu = ['S','W','G'][cpuI];

const match = (cpu, user) => {
    if(cpu===user){
        return "nobody"
    }
    else if(cpu === 'S' && user === 'W'){
        return "cpu"
    }
    else if(cpu === 'S' && user === 'G'){
        return "user"
    }
    else if(cpu === 'G' && user === 'W'){
        return "user"
    }
    else if(cpu === 'G' && user === 'S'){
        return "cpu"
    }
    else if(cpu === 'W' && user === 'S'){
        return "user"
    }
    else if(cpu === 'W' && user === 'G'){
        return "cpu"
    }
}

let result = match(cpu, user)
document.write('The winner is :' + result)
*/