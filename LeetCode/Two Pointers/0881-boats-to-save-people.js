/**
    @title 881. Boats to Save People
    @difficulty Medium
    @url https://leetcode.com/problems/boats-to-save-people/

    @description
        The i-th person has weight people[i], and each boat can carry a maximum weight of limit.
        Each boat carries at most 2 people at the same time, provided the sum of the weight of those people is at most limit.
        Return the minimum number of boats to carry every given person.  (It is guaranteed each person can be carried by a boat.)

    @param {number[]} people
    @param {number} limit
    @return {number}
 */

var numRescueBoats = function (people, limit) {
    people.sort((a, b) => a - b);

    let boats = 0,
        l = 0,
        r = people.length - 1;

    while (l <= r) {
        if (people[l] + people[r] <= limit) l++;
        r--;
        boats++;
    }

    return boats;
};

let people = [3, 2, 2, 1];
let limit = 3;

console.log(numRescueBoats(people, limit));
