var removeElement = function (nums, val) {
    let start = 0;
    while (start <= nums.length) {
        if (nums[start] === val) {
            nums.splice(start, 1);
        } else {
            start++;
        }
    }
    return nums.length;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))