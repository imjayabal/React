// es5
function square(x) {
    return x * x;
}
console.log(square(8));

// es6
// const squareArrow = (x) => {
//     return x * x ;
// }
const squareArrow = (x) => x * x ;
console.log(squareArrow(12));

//Practice
const fullName = 'Jayabal Malaichamy'
// const getFirstname = (fullName) => {
//     return fullName.split(' ')[0];
// }
const getFirstname = (fullName) => fullName.split(' ')[0];

console.log(getFirstname(fullName));