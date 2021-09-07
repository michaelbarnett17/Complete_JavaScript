let text = [`underscore_case`, `first_name`, `Some_Variable`, `calculate_AGE`, `delayed_departure`];

for (const i of text) {
    let strArray = i.split(`_`);
    let newString = strArray[0] + strArray[1][0].toUpperCase() + strArray[1].slice(1).toLowerCase();
    console.log(newString);
}