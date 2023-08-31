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