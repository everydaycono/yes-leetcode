​# 알고리즘 피드백

## 문제 해결 방법
	- 빈 객체 obj 생성
	- nums 를 반복문 돌기.
	- obj 에 nums 요소로 키값 만들어주기.
	- 키값이 있다면 상응하는 value 에 +1 을 더해주기. `obj[item]++`
	- 키값 없다면  만들어주기. `obj[item] = 1;`
	- a 값에 obj 객체의 키값들 리스트 만들기
	- b 값에 obj 객체의 value 값들 리스트 만들기.
	- max 값에 b 들중 가장 높은값을 넣기,
	- 가장 높은값이 b 리스트 중에서 index 몇번째 인지 찾은후.
	- a 객체 키값들리스트에 가장 높은 index 를 넣어주기.


## 수정한 접근 방법 및 코드

```js
var majorityElement = function(nums) {
    let sol = 0, cnt = 0;
    for(let i = 0; i < nums.length; i++ ) {
        if(cnt == 0){
            sol = nums[i];
            cnt = 1;
        }
        else if(sol == nums[i]){
            cnt++;
        }
        else{
            cnt--;
        }
    }
    return sol;
};
```

sol = 현재 높은숫자를 담당하는 변수
count = 몇번 카운트 됬는지 세는 변수

다음번 만나는 요소가 sol 과 다르다면 count 를 -1
다음번 만나는 요소가 sol 과 같다면 count 를 +1
count 가 0 이 된다면 다음번 만나는 요소가 sol 의 위치로 가게된다.


## 피드백 및 개선점

- **긍정적인 점**:
	two-pointer 문제들은 정말 문제당 2~3 시간 걸렸는데 이문제는 보자마자 해결책이 떠올랐고
	순식간에 해결했다.
	그리고 n 번째로 많이 노출되어있는값도 얻을수있다.
	 
  (수정한 코드나 알고리즘에서 잘 해결한 부분을 나열)

- **개선이 필요한 점**:
	- a 값에 obj 객체의 키값들 리스트 만들기
	- b 값에 obj 객체의 value 값들 리스트 만들기.
	- max 값에 b 들중 가장 높은값을 넣기,
	- 가장 높은값이 b 리스트 중에서 index 몇번째 인지 찾은후.
	위 4개의 값들이 메모리를 잡아먹어서 성능이 좋지 못하였다.

