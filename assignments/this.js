/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding this keyword for window binding. where it can return whole of javascript language, global access
* 2. Implicit binding within objects, bound to whatever is before the dot
* 3. New Binding when creating new objects, this references new properties and methods created
* 4. Explicit binding is when you force or control what this is bound to such as call, apply, bind.
*
* write out a code example of each explanation above
*/

// Principle 1

var myFunction = function () {
  console.log(this);
}

myFunction();    

// Principle 2

var john = {
  name: 'John',
  greet: function (person) {
    console.log("Hi " + person + ", my name is " + this.name);
  }
}

// Principle 3

function greet () {
  console.log(this.name);
}

var person = {
  name: 'Alex'
};

var greetPerson = greet.bind(person);
greetPerson();

// Principle 4

function Foo() {

  this.name = 'Osama';
  this.say = function () {
    return "I am " + this.name;
  };

  return this;
}

var name = 'Ahmed';
var result = new Foo();
console.log(result.name); 