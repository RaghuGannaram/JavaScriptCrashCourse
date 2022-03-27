function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let element = arr[i];
        for(var j=i-1; j >= 0; j--){
            if(arr[j]>element) arr[j+1] = arr[j];
            else break;
        }
        arr[j+1] = element;
    }
    return arr;
}

let input = [234, 43,234, -56,-56, 55, 63,  5, 6, 235, 547];
let output = insertionSort(input);
console.log(input)
console.log(output)


//note
/*
for(var m=10;m>=0;m--){
    if(m<5) break;
    console.log(m)
}
console.log(m)
*/