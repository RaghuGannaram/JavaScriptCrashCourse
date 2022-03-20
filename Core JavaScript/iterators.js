function simpleIterator() {
  let init = 0;
  return {
    next: function () {
      init += 10;
      return { value: init, done: false };
    },
  };
}

let itr = simpleIterator();
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
