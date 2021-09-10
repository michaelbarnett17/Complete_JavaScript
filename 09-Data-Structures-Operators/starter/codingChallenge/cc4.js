`use strict`;
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

/*
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure
*/

document.querySelector(`button`).addEventListener(`click`, function () {
    const input = document.querySelector(`textarea`).value;
    const inputArray = input.split(`\n`);


    for (let i = 0; i <= inputArray.length - 1; i++) {
        iTrimmed = inputArray[i].trim();
        // console.log(iTrimmed);
        const strArray = iTrimmed.split(`_`);
        const newString = strArray[0] + strArray[1][0].toUpperCase() + strArray[1].slice(1).toLowerCase();
        const padString = newString.padEnd(20, ` `)
        
        let stringWithIcon = padString;
        
        for (let j = 0; j <= i; j++) {
            stringWithIcon += `✅`;
        }
        console.log(stringWithIcon);
    }
});

