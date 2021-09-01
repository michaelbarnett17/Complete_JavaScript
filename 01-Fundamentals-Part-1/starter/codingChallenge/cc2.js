let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

console.log("Mark's BMI " + markBMI);
console.log("John's BMI " + johnBMI);

let markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(`Mark has higher BMI`);
} else {
  console.log('John has higher BMI');
}

console.log(" ");

markMass = 95;
markHeight = 1.88;

johnMass = 85;
johnHeight = 1.76;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

console.log("Mark's BMI " + markBMI);
console.log("John's BMI " + johnBMI);

markHigherBMI = markBMI > johnBMI;

console.log("Is Mark's BMI HIGHER " + markHigherBMI);

if (markHigherBMI) {
  console.log(`Mark has higher BMI`);
} else {
  console.log('John has higher BMI');
}




