import {each,map,reduce,find , filter , flatten} from "./array-solution.js"
const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.
/*
    Complete the following functions.
    These functions only need to work with arrays.
    A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
    The idea here is to recreate the functions from scratch BUT if you'd like,
    feel free to Re-use any of your functions you build within your other functions.
    **DONT** Use for example. .forEach() to recreate each, and .map() to recreate map etc.
    You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating

*/

//1.

each( items , (ele , ind) => { ele[ind]++ ; })
console.log( items ) ;

//2.

let newitems = map( items , ( ele ) => ele * 5  ) ;
console.log( newitems ) ;

//3.

let finalans = reduce( items , ( val , val2 ) => val - val2 ) ;
console.log( finalans) ;

//4.

console.log( find(items , (ele) => ele === 2) ) ;

//5. 

console.log( filter( items , (ele) => ele > 4) )

//6. 

const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

console.log( flatten( nestedArray ) ) ;
