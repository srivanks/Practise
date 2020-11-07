var findLHS = function (nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
        }
    }
    let res = 0;
    for (let k of Object.keys(map)) {
        if (map[parseInt(k) + 1]) {
            res = Math.max(res, map[k] + map[(parseInt(k) + 1).toString()]);
        }
    }
    console.log(map)
    return res;
};


console.log(findLHS(
    [1, 3, 2, 2, 5, 2, 3, 7]));