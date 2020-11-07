var intersection = function (nums1, nums2) {
    let map = [];
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.indexOf(nums1[i]) !== -1) {
            if (map.indexOf(nums1[i]) === -1) {
                map.push(nums1[i]);
            }
        }
    }
    return map;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));