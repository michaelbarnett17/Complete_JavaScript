const dogsJulia = [16, 6, 10, 5, 6, 1, 4];

const calcHumanAge = function (dogs) {

    const dogsHumanAges = dogs.map(function (dog) {
        if (dog <= 2) {
            return 2 * dog;
        } else if (dog > 2) {
            return 16 + dog * 4;
        }
    });

    console.log(dogsHumanAges);

    const dogsOver18 = dogsHumanAges.filter(function (dog) {
        return dog > 18;
    });

    console.log(dogsOver18);
}

calcHumanAge(dogsJulia);

const totalAges = dogsJulia.reduce(function (accumulator, currentElement, currentIndex_OPTIONAL, array_OPTIONAL) {
    return accumulator + currentElement
}, 0);

console.log(totalAges/dogsJulia.length);