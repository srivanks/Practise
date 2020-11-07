var pivotIndex = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        let left = total(nums, 0, i);
        let right = total(nums, i + 1, nums.length);

        if (left - right === 0) {
            return i;
        }
    }
    return -1;
};

var total = function (nums, start, index) {
    let sum = 0;
    for (let i = start; i < index; i++) {
        sum += nums[i];
    }
    return sum;
}
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));