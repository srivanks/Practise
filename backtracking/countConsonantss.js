function countConsonants(str, vowels, start) {
    if (!str || start === str.length) {
        return 0;
    }
    if (vowels.indexOf(str[start]) === -1) {
        return 1 + countConsonants(str, vowels, start + 1);
    }
    return countConsonants(str, vowels, start + 1)
}

let vowels = ['a', 'e', 'i', 'o', 'u'];

console.log(countConsonants('ankush', vowels, 0));