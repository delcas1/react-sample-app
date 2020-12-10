const square = function (x) {
    return x * x;
};

//first thing we do is set it equal to something:
//const sqaureArrow =


//First, the "function" keyword goes away
//and start with the arguments list (in this case) that the function takes 
// (a, b, c) or ( ) etc
//const squareArrow = (x) 

//the we add the equal sign and arrow
//const squareArrow = (x) => 
    
//Finally, we set up the function body
const squareArrow = (x) => {
return x * x;
}

console.log(square(3));


// function square(x) {
//   return x * x;
// };

// console.log(square(3));

// // const squareArrow = (x) => {
// //   return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));


// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0];
// };

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Andrew Mead'));
