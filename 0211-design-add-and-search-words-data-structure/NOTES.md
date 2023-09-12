# 알고리즘 피드백

새로운 단어를 추가하고 문자열이 이전에 추가된 문자열과 일치하는지 찾는 것을 지원하는 데이터 구조를 설계합니다.


## 문제 해결 방법

데이터 구조 설계
단어를 저장하고 검색할 수 있는 데이터 구조를 만들어야한다.
'.' 문자를 포함하여 문자열을 검색해야 함

```js
addWord(word) {
    this.words.add(word);
}
```

search 메서드를 구현
이 메서드는 주어진 문자열에 '.' 문자를 포함한 패턴을 검색을 해야함.

```js
search(word) {
    for (const storedWord of this.words) {
        if (this.isMatch(storedWord, word)) {
            return true;
        }
    }
    return false;
}
isMatch(storedWord, word) {
    if (storedWord.length !== word.length) {
        return false;
    }
    for (let i = 0; i < storedWord.length; i++) {
        if (word[i] !== '.' && word[i] !== storedWord[i]) {
            return false;
        }
    }
    return true;
}
```

isMatch 함수믄 문자열 두개를 비교하여 확인하는 함수.

```js
class WordDictionary {
  constructor() {
    this.words = new Set();
  }

  addWord(word) {
    this.words.add(word);
  }

  search(word) {
    for (const storedWord of this.words) {
        if (this.isMatch(storedWord, word)) {
            return true;
        }
    }
    return false;
  }

  isMatch(storedWord, word) {
    if (storedWord.length !== word.length) {
        return false;
    }
    for (let i = 0; i < storedWord.length; i++) {
        if (word[i] !== '.' && word[i] !== storedWord[i]) {
            return false;
        }
    }
    return true;
  }
}

## 피드백 및 개선점

- **긍정적인 점**:
  끝까지 해냄

- **개선이 필요한 점**:
일치하는 문자열이 존재하는지 검색하는 기능을 구현
