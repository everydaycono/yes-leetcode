​# 알고리즘 피드백

## 문제 해결 방법

이 문제는 Trie (또는 Prefix Tree) 자료 구조를 구현하는 문제라고 생각했다. 
Trie를 구현하려면 주어진 문자열을 Trie에 삽입하고, 
Trie에서 문자열을 검색하거나 접두사로 시작하는 문자열을 찾는 등의 작업을 수행
따라서 Trie를 구현해보는 연습과 유사한 과제라고 생각.

trie 자료구조를 이용해서 자동완성 기능을 구현한다고 하니
최근 프로젝트에서 자동완성 기능이 있었으면 좋겠다.. 라고  생각을 하고 있던 찰나.

trie 라는 자료구조를 접하게 되었다.

문제 해결은 trie 를 구현해보는것으로 거의 완성이 되었다.

```js
class Trie {
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

```


## 피드백 및 개선점

- **긍정적인 점**:
  trie 자료 구조를 구현해보는것.
