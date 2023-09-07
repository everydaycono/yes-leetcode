/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {

  // 이진트리의 레벨 별로 노드들의 평균값을 배열로 반환,
  // 트리의 깊이별로 노드들의 평균값을 반환.
    
    const result = []; // 각 레벨의 평균 값을 저장할 배열

  if (!root) {
    return result; // 루트 노드가 없으면 빈 배열 반환
  }

  const queue = [root]; // 레벨 탐색을 위한 큐

    console.log(queue,"@")
  while (queue.length > 0) {
    console.log(queue)
    const levelSize = queue.length; // 현재 레벨의 노드 개수
    let levelSum = 0; // 현재 레벨의 합

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift(); // 큐에서 노드 추출
      levelSum += node.val; // 현재 레벨의 노드 값을 더함

      // 자식 노드를 큐에 추가
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    // 현재 레벨의 평균 값을 결과 배열에 추가
    result.push(levelSum / levelSize);
  }

  return result;
};