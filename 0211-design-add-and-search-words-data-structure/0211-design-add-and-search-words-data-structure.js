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