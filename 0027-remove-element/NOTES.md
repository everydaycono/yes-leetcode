## 나의 시도

#### 시도 1

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

#### 시도 2

```js
// 내가 푼 의도 nums 에서 val 이랑 겹치지 않는 새로운 배열 만들기.
// nums 를 초기화 해주기. (nums = []) 이렇게 하는 경우 array 를 지우지않고, 새로운것 생성.
// 초기화된 nums 값에 새롭게 filter된 배열을 넣어주기.
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



​## Color Reference

|| 시간 복잡도| 공간복잡도|
|--| -------- | ----- |
|ㅁ| 시간 복잡도 | ㅁ |
|ㅁ| 공간 복잡도 |  |


O(1): 상수 시간 복잡도
O(log n): 로그 시간 복잡도
O(n): 선형 시간 복잡도
O(n log n): 선형 로그 시간 복잡도
O(n^2): 이차 시간 복잡도
O(n^3): 삼차 시간 복잡도
O(2^n): 지수 시간 복잡도
O(n!): 팩토리얼 시간 복잡도
