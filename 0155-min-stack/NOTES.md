
## 알고리즘 피드백

푸시, 팝, 상단 및 일정한 시간에 최소 요소 검색을 지원하는 스택을 설계합니다. <br/>
MinStack 클래스 구현: MinStack()은 스택 개체를 초기화합니다. <br/>
void push(int val)는 val 요소를 스택에 푸시합니다. <br/>
void pop()은 스택의 맨 위에 있는 요소를 제거합니다. <br/>
int top()은 스택의 최상위 요소를 가져옵니다. <br/>
int getMin()은 스택의 최소 요소를 검색합니다. <br/>

각 기능에 대해 O(1) 시간 복잡도를 갖는 솔루션을 구현해야 합니다.

## 문제 해결 방법


처음에 Stack 을 단순히 만드는것인줄 알았는데 착오였다.
정말 Stack 만 만들었는데 getMin 을 구해야하는것을 몰랐었다.
삽질끝에 이문제는 아래처럼 진행된다.

이 문제는 다음 처럼 진행이된다.

stack 에는 기존 처럼 들어오는 값이 스택으로 쌓이게 된다.
min 에는 들어오는 값중에 min 스택에 있는것보다 작을경우 스택으로 쌓인다.

첫번째 push 4 를 하면
 - stack 에 4 가 쌓임
 - min 에 4 가 쌓임

두번째 push 10 을 하면
 - stack 에 10 이 쌓임 [4,10] 
 - min 에 는 min 이 가지고 있던 4와 10 중에 작은것을 한번더 추가한다 [4,4]

세번째 push 2 를 하면
 - stack 에는 2 가 추가 [4,10,2]
 - min 에는 min 이 가지고 있던 4,10,2 중에 작은것을 추가한다 [4,4,2]

네번째 push 14 를 하면
 - stack 에는 14 추가 [4,10,2,14]
 - min 에는 2보다 큰숫자가 들어왔으니 [4,10,2,2] 가 된다.

getMin 을 하면 	2 가 나온다.

첫번째 pop 을 하면 뒤 부터 순처작으로 지워짐
	- stack 은 [4,10,2]
	- min 은 [4,10,2]

getMin 을 하면 	2 가 나온다.

두번째 pop 을 하면 뒤 부터 순처작으로 지워짐
	- stack 은 [4,10]
	- min 은 [4,10]

getMin 을 하면 	4 가 나온다.

```js
var MinStack = function() {
    this.stack = []
    this.min =[] 
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // 처음 값이면 min 에도 넣어주기.
    if(this.stack.length===0){
        this.min.push(val)
    }else{
        // min 맨뒤에 있는것과 val 을 비교해서 작은것을 min 에 넣기
        let minimum = Math.min(val,this.min[this.min.length-1]);
        this.min.push(minimum)
    }
    this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.min.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // 스택에서 뒤에값 빼오기.
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // min 값에서 뒤에값 빼오기 (가장 작은수).
    return this.min[this.min.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```

## 실패한 이유

-  자바스크립트 스택을 구현했고 
	시간,공간 복잡도 O(1) 을 구현해야한다는 부분을 문제 처음부터 적어놔서 겁을 먹음
  근데 stack 에선 push,pop 둘다 시간 복잡도 o(1) 이란것을 다시한번 느끼게됨

## 솔루션 방법 및 코드

솔루션 코드와 내코드가 다른점은 
getMin 을 찾을때 Stack 자체에서 최솟값을 찾는방법

첫번째  시도때 Stack 에서 찾는것을 해봤는데 무슨일인지 나는 실패를했다


## 시간 복잡도

O(1)

## 공간 복잡도

O(1)

## 피드백 및 개선점

- **긍정적인 점**:
 오랜시간 걸렸지만 문제를 이해했을때 뿌듯함을 느낌
