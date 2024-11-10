import {counterFactory,limitFunctionCallCount,cacheFunction} from "./clousers-solution.js"


//1.
let newobj = counterFactory() ;

//2.

let innerlimit = limitFunctionCallCount(() => console.log("working") ,  5) ;
innerlimit() ;
innerlimit();
innerlimit() ;
innerlimit();
innerlimit() ;
console.log(innerlimit() )

//3.
let func = cacheFunction(() => "Hello");
func('ajay' );
func('aman') ;
