​# 알고리즘 피드백

정수 배열 nums가 주어지면 배열을 k 단계만큼 오른쪽으로 회전합니다. 여기서 k는 음수가 아닙니다.

## 문제 해결 방법

1번 시도 

nums 를 sort 를 이용해서 오름차순으로 정렬한후.
배열 맨 왼쪽과 맨 오른쪽을  조여오는 방식 으로 문제해결

2번 시도.
최소길이 반환.
배열 중에서 1,2,3 번 만족 5 만족 
2가지 상황이 만족한다고 가정하면 최소길이 인 5 즉 1이 리턴되야함.
기존에 하던 two pointer 를 가지고 하면 두가지의 결과값이 만족했어야하는데.
이번문제는 1개,2개...n개 혹은 0개 일수도 있음.
너무 너무 어려움..

이중 반복문 사용하기.
문제를 이해하는데 어려움 겪은것 같음.
최소 길이 반환에 대한 이해도는 있음.
투포인터 방식 실패
이유는 2개의 정답을 유추해 내는게 아님.

이 문제의 원하는 답은 연속된 숫자들의 합 중에서 목표 값 이상이 되는 최소 길이의 부분 배열


```js
function minSubArrayLen(target, nums) {
    let minLength = Infinity; // 무한대로
    let sum = 0; // 현재 부분 배열의 합
    let left = 0; // 부분 배열의 시작

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]; // 현재 값 추가하여 부분 배열의 합 갱신

        while (sum >= target) { // 부분 배열의 합이 목표(target) 이상일 때
            minLength = Math.min(minLength, right - left + 1); // 최소 길이 갱신
            sum -= nums[left]; // 가장 왼쪽 값 제외하여 부분 배열의 합 갱신
            left++; // 부분 배열의 시작 인덱스를 오른쪽으로 옮겨 다음 부분 배열 확인
        }
    }

    // minLength가 무한대인 경우, 조건을 만족하는 부분 배열이 없음
    // 그렇지 않은 경우, 최소 길이 반환
    return minLength === Infinity ? 0 : minLength;
}
```



(초기 접근 방법 및 실패한 코드)

## 실패한 이유

sort 를 한후 좌우를 좁혀나가는 방식으로 해결하면 될줄알고 엄청 나게 그 방식을 고집했다.
	

## 수정한 접근 방법 및 코드

솔루션 코드

슬라이딩 윈도우 기법을 사용한  솔루션

- 부분 배열의 합이 target 이상이 되는 경우,
- 현재 길이와 최소 길이 중 작은 값을 선택하여 최소 길이를 갱신
- 만약 부분 배열의 합이 target 이상이 되지 않는 경우, 무한대로 설정된 초기 최소 길이가 반환



## 피드백 및 개선점

**개선이 필요한 점**:
	- 반복이되는것이 몇번 인지 확인하고, 결과값을 위해 n번을 돌아야 하는지 한번더 확인하기.