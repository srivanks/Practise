function isValid(pat) {
    let stack = [];
    let map = {
        '[': ']',
        '{': '}',
        '(': ')'
    };
    for (let i = 0; i < pat.length; i++) {
        if (pat[i] === '(' || pat[i] === '[' || pat[i] === '{') {
            stack.push(pat[i]);
        } else {
            let x = map[stack.pop()] // }
            let cur = pat[i]; //{
            if (x !== cur) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValid('{'));