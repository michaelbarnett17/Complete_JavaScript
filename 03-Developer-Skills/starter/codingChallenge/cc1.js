`use strict`

const temperatures1 = [1, 5, 3];
const temperatures2 = [12, 5, -5, 0, 4];
let message = `...`;

function printForecast(arr) {
    for (let i = 0; i < arr.length; i++) {
        message += `${arr[i]}\xB0C in ${i + 1} days... `
    }
    console.log(message);
}

printForecast(temperatures2);

