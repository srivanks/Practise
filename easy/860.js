var lemonadeChange = function (bills) {
    let fives = 0;
    let tens = 0;
    let change = 0;
    if (bills[0] !== 5) return false;
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            fives++;
        }

        if (bills[i] === 10) {
            if (fives === 0) {
                return false;
            }
            tens++;
            fives--;
        }
        if (bills[i] === 20) {
            if (fives > 0 && tens > 0) {
                fives--;
                tens--;
            } else if (fives >= 3) {
                fives -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
}

// console.log(lemonadeChange([5, 15, 5, 10, 20]));
// console.log(lemonadeChange([15, 5, 5, 10, 20]));
console.log(lemonadeChange([5, 5, 5, 10, 20]));