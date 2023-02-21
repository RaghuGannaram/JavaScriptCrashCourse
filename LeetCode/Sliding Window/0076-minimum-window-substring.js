/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let l = 0,
      r = 0,
      start = 0,
      map = {},
      count = t.length,
      min = Number.MAX_SAFE_INTEGER;

  t.split('').forEach(c => map[c] = (map[c] ?? 0) + 1);

  while (r < s.length) {
      if (map[s[r]] > 0) count--;
      map[s[r]]--;
      r++;
      
      while (count === 0) {
          if (r - l < min) {
              min = r - l;
              start = l;
          }

          if (map[s[l]] === 0) count++;
          map[s[l]]++;
          l++;
      }
  }

  return min === Number.MAX_SAFE_INTEGER ? '' : s.slice(start, start + min);
};

console.log(minWindow("ADOBECODEBANC", "ABC"))