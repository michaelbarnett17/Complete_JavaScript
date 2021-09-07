const airline = `Air Madison WI`;
const plane = `A432`;

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airline.length);

console.log(airline.indexOf(`M`));

console.log(airline.lastIndexOf(`i`));
console.log(airline.indexOf(`Madison`));

console.log(airline.slice(4, 11));

const checkMiddleSeat = function(seat) {
    // B and E are middle seats
    if(seat.indexOf(`B`) !== -1 || seat.indexOf(`E`) !== -1)
    {
        console.log(`true`);
    } else {
        console.log(`false`);
    }
}

checkMiddleSeat(`11B`)
checkMiddleSeat(`3a`)
checkMiddleSeat(`3E`)

console.log(airline.toLocaleLowerCase());

const myName = 'miCHAeL';

const correctName = myName[0].toUpperCase() + myName.slice(1).toLocaleLowerCase();
console.log(correctName);

const priceEngland = `288,77£`;

const priceUS = priceEngland.replace(`,`,`.`).replace(`£`, `$`);
console.log(priceUS);

repeat = `the the the`;
console.log(repeat.replaceAll(`the`, `a`));;

const splitString = `a+very+nice+string`.split(`+`);

console.log(...splitString);

const mike = `Mike Barnett`;

const [firstName, lastName] = mike.split(` `);
console.log(firstName);
console.log(lastName);