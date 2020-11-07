var moveZeroes = function (nums) {
    let start = 0;
    let end = nums.length;
    while (start !== end) {
        if (nums[start] === 0) {
            let x = nums.splice(start, 1)[0];
            nums.push(x);
            end--;
        } else {
            start++;
        }
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));