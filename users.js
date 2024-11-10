const users = {
    "John": {
        age: 24,
        desgination: "Senior Golang Developer",
        interests: ["Chess, Reading Comics, Playing Video Games"],
        qualification: "Masters",
        nationality: "Greenland"
    },
    "Ron": {
        age: 19,
        desgination: "Intern - Golang",
        interests: ["Video Games"],
        qualification: "Bachelor",
        nationality: "UK"
    },
    "Wanda": {
        age: 24,
        desgination: "Intern - Javascript",
        interests: ["Piano"],
        qualification: "Bachaelor",
        nationality: "Germany"
    },
    "Rob": {
        age: 34,
        desgination: "Senior Javascript Developer",
        interests: ["Walking his dog, Cooking"],
        qualification: "Masters",
        nationality: "USA"
    },
    "Pike": {
        age: 23,
        desgination: "Python Developer",
        interests: ["Listing Songs, Watching Movies"],
        qualification: "Bachaelor's Degree",
        nationality: "Germany"
    }
}




/*
Q1 Find all users who are interested in playing video games.
*/
for( let i in users ) {
    if( users[ i ].interests.indexOf('Video Games') != -1 ){
          console.log(users[ i ] ) ;
    }
}
//Q2 Find all users staying in Germany.
for ( let i in users ) {
    if( users[ i ].nationality == 'Germany' ) {
        console.log(users[ i ] ) ;
    }
}

//Q3 Find all users with masters Degree.
for( let i in users ) {
    if( users[ i ].qualification == 'Masters'){
        console.log( users[ i ] ) ;
    }
}

//Q4 Group users based on their Programming language mentioned in their designation.

let object = {
    'python' : [] ,
    'javascript' : [] ,
    'golang' : [] 
}

for ( let i in users ) {
    if( users[ i ].desgination.includes('JavaScript')){
        object.javascript.push( users[ i ] ) ;
    }
    else if(  users[ i ].desgination.includes('Golang') ){
        object.golang.push( users[ i ] ) ;
    }
    else{
        object.python.push(users[ i ] ) ;
    }
}
console.log( object.javascript , object.python , object.golang ) ;