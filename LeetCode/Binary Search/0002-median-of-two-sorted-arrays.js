/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
      return findMedianSortedArrays(nums2, nums1);
  }

  let A = nums1, B = nums2, total = nums1.length + nums2.length, half, l = 0, r = nums1.length - 1;
  let i, j, Al, Ar, Bl, Br;
  half = Math.floor(total / 2);

  while (true) {
      i = Math.floor((l + r) / 2);
      j = half - i - 2;
      Al = i >= 0 ? A[i] : Number.MIN_SAFE_INTEGER;
      Ar = i + 1 < A.length ? A[i + 1] : Number.MAX_SAFE_INTEGER;
      Bl = j >= 0 ? B[j] : Number.MIN_SAFE_INTEGER;
      Br = j + 1 < B.length ? B[j + 1] : Number.MAX_SAFE_INTEGER;

      if (Al <= Br && Bl <= Ar) {
          if (total % 2) {
              return Math.min(Ar, Br)
          } else {
              return (Math.max(Al, Bl) + Math.min(Ar, Br)) / 2;
          }
      } else if (Al > Br) {
          r = i - 1;
      } else {
          l = i + 1;
      }
  }

};

console.log(findMedianSortedArrays([1,3], [2]))