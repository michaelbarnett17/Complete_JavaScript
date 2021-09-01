const scoreDolphins = 96 + 108 + 89;
const scoreKoalas = 88 + 91 + 110;
const gamesQty = 3;

const averageDolphins = scoreDolphins / gamesQty;
const averageKoalas = scoreKoalas / gamesQty;

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log('Dolphins Win')
} else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
  console.log("Koalas Win");
} else {
  console.log("The game was a tie");
}