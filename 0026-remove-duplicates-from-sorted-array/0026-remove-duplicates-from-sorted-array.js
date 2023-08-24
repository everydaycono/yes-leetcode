/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = [];
  for (let n of nums) {
    const isExist = k.some((item) => item === n); // Change find to some

    if (!isExist) {
      k.push(n);
    }
  }

  nums.length=0;
  nums.push(...k)
  return nums.length;
};