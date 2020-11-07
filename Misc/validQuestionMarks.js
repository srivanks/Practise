function validQuestionsMarks(s) {
    let prev = 0;
    for (let i = 0; i < s.length; i++) {
        let x = parseInt(s[i]);
        if (!x) {
            continue;
        }
        prev = 6;
    }
}

console.log(validQuestionsMarks('arrb6???4xxbl5???eee5'));