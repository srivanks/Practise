var searchInsert = function (nums, target) {

    let pos = nums.length;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target || target === nums[i]) {
            pos = i;
            break;
        }
    }

    return pos;
};
console.log(searchInsert([1, 3, 5, 6], 5));