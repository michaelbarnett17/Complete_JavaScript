`use strict`;

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `You are ${age}, born in ${birthYear}`;
        console.log(output);


        if (birthYear >= 1981 && birthYear <= 1996) {
            const str = `Oh, and your a millenial, ${firstName}`;
            console.log(str);
            var milleanal = 'true';
        }
        // Can access var is function scoped
        console.log(milleanal);

        // Can't access, block scoped
        // console.log(str);

        
        function add(a,  b) {
            return a + b;
        }
        console.log(add(1,2));
    }

    printAge();
    return;
}

const firstName = `Mike`;
calcAge(1984);

