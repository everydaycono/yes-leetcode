/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i + 1, j + 1];
            }
        }
    }
};


// 1. 
// start 변수 1 설정 (배열 의 2번째 부터 시작)
// numbers 갯수 만큼 loop 돌리기.
// [2,7,11,15] 2...7...11...15
// 1번째 반복문
// target 에서 2 를 제거 했을때 나온값이 나머지에 있는지 확인 
// 있으면 return
// ...
// ..
// .
// n 번째 반복문
// target 에서 n 를 제거 했을때 나온값이 나머지에 있는지 확인 
// 있으면 return
// start 와 numbers 반복 돌리는 요소의 합이 target 이면 
// return
// start 와 numbers 반복요소 가 같지 않으면 start 에 +1 해주면서 진행.

// 2.