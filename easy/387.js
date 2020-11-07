var firstUniqChar = function (s) {
    if (!s) return -1;
    let map = {};
    for (let c = 0; c < s.length; c++) {
        map[s[c]] = map[s[c]] + 1 || 1;
    }
    let res;
    for (const p in map) {
        if (map[p] === 1) {
            res = s.indexOf(p);
            break;
        }
    }

    return res === undefined ? -1 : res;
};
console.log(firstUniqChar('leetcode'))
