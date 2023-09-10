class Trie {
  /**
   * Trie 데이터 구조를 나타냅니다.
   */
  constructor() {
    // Trie의 루트 
    this.root = {};
  }

  /**
   * 단어를 Trie에 삽입
   * @param {string} word - 삽입할 단어
   */
  insert(word) {
    let node = this.root;

    // 단어의 각 문자를 loop
    for (let c of word) {
      // 문자가 현재 노드에 존재하지 않으면 새로운 노드를 생성
      if (node[c] == null) node[c] = {};
      // 다음 노드로 이동
      node = node[c];
    }
    // 마지막 노드를 단어의 끝으로 표시
    node.isWord = true;
  }

  traverse(word) {
    let node = this.root;
    for (let c of word) {
      node = node[c];
      if (node == null) return null;
    }
    return node;
  }

  search(word) {
    const node = this.traverse(word);
    // 노드를 찾고 그 노드가 단어의 끝을 나타내는 경우 true를 반환
    return node != null && node.isWord === true;
  }

  startsWith(prefix) {
    return this.traverse(prefix) != null;
  }
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */