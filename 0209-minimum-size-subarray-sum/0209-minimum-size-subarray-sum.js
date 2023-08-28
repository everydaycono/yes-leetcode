/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLength = Infinity;
    let sum = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;

};


// 최소길이 반환.
// 배열 중에서 1,2,3 번 만족 5 만족 
// 2가지 상황이 만족한다고 가정하면 최소길이 인 5 즉 1이 리턴되야함.
// 기존에 하던 two pointer 를 가지고 하면 두가지의 결과값이 만족했어야하는데.
// 이번문제는 1개,2개...n개 혹은 0개 일수도 있음.
// 너무 너무 어려움..

// 이중 반복문 사용하기.
// 문제를 이해하는데 어려움 겪은것 같음.
// 최소 길이 반환에 대한 이해도는 있음.
// 투포인터 방식 실패
// 이유는 2개의 정답을 유추해 내는게 아님.

// 이 문제의 원하는 답은 연속된 숫자들의 합 중에서 목표 값 이상이 되는 최소 길이의 부분 배열