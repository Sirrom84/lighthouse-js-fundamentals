const sayHello = function (name) {
  console.log("Hello, " +name);
}
sayHello("Rob");
sayHello("Sally");
sayHello("Ruby");
sayHello("Dre");

const returnSayHello = function (name) {
  return "Hello, " +name;
}
const greeting = returnSayHello("John");
console.log(greeting);