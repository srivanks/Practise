var addBinary = function (a, b) {
    let long, short;
    if (a.length > b.length) {
        long = a;
        short = b;
    } else {
        long = b;
        short = a;
    }

    let carry = 0;
    let result = '';

    for (let i = 0; i < long.length; i++) {
        let shortNum, longNum;
        if (i >= short.length) {
            shortNum = 0;
        } else {
            shortNum = Number(short[short.length - 1 - i]);
        }
        longNum = Number(long[long.length - 1 - i]);
        let sum = shortNum + longNum + carry;
        switch (sum) {
            case 0:
                result = '0' + result;
                carry = 0;
                break;
            case 1:
                result = '1' + result;
                carry = 0;
                break;
            case 2:
                result = '0' + result;
                carry = 1;
                break;
            case 3:
                result = '1' + result;
                carry = 1;
                break;
        }
    }
    if (carry === 1)
        result = '1' + result;
    return result;
};