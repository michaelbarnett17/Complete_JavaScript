`use strict`

const calcTip = function(bill){
    if(50 <= bill && bill <= 300) {
        return 0.15 * bill;
    } else {
        return 0.20 * bill;
    }
}

const bills = [125, 555, 44];
let tips = [];

tips[0] = calcTip(bills[0]);
tips[1] = calcTip(bills[1]);
tips[2] = calcTip(bills[2]);

console.log(tips);

