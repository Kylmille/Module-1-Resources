/**
 * Three types of scope!
 * 
 * 1. Local/function
 *    - variables available within a function
 *    - variables declared inside the function
 *    - variables already declared when the function was defined
 *    - function () {}
 * 
 * 2. Block
 *    - a block of code
 *    - for () {}
 *    - if () {}
 *    - while () {}
 * 
 * 3. Global
 *    - represented by the window/node global object
 *    - is available to the entire program/file
 *    - AVOID creating variables in global scope
 * 
 * 
 * Scope Chaining:
 *    - JS scope chain looks for the nearest variable that has the name we need'
 *    - a key scoping in js, inner scope can access variables of outer scope
 *    - outer scope cannot access the variables of the inner scope
 * 
 */

let name = 'global' //global scope

function myFunc() {
  name = 'function/local' //function scope
  console.log(name)

  if (true) {
    let name = 'block1' //block scope
    console.log(name)

    for (let i = 0; i < 1; i++) {
      let name = 'block2' //block scope
      console.log(name)
    }

  }
}

myFunc();
console.log(name) 


/**
 * Variable declarations
 * 
 * 1. let - what we've been using
 *    - block scoped
 *    - can be reassigned
 *    - cannot redeclare
 * 
 * 2. const - stands constant
 *    - block
 *    - cannot be reassigned
 *    - cannot be redeclared
 * 
 * 3. var
 *    - function
 *    - can be reassigned or redeclared
 * 
 * 4. (none/no keyword)
 *    - global
 *    - any variable that is declared in global scope will be globally available
 *    - any variable that is declared WITHOUT let, const, or var will be globally available
 */

let variable; //declaration
variable = "some value" //assignment
let variable2 = "more value" //initialization