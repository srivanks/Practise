var maximum69Number = function (num) {
    if (num === 9) {
        return num;
    }
    if (num === 6) {
        return 9;
    }
    let str = num.toString().split('');
    if (str[0] === '6') {
        str[0] = '9';
        return parseInt(str.join(''));
    }

    for (let i = 1; i < str.length; i++) {
        if (str[i] === '6') {
            str[i] = '9';
            return parseInt(str.join(''));
        }
    }
    return num;
};

console.log(maximum69Number(9));
console.log(maximum69Number(6));
console.log(maximum69Number(99));
console.log(maximum69Number(66));
console.log(maximum69Number(69));
console.log(maximum69Number(9669));
console.log(maximum69Number(6669));