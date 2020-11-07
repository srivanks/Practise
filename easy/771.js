var numJewelsInStones = function (J, S) {
    if (!J) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < J.length; i++) {
        count += S.split('').filter(e => e === J[i]).length;
    }
    return count;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.log(numJewelsInStones('z', 'ZZ'));