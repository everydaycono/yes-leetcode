## 나의 시도

#### 시도 1

1번째 시도 (코딩할때 new Set 을 이용해 unique 한값을 빼오는것을 좋아했는데 역시 console 에서는 작동 되지만 leetcode 에서 작동이 안됨)

이유는 nums 를 변형 시키지않고 새롭게 만들기 때문.
```js
var removeDuplicates = function (nums) {
  let k = [...new Set(nums)];

  return k.length;
};
```

#### 시도 2

```js
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
```
​## 시간,공간 복잡도

|시간 복잡도| 공간복잡도|
| -------- | ----- |
| O(n^2)| O(n) |

  - 시간 복잡도 : for 반복문 속에서 some 메소드를 호출,  이중 루프를 사용을  했기때문에 시간복잡도는  O(n^2) 될것 (n개 길이의 이중 루프)
  - 공간 복잡도 : 공간 복잡도는 k 배열 을 저장하는 공간의 길이에 따라 달라짐 

## 해결책
```js
var removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
```

두 개의 포인터 i와 j를 사용할 수 있는데, 

여기서 i는 지금까지 발견된 마지막 고유 요소를 가리키고 j는 현재 검사 중인 요소를 가리킨다. 

nums[i]와 nums[j]가 같으면 j만 증가시킨다. 그렇지 않으면 i를 증가시키고 nums[j]를 nums[i]로 복사한다. 

마지막에는 수정된 배열의 길이를 나타내는 i+1을 반환.

## Lessons Learned

1. in-place 알고리즘
   
   지금 있는 자리에서 무언가를 해결하거나 바꾸는 방법 추가적인 공간을 사용하지 않으면서도 원하는 결과 얻는방법.
   슬라이딩 퍼즐 처럼 고정된 공간안에서 해결하는것 (추가적인 퍼즐을 놓을공간 없음)



