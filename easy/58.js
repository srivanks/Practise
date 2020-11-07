var lengthOfLastWord = function (s) {
    return s.trim().split(' ').pop().length

};


console.log(lengthOfLastWord('Hello world'))
console.log(lengthOfLastWord('a '))