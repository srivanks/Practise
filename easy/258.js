var addDigits = function (num) {
    if (num < 10) {
        return num;
    }
    let dd = num.toString().split('');
    let sum = 0;

    for (let i = 0; i < dd.length; i++) {
        sum += parseInt(dd[i]);
    }

    if (sum >= 10) {
        return addDigits(sum);
    }
    return sum;
};

console.log(addDigits(101))