# 알고리즘 피드백

정수 배열 nums와 정수 val이 주어졌을 때, nums에서 val이 포함된 모든 항목을 제자리에서 제거합니다. 요소의 순서는 변경될 수 있습니다. 그런 다음 nums에서 val과 같지 않은 요소의 수를 반환합니다.

## 문제 해결 방법

1 번시도

- nums 배열중에 val 과 같은 숫자가 있으면 '_' 로변환
- sort 를 이용해서 '_' 를 배열 뒤로 이동.
- 베열에서 '_' 아닌 요소를  +1 씩 count 해줌

```js
function removeElement(nums: number[], val: number): number {
    const temp = nums.map(item=>{
        if(item===val){
            return '_'
        }
        return item;
    })

    temp.sort((a, b)=> {
        if (a === '_') {
            return 1; // a 가 숫자면 a앞으로 보냄
        } else if (b === '_') {
            return -1; // b 가 '_' 면 b 뒤로 보냄
        } else {
            return a - b; // 일반적인 숫자 비교
        }
    })

    let k =0;
    temp.map(item=>{
        if(item!=="_"){
            k++
        }
    })
    return k
};
```

2번 시도

- nums 에서 val 이랑 겹치지 않는 새로운 배열 만들기.
- nums 를 초기화 해주기. (nums = []) 이렇게 하는 경우 array 를 지우지않고, 새로운것 생성.
- 초기화된 nums 값에 새롭게 filter된 배열을 넣어주기.

```js
function removeElement(nums: number[], val: number): number {
    const filterNums = nums.filter(num => {
        if(num!==val) {
            return true
        }
    }); 
	nums.length = 0
	nums.push(...filterNums); 
	return nums.length; 
};
```

(초기 접근 방법 및 실패한 코드)

## 실패한 이유

- **실패한 이유 **:

1. nums 자체에서 해결하지않고 새로운 nums 를 만듬,
2. nums 를 초기화 시킴


## 수정한 접근 방법 및 코드


```js
function removeElement(nums, val) {
		//count 변수를 0으로 지정
    let count = 0;
		//nums 를 loop 반복함.
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count]=nums[i];
						//반복하는 요소중이 val 이랑 같다면 count +1 
            count++
        }
    }
    return count;
}
```

- count 변수를 0으로 지정
- nums 를 loop 반복함.
- 반복하는 요소중이 val 이랑 같다면 count +1 


## 피드백 및 개선점

**긍정적인 점**:

nums를  초기화 하면 정답을 맞춤.

**개선이 필요한 점**:

nums 를 초기화 하지 말고 in-plcae 알고리즘을 사용할것
