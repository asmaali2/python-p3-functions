function myFunction(param) {
  console.log("Running myFunction");
  return param + 1;
}

const myFunctionReturnValue = myFunction(1);
// => "Running myFunction"
console.log(myFunctionReturnValue);
// => 2

function sayHi(name) {
  console.log(`Hi there, ${name}!`);
}
