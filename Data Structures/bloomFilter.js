class BloomFilter {
  constructor(size, hashFunctions) {
    this.size = size;
    this.hashFunctions = hashFunctions;
    this.bits = new Array(size).fill(0);
  }
  add(item) {
   for (let hashFunc of this.hashFunctions) {
    const hashValue = hashFunc(item);
    const index = hashValue % this.size;
    console.log(index)
    this.bits[index] |= 1 << hashValue;
   }
  }
  contains(item) {
   for (let i = 0; i < this.hashFunctions.length; i++) {
    const hashValue = this.hashFunctions[i](item);
    const index = hashValue % this.size;
    if ((this.bits[index] & 1 << hashValue) === 0) {
     return false;
    }
   }
   return true;
  }
 }
 
 function hash(item) {
  let hash = 0;
  for (let i = 0; i < item.length; i++) {
   hash = (hash << 5) + hash + item.charCodeAt(i);
   console.log(item.charCodeAt(i))
   hash = hash & hash;
   hash = Math.abs(hash);
  }
  console.log(hash)
  return hash;
 }
 
 const bloomFilter = new BloomFilter(1000, [hash]);
 
 bloomFilter.add("hello");
 bloomFilter.add("world");
 bloomFilter.add("hi");
 bloomFilter.add("aasdf");
 bloomFilter.add("test123");
 bloomFilter.add("test1234");
 bloomFilter.add("1234");
 bloomFilter.add("password");
 
 console.log(bloomFilter.contains("hello"));    
 console.log(bloomFilter.contains("world"));    
 console.log(bloomFilter.contains("hi"));       
 console.log(bloomFilter.contains("aasdf"));    
 console.log(bloomFilter.contains("test123"));  
 console.log(bloomFilter.contains("test1234")); 
 console.log(bloomFilter.contains("1234"));     
 console.log(bloomFilter.contains("password")); 
 console.log(bloomFilter.contains("password1"));
//101
 console.log(5 >> 1)