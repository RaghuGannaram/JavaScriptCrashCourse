/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies1 = function(candies, extraCandies) {
    let h = 0, result=[];
    
    for(let i=0; i<candies.length; i++){
        if(candies[i]> h) h= candies[i]
    }
    for(let i=0; i< candies.length; i++){
        if(candies[i]+extraCandies >= h) result.push(true)
        else result.push(false)
    }
    
    return result
};

var kidsWithCandies2 = function(candies, extraCandies) {
    let highest = Math.max(...candies);

    return candies.map((candy) => candy+extraCandies >=highest)
};

console.log(kidsWithCandies2([2,3,5,1,3], 3))