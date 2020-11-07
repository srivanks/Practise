function zeroSum(arr, maxSum, gl, temp, start, target, length) {
    if (maxSum === target) {
        // console.log(length);
        gl.push([...temp]);
    }

    console.log(length);
    for (let i = start; i < arr.length; i++) {
        temp.push(arr[i]);
        maxSum += arr[i];
        zeroSum(arr, maxSum, gl, temp, i + 1, target, length++);
        temp.pop();
        maxSum -= arr[i];
    }
}

let gl = [];
console.log(zeroSum([5, 6, -5, 5, 3, 5, 3, -2, 0], 0, gl, [], 0, 8, 0, 0));