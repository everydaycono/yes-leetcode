​# 알고리즘 피드백

정수 배열 nums가 주어지면 배열을 k 단계만큼 오른쪽으로 회전합니다. 여기서 k는 음수가 아닙니다.

## 문제 해결 방법
1번째 접근 방법

- 한칸씩 뒤로 옮기기
- 뒤로 옮길때 주의사항.
- 1번이 2번칸으로, 2번이 3번칸으로 3번이 4번칸으로 ... => 마지막 칸이 1번칸으로
- 이때 1번이 2번으로 가게되면 2번 값이 사라졌으므로, 2번칸이 3번칸으로 가게될때 값이 1번값으로 채워짐.
- * 1번값이 2번에 있으므로.(값 덮어쓰는것 주의)

2번째 접근 방법
	- k 만큼 배열앞에 '_' 추가
	- k 만큼 배열 뒤에서 아이템 가져오기 ('_' 이 추가된 만큼)
	- 배열앞에 추가된 '_' 이곳에 moveItem 채워넣기.

```js
var rotate = function (nums, k) {
  // k 만큼 빈배열 만들기.
  nums.unshift(...Array.from(Array(k), (_, i) => `_`));
  nums.splice(-k);
  nums.splice(0, k, ...b);
  return nums;
};
```

3번째 접근 방법

	- 1번 방법을 거꾸로 하기.
	- 마지막 요소를 변수잡기. 
	- 뒤에서 부터 값을 한칸씩 뒤로 옮기기
	- 마지막 요소를 변수 잡았으므로 덮어쓰기 걱정하지 않아도됨.
	- 인덱스 값이 0번째 값이 되면 변수값을 넣어주기.
	- Time Limit Exceeded

```js
var rotate = function (nums, k) {
  for (let r = 0; r < k; r++) {
    const lastElement = nums[nums.length - 1];

    // 뒤에서부터 값을 한 칸씩 뒤로 옮기면서 덮어쓰기
    for (let i = nums.length - 1; i > 0; i--) {
      nums[i] = nums[i - 1];
    }

    nums[0] = lastElement; // 마지막 칸에 처음 값 넣어주기
  }
};
```

(초기 접근 방법 및 실패한 코드)

## 실패한 이유

- k 값이 nums 의 길이보다 클경우 생각을 못함 (배열의 길이 를 k 로 나눈 나머지값을 구하기)
	

## 수정한 접근 방법 및 코드

솔루션 코드

	- 회전 횟수를 구하기. k 가 배열의 길이보다 클경우 불필요한 반복을 줄이기 위해
		배열의 길이만큼 나눈 값으로 배열의 위치를 움직인다.
	- 회전(칸 이동)을 위해 splice (옮길요소) 를 unshift 를 사용해 앞으로 넣어준다.

```js
var rotate = function (nums, k) {
  k = k % nums.length;
  nums.unshift(...nums.splice(nums.length - k));
  return nums;
};
```


## 피드백 및 개선점

**개선이 필요한 점**:
	- 반복이되는것이 몇번 인지 확인하고, 결과값을 위해 n번을 돌아야 하는지 한번더 확인하기.