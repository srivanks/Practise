var plusOne = function (digits) {
    let carry = 0;
    let sum = digits[digits.length - 1] + 1;
    if (sum >= 10) {
        sum -= 10;
        carry = 1;
    }
    digits[digits.length - 1] = sum;
    for (let i = digits.length - 2; i >= 0; i--) {
        sum = digits[i] + carry;
        carry = 0;
        if (sum >= 10) {
            sum -= 10;
            carry = 1;
        }
        digits[i] = sum;
    }
    if (carry > 0) {
        digits.unshift(carry);
    }
    return digits;
};

console.log(plusOne([8, 9, 9, 9]));