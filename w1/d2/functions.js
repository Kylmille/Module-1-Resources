/*


  Functions!
  - A function is procedure of code that will run when called/invoked functionName()
  - writing a function is know as function declaration or function definition

  * javascript read top to bottom
  * will not read a function unless its called/invoked
  * this is a function call => functionName()
  * this is the function itself functionName() {}


  Some things to remember about return  statements
    1. Every function call evaluates to its return
    2. Every function in js returns undefined unless a return is specified, so a function without a return evaluates to undefined
    3. Once a return statement is encountered, the function will immediately stop and return the value, ignoring anything below the return statement

  Function naming convention
  - camelCase => functionTest
  - descriptive names
  - verb followed by a noun, CRUD getInfo, deleteInfo, editInfo
*/

//example -  with a function that is never called
//nothing happens, this function is never called!
function functionName() {
  console.log('hello');
  return 'hey'
}


//example - with a function that doesnt return, just console.logs
function functionName2() {
  console.log('hello');
  //no return value, defaults to undefined
}

//call our function
//to call a function, use function name, and pass arguments in the parenthesis
// functionName2()
// //what if i log a function call?
// console.log(functionName2);//[Function: functionName2]
// console.log(functionName2());//hello printed, and we return undefined
//we call the function, we log the console.log, because there is no return, the return value defaults to undefined

//were saying print to the terminal the return value of calling this function
// console.log(functionName2())

//example - with a function that does return and console.log
function functionName3() {
  console.log('hey from functionName 3');
  return 'hey from functionName 3'
}

// console.log(functionName3);//[Function: functionName3]
// console.log(functionName3());//hey from functionName 3
// functionName3();
//some things to keep in mind
//you will only see the return value of a function if you wrap your function invocation in a console.log
//the function will still run if its called, but you wont see anything unless you console.log

//console.log to see
//return is what your function evaluates to

//name variable, is a parameter to represent the argument passed
function printName(name) {
  console.log('1st',name);
  return name;//this is what your function will evaluate too
}

//wrap in the function call in console.log so i can see the return value
console.log('2nd', printName('brandon'));//pass the string brandon as a argument to the function printName

printName(true, 1, 2)
console.log()
