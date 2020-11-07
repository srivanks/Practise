var numUniqueEmails = function (emails) {
    let domains = [];
    let count = 0;
    for (let i = 0; i < emails.length; i++) {
        let noAT = emails[i].split('@');
        noAT[0] = noAT[0].split('+')[0];
        noAT[0] = noAT[0].split('.').join('');
        if (domains[noAT[1]]) {
            if (domains[noAT[1]].indexOf(noAT[0]) === -1) {
                domains[noAT[1]].push(noAT[0]);
                count++;
            }
        } else {
            domains[noAT[1]] = [noAT[0]];
            count++;
        }
    }
    return count;
};

let emails = ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"];
console.log(numUniqueEmails(emails))