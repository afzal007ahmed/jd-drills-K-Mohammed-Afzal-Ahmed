
import { keys , values , mapObject , pairs , invert , defaults } from "./objects-solution.js"
const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.
// Check and use MDN as well
// PROJECT RESTRICTION: You can't use the built in Object methods.  Only use native JavaScript for loops. No other types of loops are allowed.
// PROJECT RESTRICTION: You can't use the underscore library or any other external library.

//1.
console.log( keys(testObject )) ;

//2.
console.log( values( testObject) ) ;

//3.
console.log( mapObject(testObject , ( val ) => val + 5 ) ) ;

//4.
console.log( pairs( testObject) ) ; 

/* STRETCH PROBLEMS */
//5.
console.log( invert( testObject ) ) ;

//6.
defaults(testObject , {'hello':'world'}) ;
console.log(testObject) ;