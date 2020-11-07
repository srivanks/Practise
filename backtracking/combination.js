function generateSubstring(str, k, currentString, start) {
    // if (k === 0) {
    console.log(currentString.join(''));
    // }
    for (let i = start; i < str.length; i++) {
        currentString.push(str[i])
        generateSubstring(str, k - 1, currentString, i + 1);
        currentString.pop();
    }
}

generateSubstring(['a', 'b', 'c'], 2, [], 0);
