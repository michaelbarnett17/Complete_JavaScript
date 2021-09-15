const ownersEatTooLittle = [];
const ownersEatTooMuch = [];

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

for (const dog of dogs) {
    const recommendedFood = dog.weight ** 0.75 * 28;
    dog.recommendedFood = recommendedFood
}

for (const dog of dogs) {
    if (dog.owners.includes(`Sarah`))
    {
        if (dog.curFood > dog.recommendedFood) {
            console.log(`Sarah's dog eats too much`);
        }
        else
        {
            console.log(`Sarah's dog eats too little`);
        }

    }
}

for (const dog of dogs) {

    if (dog.curFood > dog.recommendedFood) {
        ownersEatTooMuch.push(...dog.owners)
    }
    else
    {
        ownersEatTooLittle.push(...dog.owners)
    }

}
let sentence = '';
for (const [i, owner] of ownersEatTooLittle.entries()) {

    if (i < ownersEatTooLittle.length - 1) {
        sentence += owner + ' and '
        } else {
        sentence += owner + ' dogs eat too little '
    }


}
console.log(sentence);

console.log();

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);


const FUNCTION_NAME = (PARAM1, PARAM2) => {

}