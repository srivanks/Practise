var findLucky = function (arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 1;
        } else {
            map[arr[i]]++;
        }
    }
    let keys = Object.keys(map);
    let max = -1;
    for (let i = 0; i < keys.length; i++) {
        let k = parseInt(keys[i]);
        if (map[k] === k && map[k] > max) {
            max = map[k];
        }
    }
    return max;
}

console.log(findLucky([1, 2, 2, 3, 4]));