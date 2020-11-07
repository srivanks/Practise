function subsetSum(arr, target, start, currentResult) {
    if (target === 0) {
        console.log(currentResult);
    }
    if (start === arr.length - 1) {
        return;
    }
    for (let i = start; i < arr.length; i++) {
        let cur = arr[i];
        currentResult.push(cur);
        subsetSum(arr, target - arr[i], i + 1, currentResult);
        currentResult.pop();
    }
}

function subsetSum2(arr, target, start, currentResult) {
    if (target === 0) {
        console.log(currentResult);
    }
    if (start === arr.length - 1) {
        return;
    }
    currentResult.push(arr[start]);
    subsetSum(arr, target - arr[start], start + 1, currentResult);
    currentResult.pop();
    subsetSum(arr, target, start + 1, currentResult);
}

subsetSum([1, 3], 7, 0, []);
console.log('======================');
// subsetSum2([1, 2, 3], 3, 0, []);
