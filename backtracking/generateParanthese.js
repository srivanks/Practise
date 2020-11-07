function generateParanthesis(n, s, e, result) {
    if (s === n && e === n) {
        console.log(result.join(''));
        return;
    }
    if (e > s) return;
    if (s < n) {
        result.push('(');
        generateParanthesis(n, s + 1, e, result);
        result.pop();
    }
    if (e < n) {
        result.push(')');
        generateParanthesis(n, s, e + 1, result);
        result.pop();
    }
}

let result = [];
console.log(generateParanthesis(3, 0, 0, result));
// console.log(result);