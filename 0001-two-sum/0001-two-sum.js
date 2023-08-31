/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let first; // 첫 번째 자리 변수
  let last; // 두 번째 자리 변수

    nums.forEach((item, idx) => {
    const newCompare = [...nums]; // nums 배열 복사
    newCompare.splice(idx, 1); // 복사본에서 현재 항목 제거

    // 복사 배열 반복하며 현재 항목과 다른 항목을 비교
    return newCompare.forEach((ele, idx) => {
      if (first !== undefined || last !== undefined) return; // first , last 를 찾으면 반복 종료

      // 현재 'item'과 'ele'의 합이 'target'과 같은지 확인
      if (item + ele === target) {
        first = item; 
        last = ele; 
        return;
      }
    });
  });

  // 쌍의 두 숫자가 같은 경우 처리
  if (first === last) {
    const array = [...nums];
    const index = array.indexOf(first);
    if (index > -1) {
      array.splice(index, 1); // 중복된 숫자를 복사본 배열에서 제거
    }
    return [nums.indexOf(first), array.indexOf(last) + 1]; 
  }

  return [nums.indexOf(first), nums.indexOf(last)]; 
};