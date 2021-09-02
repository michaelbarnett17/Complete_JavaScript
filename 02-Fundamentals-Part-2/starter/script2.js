`use strict`
// const friends = [`Michael`, `Steven`, `Peter`, `Bob`];
// console.log(friends);

// const years = new Array(1991, 2022, 1984);
// console.log(years);

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = `Jay`;
// console.log(friends[2]);

// const firstName = 'jonas';
// const jonas = [firstName, 'jones', 2037 - 2000, 'programmer', friends];
// console.log(jonas);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);

// console.log(age1);
// console.log(age2);

// const ages = [calcAge(years[0]), calcAge(years[1])];

// console.log(ages);
// const friends = [`Michael`, `Steven`, `Peter`, `Bob`];
// const newLength = friends.push('Joe');
// console.log(newLength);
// console.log(friends);

// friends.unshift('John');
// console.log(friends);

// console.log(friends.pop());
// console.log(friends.pop());

// console.log(friends)
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Bob'));

// console.log(friends.includes('Bob'));




// console.log(mike);

// console.log(mike.firstName);
// console.log(mike[`firstName`]);

// const nameKey = `Name`;
// console.log(mike[`first${nameKey}`])
// console.log(mike[`last${nameKey}`])

// const interested = prompt(`What do you want to know about mike choose between first name, last name, age, job, friends.`)



// if(mike[interested]) {
//     console.log(mike[interested]);
// } else {
//     console.log(`you didn't pick a valid field`)
// }

// mike.location = `wisconsin`;

// console.log(mike[`location`]);

// console.log(`${mike[`firstName`]} has ${mike.friends.length} friends and his best friend is ${mike.friends[0]}`);

// const mike = {
//     firstName: `Mike`,
//     lastName: `Barnett`,
//     birthYear: 1984,
//     job: `programmer`,
//     friends: [`Larry`, `Moe`, `curly`],
//     hasDriversLicense: true,

//     // calcAge: function(birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     calcAge: function() {
//         return 2037 - this[`birthYear`];
//     },

//     getSummary : function() {
//         return `${mike[`firstName`]} is a ${mike[`calcAge`]()} year old ${mike[`job`]} and ${mike[`hasDriversLicense`] ? `does have` : `does not have`} a Drivers License.`
//     }
// };
// console.log(mike.calcAge());
// console.log(mike[`calcAge`]());

// console.log(mike.getSummary());

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights rep ${rep}`);
// }

const friends = [`Michael`, `Steven`, `Peter`, `Bob`];

const firstName = 'jonas';
const jonas = [firstName, 'jones', 2037 - 2000, 'programmer', friends];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
 
//     if (typeof(jonas[i]) !== 'string') {
//         continue;
//     }

//     console.log(jonas[i]);
// }

// for (let i=0; i<types.length; i++) {
//     console.log(types[i]);
// }

// const years = [1991, 2007, 2000, 2019];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// for(let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i]);
// }

// for(let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`starting exercise ${exercise}`)
//     for(let rep = 1; rep <= 5; rep++) {
//         console.log(`lifting weight repetition ${rep}`);
//     }
// }

// let exercise = 1;
// let rep = 1;

// while (exercise <= 5) {
//     while (rep <= 10) {
//         console.log(`Exercise: ${exercise}, lifting weight repetition ${rep}`);
//         rep++;
//     }
//     rep = 1;
//     exercise++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

let maxCount = 0;
for(let a = 0; a < 100; a++) {
    let count = 0;
    while (dice != 6) {
        console.log(`you rolled a ${dice}`);
        dice = Math.trunc(Math.random() * 6) + 1;
        count ++;
        if (dice == 6) {
            // console.log('you rolled a 6, loop ending');
            if(count > maxCount) {
                maxCount = count;
            }
        }
    }
    dice = Math.trunc(Math.random() * 6) + 1;
}

console.log(maxCount);
