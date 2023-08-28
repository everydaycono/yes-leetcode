​# 알고리즘 피드백

이미 감소하지 않는 순서로 정렬된 정수의 1 인덱스 배열이 주어졌을 때, 
특정 목표 수에 합산되는 두 개의 수를 구합니다. 이 두 숫자를 numbers[index1] 및 numbers[index2]로 하고, 1 <= index1 < index2 < numbers.length로 합니다.
두 숫자의 인덱스인 index1과 index2의 인덱스에 1을 더한 길이 2의 정수 배열 [index1, index2]를 반환합니다.
테스트는 정확히 하나의 해가 나오도록 생성됩니다. 동일한 요소를 두 번 사용할 수 없습니다.
## 문제 해결 방법

1.번시도


- start 변수 1 설정 (배열 의 2번째 부터 시작)
- numbers 갯수 만큼 loop 돌리기.
- [2,7,11,15] 2...7...11...15
- 1번째 반복문
- target 에서 2 를 제거 했을때 나온값이 나머지에 있는지 확인 
- 있으면 return
- ...
- ..
- .
- n 번째 반복문
- target 에서 n 를 제거 했을때 나온값이 나머지에 있는지 확인 
- 있으면 return
- start 와 numbers 반복 돌리는 요소의 합이 target 이면 
- return
- start 와 numbers 반복요소 가 같지 않으면 start 에 +1 해주면서 진행.

```js
function findTwoSum(numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i + 1, j + 1];
            }
        }
    }
}
```

2번째 시도. 
numbers 배열 반복문
target 과 반복문 요소 n 번째를 차감한값이 나머지 배열 요소에 있는지확인.


## 실패한 이유

- **실패한 이유 1**:
	이중 반복문을 사용해서 성능이 안좋았다.


## 수정한 접근 방법 및 코드


numbers 배열의 처음과 끝을 변수로 지정.
오름차순으로 정렬이 되어있으니

left + right 이 target 보다 크면 
right  을 -1 해주어 target 과 값이 가깝게 한다.

left + right 이 target 보다 작으면
left 를 +1 해주어 target 과 값이 가깝게한다. 

```js
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};
```
(실패한 부분을 개선하기 위해 시도한 접근 방법 및 수정한 코드)

## 시간 복잡도

O(n)

## 공간 복잡도

O(1)

## 피드백 및 개선점

- **개선이 필요한 점**:
	문제를 너무 어렵게 생각했음
	
