var findSpecialInteger = function (arr) {
    let max = Math.ceil(arr.length / 4);
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 1;
        } else {
            map[arr[i]]++;
        }
    }

    let result;
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] >= max) {
            result = arr[i];
        }
    }
    return result;
};

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]));