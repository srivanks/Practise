function getMap(s, t) {
    for (let i = 0; i < s.length; i++) {
        if (t.lastIndexOf(s[i]) > -1) {
            s = s.replace(s[i], '');
        }
    }
    console.log(s);
}

function solution(S, T) {

    if (Math.abs(S.length - T.length) > 1) {
        return 'IMPOSSIBLE';
    }

    if (T.length > S.length) {
        let x = getMap(T, S);
        return 'Inserted ' + x;
    }

    if (S.length > T.length) {
        let x = getMap(T, S);
        return 'Deleted ' + x;
    }

    if (S.length === T.length) {
        for (let i = 0; i < S.length; i++) {
            if (S[i] !== T[i]) {
                return 'Moved ' + S[i];
            }
        }
    }
}

// console.log(solution('beans', 'banes'))
// console.log(solution('crow', 'cow'))
console.log(solution('nice', 'niece'))