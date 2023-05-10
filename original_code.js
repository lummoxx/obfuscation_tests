var a = 5;
var b = 10;
var c = "string";

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function greet(name) {
  console.log("Hello, " + name + "!");
}

if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is equal to b");
}

for (var i = 0; i < 10; i++) {
  console.log(i);
}

var myArray = [1, 2, 3, 4, 5];
console.log(myArray[2]);

var myObject = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(myObject.name);

var x = 0;
while (x < 5) {
  console.log(x);
  x++;
}

switch (c) {
  case "string":
    console.log("c is a string");
    break;
  case "number":
    console.log("c is a number");
    break;
  default:
    console.log("c is neither a string nor a number");
}
