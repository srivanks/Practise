var addStrings = function (num1, num2) {
    let n1l = num1.length - 1;
    let n2l = num2.length - 1;
    let sum = 0;
    let carry = 0;
    let num1s = num1.split('');
    let num2s = num2.split('');
    let res = [];
    for (; n1l >= 0 || n2l >= 0; n1l--, n2l--) {
        sum = (n1l >= 0 ? parseInt(num1s[n1l]) : 0) + (n2l >= 0 ? parseInt(num2s[n2l]) : 0) + carry;
        carry = 0;
        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        }
        res.unshift(sum);
    }
    if (carry === 1) {
        res.unshift(carry);
    }
    return res.join('');
};

console.log(addStrings("123", "456"));
