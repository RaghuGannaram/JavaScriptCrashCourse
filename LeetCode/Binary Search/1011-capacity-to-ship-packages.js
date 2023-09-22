/**
    @url https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
    @title 1011. Capacity To Ship Packages Within D Days
    @difficulty Medium

    @description
        A conveyor belt has packages that must be shipped from one port to another within D days.
        The i-th package on the conveyor belt has a weight of weights[i].
        Each day, we load the ship with packages on the conveyor belt (in the order given by weights).
        We may not load more weight than the maximum weight capacity of the ship.
        Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within D days.

    @param {number[]} weights
    @param {number} D
    @return {number}    
 */
var shipWithinDays = function (weights, days) {
    let res,
        l = Math.max(...weights),
        r = weights.reduce((acc, cur) => acc + cur, 0);

    res = r;

    while (l <= r) {
        m = Math.floor((l + r) / 2);

        if (calcDays(m) <= days) {
            res = Math.min(res, m);
            r = m - 1;
        } else l = m + 1;
    }

    return res;

    function calcDays(capacity) {
        let days = 1;

        for (let i = 0, sum = 0; i < weights.length; i++) {
            sum += weights[i];

            if (sum > capacity) {
                days++;
                sum = weights[i];
            }
        }
        return days;
    }
};

let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    days = 5;

console.log(shipWithinDays(weights, days));