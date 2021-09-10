`use strict`;

// const oneWord = function() {
//     return String.replace(/ /g, ' ').toLowerCase();
// }

// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(` `);
//     return [first.toUpperCase(), ...others].join(` `);
// }

// const transformer = function(str, fn) {
//     console.log(`Original String: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by ${fn.name}`);
// }

// transformer(`JavaScript is the best!`, upperFirstWord);

const greet = function(greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet(`Hey`);
greeterHey(`Mike`);
greeterHey(`Joe`);

greet(`Hello`)(`Bob`);

const arrowGreet = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`);
    }
}

arrowGreet(`Whatssaaaa`)(`Steve`);

const myAirline = {
    airline: `Lufthansa`,
    iataCode: `LH`,
    bookings: [],
    book: function (flightNumber, name) {
        console.log(`${name} booked a seat on 
        ${this.airline} flight ${this.iataCode} ${flightNumber}`);

        this.bookings.push({flight: `${this.iataCode} ${flightNumber}`, name});
    }
};

myAirline.book(239, `Jonas Anderson`);
myAirline.book(333, `Bob Marley`);
myAirline.book(222, `Mike`);
console.log(myAirline);

const euroWings = {
    name: `Eurowings`,
    itaCode: `EW`,
    bookings: [],
};

const book = myAirline.book;
book(`001`, `Jeff`);