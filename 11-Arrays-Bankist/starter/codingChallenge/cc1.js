const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];




const checkDogs = function(dogsJulia, dogsKate) {
    console.log(dogsJulia);
    const dogsJuliaCorrected = dogsJulia.slice(1, dogsJulia.length - 2);
    console.log(dogsJuliaCorrected);

    for (const [i, dog] of dogsJuliaCorrected.entries()) {
        console.log(` ${dog}`);
    }
}

checkDogs(dogsJulia, dogsKate);



// for (let i = 0; i < ARRAY_HERE.length; i++) {

// }

for (const [i, dog] of dogsJulia.entries()) {
    console.log(i  +  " " +  dog);
}


dogsMike = dogsKate.map(dog => {
    return dog * 3;
});

console.log(dogsMike);

const JoesDogs = dogsKate.map(function (dog) {
    return dog*33;
});

console.log(JoesDogs);