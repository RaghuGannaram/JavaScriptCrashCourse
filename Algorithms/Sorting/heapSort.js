const heapSort = arr => {
    const a = [...arr];
    let l = a.length;
  
    for (let i = Math.floor(l / 2); i >= 0; i--) heapify(a, i);
    for (i = a.length - 1; i > 0; i--) {
      [a[0], a[i]] = [a[i], a[0]];
      heapify(a, 0);
      l--;
    }
    function heapify(a, i){
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let max = i;
        if (left < l && a[left] > a[max]) max = left;
        if (right < l && a[right] > a[max]) max = right;
        if (max !== i) {
          [a[max], a[i]] = [a[i], a[max]];
          heapify(a, max);
        }
    };
    return a;
  };
  
  

let input = [234, 43, 234, -56, -56, 55, 63, 5, 6, 235, 547];
let output = heapSort(input);

console.log("input : ", input);
console.log("output : ", output);
