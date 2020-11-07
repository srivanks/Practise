let pp = [];

function generateNumber(arr, num, start, res) {
    if (res.length === num) {
        console.log(res);
        // pp.push(res);
    }
    for (let i = start; i < arr.length; i++) {
        res.push(arr[i]);
        generateNumber(arr, num, i + 1, res, pp);
        res.pop();
    }
    return res;
}

generateNumber([1, 2, 3, 4, 5], 3, 0, []);
console.log(pp);