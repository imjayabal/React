var nameVar = 'Jayabal';
var nameVar = 'Malaichamy'
console.log('nameVar', nameVar);

let nameLet = 'Prathyush';
nameLet = 'Jayan'
console.log('nameLet', nameLet);

const nameConst = 'Nithilan';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Jayabal Malaichamy';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);