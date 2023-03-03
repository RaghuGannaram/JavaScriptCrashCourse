function oddEvenSort(arr) {
	let n = arr.length, sorted = false;

  while(!sorted){
    sorted = true;
    for(let i=1; i < n-1; i+=2){
        if(arr[i]> arr[i+1]){
          [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
          sorted = false;
        }
    }
    for(let i=0; i < n-1; i+=2){
      if(arr[i]> arr[i+1]){
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        sorted = false;
      }
  }
  }

	return arr;
}

let input = [234, 43, 234, -56, -56, 55, 63, 5, 6, 235, 547];
console.log("input : ", input);
let output = oddEvenSort(input);
console.log("output : ", output);
