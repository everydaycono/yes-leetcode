/**
 * @param {string} s
 * @return {boolean}
 */
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