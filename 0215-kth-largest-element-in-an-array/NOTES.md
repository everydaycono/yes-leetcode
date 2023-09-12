​# 알고리즘 피드백

새로운 단어를 추가하고 문자열이 이전에 추가된 문자열과 일치하는지 찾는 것을 지원하는 데이터 구조를 설계합니다.


## 문제 해결 방법


이 문제를 해결하기 위해서는 배열에서 k번째로 큰 요소를 찾아야 한다. 
아래는 간단한 JavaScript 코드로 문제를 해결하는 방법.

문제에서 요구하는 것은 정렬된 순서에서 k번째로 큰 요소를 찾는 것 
그렇기 때문에 배열을 정렬한 뒤 k번째 요소를 가져오면 문제를 해결할 수 있다

JavaScript에서는 Array.sort() 메서드를 사용하여 배열을 정렬할 수 있으며, 
내림차순으로 정렬하기 위해 정렬 비교

정렬된 배열에서 k번째 요소를 반환하면 해당 요소가 k번째로 큰 요소가 됩니다.
이 방법은 간단하고 이해하기 쉽지만, heap 을 사용하지않았음

```js
nums.sort((a, b) => b - a);
    
// 정렬된 배열에서 k번째 요소를 반
return nums[k - 1];
```


sort 를 사용하지 않고 배열에서 k번째 요소 찾기.

quickSelect 함수: 퀵 선택 알고리즘을 구현하는 함수, 재귀적으로 작동하며, k번째로 큰 요소가 있는 부분을 선택
partition 함수: 배열을 파티션하고 피벗의 위치를 반환
swap 함수: 두 요소의 위치를 바꾸는 함수

```js
function findKthLargest(nums, k) {
 
    function quickSelect(arr, left, right, k) {
        if (left === right) return arr[left];

        const pivotIndex = partition(arr, left, right);

        if (k === pivotIndex) {
            return arr[k];
        } else if (k < pivotIndex) {
            return quickSelect(arr, left, pivotIndex - 1, k);
        } else {
            return quickSelect(arr, pivotIndex + 1, right, k);
        }
    }

    
    function partition(arr, left, right) {
        const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        const pivotValue = arr[pivotIndex];
        swap(arr, pivotIndex, right);

        let i = left;

        for (let j = left; j < right; j++) {
            if (arr[j] > pivotValue) {
                swap(arr, i, j);
                i++;
            }
        }

        swap(arr, i, right);
        return i;
    }

```

## 피드백 및 개선점

- **긍정적인 점**:
  3분안에 떠오른 문제 해결방법이 속도가 굉장히 빠르게 측정이됨, 물론 (heap 을 사용하지않음)
- **개선이 필요한 점**:
	quick select 의 시간 개선 필요
