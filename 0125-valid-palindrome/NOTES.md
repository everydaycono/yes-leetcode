​# 알고리즘 피드백

모든 대문자를 소문자로 변환하고 영숫자가 아닌 문자를 모두 제거한 후 앞뒤로 동일하게 읽는 경우 구문은 회문입니다. 영숫자 문자에는 문자와 숫자가 포함됩니다.

## 문제 해결 방법

- 변수 지정해서 맨처음, 맨뒤 two pointer 로 잡는다.
- text s의 공백을 제거,소문자로 변경,알파벳과,숫자 아닌것 삭제 후 
- s 의 길이 / 2 를 한 만큼 반복문을 돌린다.
- 맨처음과 맨뒤 가 같은지 확인한다.
- 맞다면 가운데로 모여들게끔 한칸씩 좁혀나간다. (변수 맨처음은 + , 맨 뒤는 -)
- s 의 길이 / 2 반복문 을 해줄때 까지 false 가 나오지 않으면 true 를 반환한다.

```js
var isPalindrome = function(s) {
    // 1. Text 빈공간 없애기.
    // 2. 소문자로 만들기.
    // 3. 알파벳, 숫자 아닌 char 를 ''로 변환하기.
    let candidate = s.split(' ').join('').toLowerCase().replace(/[^a-z0-9]/gi, '')
    
    // two pointer 
    let start = 0;
    let finish = candidate.length-1;

    // 반복문 돌려서 start, finish 다르면 return 해주기.
    for(let i = Math.floor(candidate.length/2); i>0;i-- ) {
        if(candidate[start]!==candidate[finish]){
            return false
            break 
        }
        start++
        finish--
    }
    return true
};
```


## 수정한 접근 방법 및 코드

solution 코드와 나의 코드가 매우 흡사했다.
다만 split() join() 이 없었다.
```js
var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    i = -1;
    j = s.length;
    while (++i < j--)
    {
        if (s[i] != s[j]) return false;
    }
    return true;
};
```
## 시간 복잡도

o(n)

## 공간 복잡도

o(n)

## 피드백 및 개선점

**긍정적인 점**:

  - two pointer 를 정확히 사용했다는 점이 좋았다.

**개선이 필요한 점**:

  - s.split(' ').join('')  이부분이 불필요 했다.
  - ^a-z0-9]/gi 정규표현식이 다 삭제 해주었기 때문이다.

