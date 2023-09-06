# 알고리즘 피드백

BST(이진 검색 트리)의 루트가 주어지면 트리에 있는 두 개의 다른 노드 값 간의 최소 절대 차이를 반환합니다.

## 문제 해결 방법

in-order 를 구하면 가장 작은수 부터 찾을수있음.
in-order 로 줄을 세운다음에 노드 사이의 값의 최소값을 찾는 문제
1번 문제 는 1,2,3,4,6
2번 문제는 0,1,12,48,49

제공 되어진 TreeNode 에 이진트리를 생성하는 생성자가 이미 준비되어있으므로 
간단하게 풀었음.

```js
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
```

성공코드 
```js
var getMinimumDifference = function(root) {
  // in-order 를 구하면 가장 작은수 부터 찾을수있음.
  // in-order 로 줄을 세운다음에 노드 사이의 값의 최소값을 찾는 문제
  // 1번 문제 는 1,2,3,4,6
  // 2번 문제는 0,1,12,48,49


    let arr = [];
    function inOrderFn(node){
        console.log(node,"node")
        if(node){
            inOrderFn(node.left);
            arr.push(node.val);
            inOrderFn(node.right);
        }
    }
    // inorder 를 사용해서 가장 작은수 부터 정렬
    inOrderFn(root);


    // 순서가 오름차순 이기때문에 한칸씩 이동하여 최솟값 찾기.
    // because of increasing order we find minimum difference by travelling linearly once
    let minDiff = arr[1]-arr[0];
    for(let i=2; i<arr.length; i++){
        minDiff = Math.min(minDiff, arr[i]-arr[i-1]);
    }
    return minDiff;
};
```


## 실패한 이유

- **실패한 이유 1**:

	1번과 2번의 차이를 구하는줄 알고 인덱스0과 1을 구하였지만 
	오름차순으로 정렬된 값들을 1씩 증가하면서 뺀값의 최솟값을 구하는것이였음.
	
	arr[1]-arr[0];

## 시간 복잡도

O(n)
모든 노드를 한번씩 방문 해야하므로 O(n)

## 공간 복잡도

O(n)


## 피드백 및 개선점

- **긍정적인 점**:
	in-order를 배웠을때는 순서대로 정렬된다는 생각을 못했지만, 
	문제를 보자마자 in-order 가 순서대로 라는것을 생각해냄.

## 참고 자료

(참고한 문서, 블로그, 논문 등의 링크)
