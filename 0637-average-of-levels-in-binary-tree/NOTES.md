​# 알고리즘 피드백

이진 트리의 루트가 주어지면 각 수준의 노드 평균값을 배열 형식으로 반환합니다. 
실제 답변의 10~5 이내의 답변을 인정합니다.

## 문제 해결 방법

문제를 보자마자 넓이 우선 순회 (breadth first traversal) 이 생각났다.
Level 이 낮은 노드를 우선으로 방문
왼쪽 자식방문,오른쪽 자식 방문

이진트리의 레벨 별로 노드들의 평균값을 배열로 반환,
트리의 깊이별로 노드들의 평균값을 반환.

머릿속에서는 핑핑 돌아 갔는데 코드로 구현해야하니 전혀 생각이 나지 않았다.

다시 너비우선탐색을 살펴보았다.
1. 방문한 노드를 저장할객체 생성.
2. queue 탐색을 위한 객체 생성
3. 시작 노드를 queue에 추가하고 방문 표시
4. 큐가 빌 때까지 계속해서 반복
5. 노드 방문할 때마다 그 노드와 연결된 인접 노드를 확인하고, 방문하지 않은 인접 노드를 큐에 추가
6. 방문한 노드는 visited 객체를 통해 표시

다시 너비 우선탐색을 살펴 보았는데도 생각이 나지않는다.
너비 우선탐색으로 푸는게 맞는것 같다고 확신했는데...

주석에 달린코드를 보아도.
```js
* function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
```

어쩔수없이 답안을 먼저 보게 되었다.

```js
var averageOfLevels = function(root) {
    let q = [root], ans = []
    while (q.length) {
        let qlen = q.length, row = 0
        for (let i = 0; i < qlen; i++) {
            let curr = q.shift()
            row += curr.val
            if (curr.left) q.push(curr.left)
            if (curr.right) q.push(curr.right)
        }
        ans.push(row/qlen)
    }
    return ans
};
```

averageOfLevels 함수는 이진 트리의 루트 노드인 'root'를 입력
'q' 배열은 현재 레벨의 노드들을 저장하는 대기열(queue)
'ans' 배열은 레벨 별 평균 값을 저장할 목록. 
함수가 시작될 때, 'root'를 큐 'q'에 넣고 'ans' 배열을 비움


## 실패한 이유

- **실패한 이유 1**:
너비 우선 탐색 이해부족. 
1번 문제를 쉽게 푼 탓에 tree 자료구조를 이해했다고 생각했다.
너비 우선탐색 에 대한 이해도가 없었는데 문제를 구현하려고 하는 시도가 되려 시간을 오래 잡아 먹었다.



## 시간 복잡도

	O(n)
(수정한 알고리즘의 시간 복잡도에 대한 분석)

## 공간 복잡도
O(n)
(수정한 알고리즘의 공간 복잡도에 대한 분석)

## 피드백 및 개선점

- **개선이 필요한 점**:
이해 부족, 잘 알지 못하면 한번더 기본적인것을 구현해보려고 노력해봐야겠다.

