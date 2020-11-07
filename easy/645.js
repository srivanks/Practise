var findErrorNums = function (nums) {
    let map = {};
    let res = [];
    let actualArray = [];
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
        }
    }

    for (let i = 1; i <= nums.length; i++) {
        if (map[nums[i]] > 1) {
            res = [nums[i], i];
            break;
        }
    }

    return res;
};

console.log(findErrorNums([2, 2]));

//[2,3]