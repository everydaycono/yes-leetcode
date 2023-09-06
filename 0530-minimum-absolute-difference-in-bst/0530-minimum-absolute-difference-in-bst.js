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
 * @return {number}
 */
var getMinimumDifference = function(root) {
  // in-order 를 구하면 가장 작은수 부터 찾을수있음.
  // in-order 로 줄을 세운다음에 노드 사이의 값의 최소값을 찾는 문제
  // 1번 문제 는 1,2,3,4,6
  // 2번 문제는 0,1,12,48,49


    let arr = [];
    function inOrderFn(node){
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
