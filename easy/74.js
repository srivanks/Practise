var nextGreatestLetter = function (letters, target) {
    let i = 0;
    for (i = 0; i < letters.length; i++) {
        if (letters[i] > target) {
            return letters[i];
        }
    }
    return letters[letters.length - i]
};

console.log(nextGreatestLetter(['c', 'f', 'j'], 'j'));