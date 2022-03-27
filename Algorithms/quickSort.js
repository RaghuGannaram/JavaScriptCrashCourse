function quickSort(arr) {
    if (arr.length <= 1)  return arr;
  
    let pivot = arr[0], left = [], right = [];
  
    for (let i = 1; i < arr.length; i++) {
      arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
};


let input = [234, 43,234, -56,-56, 55, 63,  5, 6, 235, 547];
let output = quickSort(input);
console.log(input)
console.log(output)