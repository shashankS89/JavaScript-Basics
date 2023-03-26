/*

Object Oriented Programming(OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic.
An object can be defined as a data field that has unique attributes and behavior.

OOP focuses on the objects that developers want to manipulate rather than the logic required to manipulate them. 
This approach to programming is well-suited for programs that are large, complex and actively updated or maintained. 
This includes programs for manufacturing and design, as well as mobile applications

Prototype - JS objects have a special property called prototype that is either null or references another object.
onject ---> [[prototype]]
When we try to read a prototype from a object and it's missing, JS automatically takes it from the prototype. This is called "prototype inheritance."

Setting Prototype - We can set prototype by setting __proto__. Now if we read a property from the object which is not in object and is present in the prototype, JS will take it from prototype.
If we have a method in object, it will be called from the object. If its missing in object and present in prototype, its called from the prototype

let a = {
    name: "shashank"
}

let p = {
    run: () => {
        alert("run")
    }
}

a.__proto__ = p
a.run()

Classes and Object - In OOP, a class is an extensible program-code template for creating objects, providing initial values for state(member variable) and implementation of behaviour.
The basic syntax for writing a class is:
class myClass{
    constructor(){...}
    method1(){...}
    method2(name){
        this.name = name
    }
}

We can then use new myClass() to create a new object with all the listed methods.

The constructor method - is called automatically by new, so we can initialize the object there.

class inheritance - is a way for one class to extend another class. This is done by using the extends keyword.
extend keyword is used to extend another class
ex - class Child extends Parent

Method overriding - If we create our own implementation of function in child, it will not be taken from the parent class. This is called Method overriding.
super keyword - when we override a method, we don't want the method of the previous class to go in vain. We can execute it using super keyword.
        super(a,b) -> call parent constructor
ex- requestLeave(leaves){
    super.requestLeave(leaves)  // calling parent requestLeave function
    console.log("Enter in child class")
}

Overriding constructor - With a constructor, things are a bit tricky/different. Acc. to the specification, if a class extends another class and has no constructor, then the following empty constructor is generated:
class child extends parent{
    constructor(...args){
        super(...args);
    }
}

constructor in inheriting classes must call super(...) and call it before using this keyword.

static method - static methods are used to implement functions that belong to a class as a whole and not to any particular object.
ex - class Employee{
    static asdf(){
        alert("Hey!")
    }
}
access - Employee.asdf()
static methods aren't available for individual objects.

getters, setters and instanceOf
classes may include getters and setters to get and set the computed properties
ex- class Person {
    constructor(name){
        this._name = name
    }
    ...
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
}
let a = new Person("shashank")
console.log(a.name)

instanceOf operator allows to check whether an object belongs to a certain class.
The syntax is:
<obj>instanceOf<class>
It return true if obj belongs to the Class or any other class inheriting from it.

*/