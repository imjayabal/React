
class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGretting(){
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            // description = description + ` Their major is ${this.major}.`
            description += ` Their major is ${this.major}.`
        }

        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, city){
        super(name,age);
        this.city = city;
    }
    homeLocation() {
        return !!this.city;
    }
    getGretting() {
        let gretting = super.getGretting();

        if(this.homeLocation()){
            gretting += ` I'm visiting from ${this.city}.`
        }

        return gretting;
    }
}

const me = new Traveller('Jayabal Malaichamy', 33, 'Sivagangai');
console.log(me.getGretting());

const mySon = new Traveller('Prathyush Jayan', 2, 'Chennai');
console.log(mySon.getGretting());

const other = new Traveller();
console.log(other.getGretting());
