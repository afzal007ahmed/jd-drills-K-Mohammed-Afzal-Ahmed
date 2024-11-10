
function keys(obj) {
    // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys
    let keysarr = [] ;
    for( let i in obj ){
      keysarr.push( i);
    }
    return keysarr ;
  }


  function values(obj) {
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values
    let valuesarr = [] ;
    for( let i in obj ) {
      valuesarr.push(obj[i]);
    }
    return valuesarr ;
  }

  
  function mapObject(obj, cb) {
    // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
    // http://underscorejs.org/#mapObject
    let newobj = {} ;
    for( let i in obj ){
      newobj[ i ] = cb(  obj[ i ] ) ; 
    }
    return newobj ;
  }
  

  function pairs(obj) {
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs
  let allpair = [] ;
  for( let i in obj ) {
    let singlepair = [] ;
    singlepair.push( i ) ;
    singlepair.push( obj[ i ] ) ;
    allpair.push( singlepair ) ;
  }
  return allpair ;
  }


function invert(obj) {
    // Returns a copy of the object where the keys have become the values and the values the keys.
    // Assume that all of the object's values will be unique and string serializable.
    // http://underscorejs.org/#invert
    let newobj = {} ;
    for( let i in obj ) {
      newobj[ obj[ i ] ] = i ;
    }
    return newobj ;
  }


function defaults(obj, defaultProps) {
    // Fill in undefined properties that match properties on the `defaultProps` parameter object.
    // Return `obj`.
    // http://underscorejs.org/#defaults
    for( let i in defaultProps ) {
      if( obj[i] === undefined && defaultProps[i] != undefined){
         obj[i] = defaultProps[ i ] ;
      }
    }
  }


module.exports = { keys , values , mapObject , pairs , invert , defaults } ;