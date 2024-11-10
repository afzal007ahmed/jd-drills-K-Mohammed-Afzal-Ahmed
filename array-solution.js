  function each(elements, cb) {
    // Do NOT use forEach to complete this function.
    // Iterates over a list of elements, yielding each in turn to the `cb` function.
    // This only needs to work with arrays.
    // You should also pass the index into `cb` as the second argument
    // based off http://underscorejs.org/#each
    for ( let i in elements ) {
       cb( elements , i ) ;
    }
  }


  function map(elements, cb) {
    // Do NOT use .map, to complete this function.
    // How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
    // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
    // Return the new array.
    let newarr = [] ;
    for(  let i in elements ){
         newarr.push( cb( elements[ i ]) ) ;
    } 
    return newarr ;
  }
  

  function reduce(elements, cb, startingValue) {
    // Do NOT use .reduce to complete this function.
    // How reduce works: A reduce function combines all elements into a single value going from left to right.
    // Elements will be passed one by one into `cb` along with the `startingValue`.
    // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
    // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
   let ans =  startingValue ;
   let i = 0 ;
   if( startingValue === undefined ) {
    ans = elements[ 0 ] ;
    i++;
   }
   for( ; i < elements.length ; i++ ) {
     ans = cb( ans , elements[ i ] ) ;
   }
   return ans ;
  
  }


  function find(elements, cb) {
    // Do NOT use .includes, to complete this function.
    // Look through each value in `elements` and pass each element to `cb`.
    // If `cb` returns `true` then return that element.
    // Return `undefined` if no elements pass the truth test.
  let e = undefined;
  for( let i of elements ) {
    if( cb( i ) ) {
      e = i ;
      return e ;
    } 
  }
  return e ;
  }

  function filter(elements, cb) {
    // Do NOT use .filter, to complete this function.
    // Similar to `find` but you will return an array of all elements that passed the truth test
    // Return an empty array if no elements pass the truth test
    let arr = [] ;
    for( let i of elements ) {
      if( cb( i ) ){
        arr.push( i ) ;
      }
    }
    return arr ; 
  }

  
function flatten(elements) {
    // Flattens a nested array (the nesting can be to any depth).
    // Hint: You can solve this using recursion.
    // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
    let arr = [] ;
    let temp ;
    for( let i of elements ) {
      if( typeof( i ) === "object") {
        temp = flatten( i ) ;
        for( let j of temp ) {
          arr.push( j ) ;
        }
      }
      else{
        arr.push( i ) ;
      }
    }
    return arr ;
  }

  module.exports ={each,map,reduce,find , filter , flatten};