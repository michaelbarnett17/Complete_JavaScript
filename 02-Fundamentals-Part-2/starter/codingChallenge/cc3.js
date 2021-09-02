`use strict`

let people = [];

people[0] = {
    firstName: `Mark`,
    lastName: `Miller`,
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi;
    },

};

people[1] = {
    firstName: `John`,
    lastName: `Smith`,
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi;
    },
};

if (people[0][`calcBMI`]() > people[1][`calcBMI`]())
 {
    console.log(`${people[0]['firstName']} ${people[0]['lastName']} has the higher BMI (${people[0]['calcBMI']()}) compared to ${people[1]['firstName']} ${people[1]['lastName']} who only has a BMI(${people[1]['calcBMI']()}) }`)
 }
 else
 {
    console.log(`${people[1]['firstName']} ${people[1]['lastName']} has the higher BMI (${people[1]['calcBMI']()}) compared to ${people[0]['firstName']} ${people[0]['lastName']} who only has a BMI(${people[0]['calcBMI']()}) }`)
 }








