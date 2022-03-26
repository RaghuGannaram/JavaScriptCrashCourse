function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        let min =i;
        for(let j=i+1; j<arr.length; j++) if(arr[j]<arr[min]) min = j;
        if(min!=i) [arr[min], arr[i]] = [arr[i],arr[min]];
    }
    return arr;
}

let input = [234, 43,234, -56,-56, 55, 63,  5, 6, 235, 547];
let output = selectionSort(input);
console.log(output)