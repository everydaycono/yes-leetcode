/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let temp = [];

  for (let i = 0; i < nums.length; i++) {
    const isExist = temp.filter((item) => item === nums[i]);

    if (isExist.length < 2) {
      temp.push(nums[i]);
    }
  }

  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }

  return temp.length;
};