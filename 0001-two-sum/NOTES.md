# 알고리즘 피드백

정수 배열 nums와 정수 target이 주어지면, 두 숫자의 합이 target에 해당하는 인덱스를 반환합니다.

각 입력에는 정확히 하나의 솔루션이 있다고 가정할 수 있으며 동일한 요소를 두 번 사용할 수 없습니다.

어떤 순서로든 답변을 반환할 수 있습니다.

## 문제 해결 방법

무식한 방법으로 풀이.
반복문을 두번 적용

예시 [2,7,11,15] ,9 

반복문 돌기
2..7..11..15 순서

반복문 항목이 2 일때 7,11,15 를 반복해서 
2와 반복문 도는 항목의 핪이 target 이면 반복문 종료.
하는 방식이다.

```js
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
```

## 실패한 이유

- **성능 실패**:
	솔루션 코드와 비교했을때 4배 정도의 runtime 차이가 난다.
  코드는 굉장히 유사함. 단지 성능 차이가 많이남

## 수정한 접근 방법 및 코드

(실패한 부분을 개선하기 위해 시도한 접근 방법 및 수정한 코드)

## 시간 복잡도

(수정한 알고리즘의 시간 복잡도에 대한 분석)

## 공간 복잡도

(수정한 알고리즘의 공간 복잡도에 대한 분석)

## 피드백 및 개선점

- **긍정적인 점**:
	솔루션 코드도 반복문을 2번 돌리는것에 대해서 위안을 받음

- **개선이 필요한 점**:
  (수정한 코드나 알고리즘에서도 개선이 필요한 부분을 나열하고, 왜 그런 개선이 필요한지 설명)

## 참고 자료

(참고한 문서, 블로그, 논문 등의 링크)
