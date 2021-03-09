//Superclass
class Person {
    constructor(name, quirkyFact) {
        this.name = name;
        this.quirkyFact = quirkyFact;
        this.age = age;
    }

    bio() {
        return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
    }
}

//Sub Class
class Mentor extends Person {
    //completely redefine the bui method since it has more to say
    bio() {
        return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
        }
    }

class Student extends Person {
    enroll(cohort) {
        this.cohort = cohort;
    }
    bio() {
        return `I'm a student at LHL. ${super.bio()}`;
    }
}


//the student class doesn't ned to define bio since it can just use the one from Person

//driver code

const bob = new Mentor('Bob Ross', 'I like mountains way too much');
console.log(bob.bio());


// goOnShift() {
//         this.onShift = true;
//     }
    
// class Student extends Person {
//     enroll(cohort) {
//         this.cohort = cohort;
//     }
// }

//     goOffShift() {
//         this.onShift = false;
//     }
// }