const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

  const calcTip = (bill) => {
    if(50 <= bill && bill <= 300) {
        return 0.15 * bill;
    } else {
        return 0.20 * bill;
    }
  }

for(let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
}

console.log(tips);
console.log(bills);

const calcAverage = (arr) => {
    let total = 0;
    for(let i = 0; i < totals.length; i++) {
        total+= arr[i];
    }
    return total / arr.length;
}

console.log(calcAverage(totals));