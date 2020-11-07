var intersection = function (nums1, nums2) {
    const hashMap = {};
    const result = [];
    let l = nums1.length;
    for (let i = 0; i < l; i++) {
        if (!hashMap[nums1[i]]) {
            hashMap[nums1[i]] = true;
        }
    }
    l = nums2.length;
    for (let i = 0; i < l; i++) {
        if (hashMap[nums2[i]]) {
            hashMap[nums2[i]] = false;
            result.push(nums2[i]);
        }
    }
    return result;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));