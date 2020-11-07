let pp = [];

function generateBinary(arr, k, result) {
    if (k === 0) {
        let res = result.join('');
        if (pp.indexOf(res) === -1) {
            pp.push(result.join(''));
        }
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i];
        if (result[result.length - 1] === 1) {
            result.push(0);
        } else {
            result.push(cur);
        }
        generateBinary(arr, k - 1, result);
        result.pop();
    }
}

generateBinary([0, 1], 4, [], 0);
console.log(pp);
