var isMatch = function (s, p) {
    if (s.length === 0 && p.length === 0) return true;
    if (p.length > 1 && p[1] === '*') {
        if (isMatch(s.substring(1), p.substring(2))) {
            return true;
        }
        if (s.length > 0 && (p[0] === '.' || p[0] === s[0])) {
            if (isMatch(s.substring(1)), p) {
                return true;
            }
        }
    } else {
        if (s.length > 0 && (p[0] === '.' || p[0] === s[0])) {
            if (isMatch(s.substr(1), p.substring(1))) {
                return true;
            }
        }
    }
    return false;
};

console.log(isMatch('aab', 'c*a*b'));