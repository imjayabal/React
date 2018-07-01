// arguments object - no long bound with arrow function
const add = (a,b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(10,6,101));



//this keyword - no longer bound
const user = {
    name: 'Jayabal',
    cities: ['Sivagangai', 'Chennai', 'Bangalore', 'Mumbai', 'Muscat', 'Sohar'],
    printPlaceVisit() {
        return this.cities.map((city) => this.name + ' He is lived in ' + city );
    }
}
console.log(user.printPlaceVisit());

//Challange
const muliplier = {
    numbers: [10, 20, 30],
    multiplyBy: 6,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
}
console.log(muliplier.multiply());