// sum function
function sum(a , b){
    console.log(a+b)
}
// call
sum("Hello ", 10) //Hello 10
sum(10, 20) // 30
sum("Hello", " World") // Hello World

// Arrow function: Lambda syntax
// (parameters) => body
const sumNumbers = (a, b) => console.log(a+b)
// Call
sumNumbers("Hello ", 10) //Hello 10
sumNumbers(10, 20) // 30
sumNumbers("Hello", " World") // Hello World

// Ex:
const showMessage = () =>  {return "Hello World 123"}
console.log(showMessage());
