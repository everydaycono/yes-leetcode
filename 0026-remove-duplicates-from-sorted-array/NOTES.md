# 알고리즘 피드백

정수 배열의 숫자가 감소하지 않는 순서로 정렬되어 있을 때, 각 고유 요소가 한 번만 나타나도록 중복된 요소를 제자리에서 제거합니다. 요소의 상대적 순서는 동일하게 유지해야 합니다. 그런 다음 고유 요소의 수를 nums로 반환합니다.

## 문제 해결 방법

1번째 시도 

- new Set 을 통한 unique 값 만들기

```js
var removeDuplicates = function (nums) {
  let k = [...new Set(nums)];

  return k.length;
};
```

2번째 시도

```js
var removeDuplicates = function (nums) {
  let k = [];
  for (let n of nums) {
    const isExist = k.some((item) => item === n);

    if (!isExist) {
      k.push(n);
    }
  }

  nums.length=0;
  nums.push(...k)
  return nums.length;
};
```


## 실패한 이유

**실패한 이유 **:

- (new Set 을 이용해 unique 한값을 빼오는것을 시도, console 에서는 작동 되지만 leetcode 에서 작동이 안됨)
- nums 를 변형 시키지않고 새롭게 만들기 때문.
- for 반복문 속에서 some 메소드를 호출,  이중 루프를 사용을  했기때문에 시간복잡도는  O(n^2) 될것 (n개 길이의 이중 루프)

## 수정한 접근 방법 및 코드

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


## 참고 자료

1. in-place 알고리즘

지금 있는 자리에서 무언가를 해결하거나 바꾸는 방법 추가적인 공간을 사용하지 않으면서도 원하는 결과 얻는방법.
슬라이딩 퍼즐 처럼 고정된 공간안에서 해결하는것 (추가적인 퍼즐을 놓을공간 없음)
88번,27번 모두 in-place 라고 적혀있었는데 영어 단어로만 알고 있었는데 [링크](https://en.wikipedia.org/wiki/In-place_algorithm) 링크를 타고 들어가니 좋은 설명이 되어있다.
