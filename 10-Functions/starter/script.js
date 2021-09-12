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

const lufthansa = {
    airline: `Lufthansa`,
    iataCode: `LH`,
    bookings: [],
    book: function (flightNumber, name) {
        console.log(`${name} booked a seat on 
        ${this.airline} flight ${this.iataCode} ${flightNumber}`);

        this.bookings.push({flight: `${this.iataCode} ${flightNumber}`, name});
    }
};

lufthansa.book(239, `Jonas Anderson`);
lufthansa.book(333, `Bob Marley`);
lufthansa.book(222, `Mike`);
console.log(lufthansa);

const euroWings = {
    airline: `Eurowings`,
    iataCode: `EW`,
    bookings: [],
};

const book = lufthansa.book;
// won't work
// book(`001`, `Jeff`);

book.call(euroWings, 23, "jane doe");

book.call(lufthansa, 22, 'homer');

const bookEW = book.bind(euroWings)

bookEW(555, `marge`);

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);

    this.planes++;
    console.log(this.planes)
}

document.querySelector(`.buy`).addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa));

const FUNCTION_NAME = (PARAM1, PARAM2) => {

}


(function() {
    console.log(`hi`);
})();

let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

g();
f();
