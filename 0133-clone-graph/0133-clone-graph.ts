/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
	  const visited = new Map();

  function dfs(originalNode) {
    if (!originalNode) return null;
    if (visited.has(originalNode.val)) return visited.get(originalNode.val);

    const cloneNode = new Node(originalNode.val);
    visited.set(cloneNode.val, cloneNode);

    for (const neighbor of originalNode.neighbors) {
      const cloneNeighbor = dfs(neighbor);
      cloneNode.neighbors.push(cloneNeighbor);
    }

    return cloneNode;
  }

  return dfs(node);
};