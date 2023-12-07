/**
    @title 929. Unique Email Addresses
    @difficulty Easy
    @url https://leetcode.com/problems/unique-email-addresses/

    @description   
        Find unique email addresses from a list of email addresses.

    @param {string[]} emails
    @return {number}
 */


var numUniqueEmails = function (emails) {
    const unique = new Set();

    for (const email of emails) {
        const [local, domain] = email.split('@');
        const filteredLocal = local.split('+')[0].replace(/\./g, '');
        unique.add(filteredLocal + '@' + domain);
    }

    return unique.size;
};

let emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];

console.log(numUniqueEmails(emails));