
//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
function getemail( arrayOfObjects ){
  arrayOfObjects.forEach( (element) => {
    console.log(element.email);
 } )
}
 
 //    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
 function gethobbies( arrayOfObjects ) {
 arrayOfObjects.forEach((element) => {
    if( element.age === 30 ) {
       console.log(element.hobbies) ;
    }
 })}
 
 //    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
 function getstudentdetails( arrayOfObjects ) {
 arrayOfObjects.forEach( (element) => {
    if( element.isStudent && element.country == 'Australia'){
       console.log(element.name) ;
    }
 })}
 
 
 //    Implement a loop to access and print the ages of all individuals in the dataset.
 function getall(arrayOfObjects) {      
 arrayOfObjects.forEach( (Element) => {
          console.log( Element.age) ;
        })}
 //    Create a function to retrieve and display the first hobby of each individual in the dataset.
 
 function firsthobby(arrayOfObjects) {
 arrayOfObjects.forEach((e) => {
    console.log( e.hobbies[ 0 ] ) ;
 })}
 //    Write a function that accesses and prints the names and email addresses of individuals aged 25.
 function get25(arrayOfObjects){ 
 arrayOfObjects.forEach( (e) => {
    if( e.age == 25 ) 
    console.log(e.name , e.email ) ;
    })}
 
 //    Implement a loop to access and log the city and country of each individual in the dataset.
 function getplace( arrayOfObjects ) {
 arrayOfObjects.forEach( (e) => {
      console.log( e.city , e.country ) ; 
    
 })}

 module.exports = { getemail , gethobbies , get25 , getstudentdetails , getall  , firsthobby , getplace } ;