function bestTimeToTrade(prices) {
    let profit = 0;

    for(let i=1,j=0;i<prices.length;i++){
        if(prices[i]<prices[j]) j=i;
        if(prices[i]-prices[j]>profit) profit = prices[i]-prices[j];
    }
    return profit;
}

let input = [100, 50, 200, 40, 500, 20, 250];
let output = bestTimeToTrade(input);
console.log(output);
