const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

const tip = (50 <= bill1 && bill1 <= 300 ? 0.15 : 0.20) * bill1;

console.log(`The bill is ${bill1}, the tip is ${tip} and the total is ${bill1 + tip}`);