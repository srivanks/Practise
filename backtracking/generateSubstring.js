function sum(arr) {
    return arr.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);
}

function generateSubstring(str, k, currentString) {
    if (k === 0) {
        let mid = Math.ceil(currentString.length / 2);
        let first = sum(currentString.slice(0, mid));
        let last = sum(currentString.slice(mid));
        first === last ? console.log(currentString.join('')) : '';
        return;
    }
    for (let i = 0; i < str.length; i++) {
        let cur = str[i];
        currentString.push(cur);
        generateSubstring(str, k - 1, currentString);
        currentString.pop();
    }
}

generateSubstring('01', 3, []);
