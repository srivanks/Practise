var isSubsequence = function (s, t) {
    return checkSubsequence(s, t, 0, 0);
};

function checkSubsequence(s, t) {
    let i = 0;
    for (let j = 0; j < t.length; j++) {
        if (i === s.length)
            return true;
        if (s[i] === t[j]) {
            i++;
        }
    }
    return i === s.length;
}

console.log(isSubsequence('abcd',
    "ahjboiuc"));