​# 알고리즘 피드백

## 문제 해결 방법

그래프 순회(Traversal)를 사용하여 해결가능.
그래프를 순회하면서 노드를 하나씩 방문하고, 각 노드를 복제하여 새로운 그래프를 만들어야함.
대부분의 그래프 순회 문제는 DFS(깊이 우선 탐색) 또는 BFS(너비 우선 탐색)를 사용하여 해결할 수 있으며, 
어떤 방식을 선택할지 고려

이 문제는 그래프가 연결되어 있고, 각 노드가 이웃 노드의 목록을 가지고 있는 형태. 
따라서 DFS 또는 BFS를 사용하여 그래프를 순회하면서 노드를 복제하는 방식을 선택.
DFS를 선택한 경우, 재귀 함수를 사용하여 노드를 순회하고 복제하면서 이웃 노드를 방문

해결 방법:

이 문제를 해결하기 위해 DFS(깊이 우선 탐색)를 사용할 수 있습니다. 여기서는 DFS를 통해 그래프를 순회하면서 각 노드를 복제하고, 복제된 노드끼리 연결하여 새로운 그래프를 만듭니다.

먼저, 방문한 노드를 추적하기 위한 Map(해시 맵)을 생성합니다.
DFS 함수를 정의합니다. 이 함수는 현재 노드를 인자로 받아서 노드를 복제하고, 이웃 노드들을 재귀적으로 복제한 후 연결합니다.
방문한 노드는 Map을 사용하여 추적하고, 이미 복제된 노드인 경우에는 그 노드를 반환합니다.
그래프를 순회하면서 노드를 복제하고 연결한 후, 복제된 그래프의 루트 노드를 반환합니다.
예시 코드로 이를 표현하면 다음과 같습니다:


```js
class Node {
  constructor(val) {
    // 각 노드를 생성할 때 노드의 값(val)과 이웃 노드의 배열(neighbors)을 초기화합니다.
    this.val = val;
    this.neighbors = [];
  }
}

function cloneGraph(node) {
  // 이미 방문한 노드를 추적하기 위한 Map을 생성합니다.
  const visited = new Map();

  // 깊이 우선 탐색(DFS)을 수행하는 재귀 함수를 정의합니다.
  function dfs(originalNode) {
    // 노드가 존재하지 않으면 null을 반환합니다.
    if (!originalNode) return null;
    
    // 이미 방문한 노드인 경우, 해당 노드의 복제본을 반환합니다.
    if (visited.has(originalNode.val)) return visited.get(originalNode.val);

    // 복제 노드를 생성하고 방문한 노드로 표시합니다.
    const cloneNode = new Node(originalNode.val);
    visited.set(cloneNode.val, cloneNode);

    // 이웃 노드를 순회하면서 재귀적으로 복제하고 복제 노드의 이웃으로 추가합니다.
    for (const neighbor of originalNode.neighbors) {
      const cloneNeighbor = dfs(neighbor);
      cloneNode.neighbors.push(cloneNeighbor);
    }

    // 현재 노드의 복제본을 반환합니다.
    return cloneNode;
  }

  // DFS 함수를 시작 노드(node)에 대해 호출하여 그래프를 복제하고 복제된 그래프의 루트 노드를 반환합니다.
  return dfs(node);
}
