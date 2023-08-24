/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const obj = {};

  nums.map((item) => {
    if (obj[item]) {
      obj[item]++;
      return;
    }
    obj[item] = 1;
  });

  const a = Object.keys(obj);
  const b = Object.values(obj);
  const max = Math.max(...b);
  const maxIndex = b.indexOf(max);
  return a[maxIndex];
};
