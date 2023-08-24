# 알고리즘 문제
주어진 정수 배열 nums가 비내림차순으로 정렬되어 있습니다. 
각 고유한 요소가 최대 두 번씩 나타나도록 인접한 중복 요소를 제거해야 합니다. 
요소들의 상대적인 순서는 유지되어야 합니다.

어떤 언어에서는 배열의 길이를 변경할 수 없기 때문에, 대신 결과를 배열 nums의 첫 부분에 배치해야 합니다.
 더 정확하게는, 중복된 요소를 제거한 후 남은 요소가 k개라면, 
배열 nums의 처음 k개 요소가 최종 결과를 담아야 합니다. 
첫 번째 k개 요소 이후의 내용은 중요하지 않습니다.

배열에 추가적인 공간을 할당해서는 안 됩니다. 
이 작업은 입력 배열을 수정하여(O(1) 여분의 메모리 사용) 수행해야 합니다.

## 문제 해결 방법
1. 초기 접근 방법 생각 
	- 빈배열 temp 만들기,
	- nums를 반복문 돌면서 temp에 push 해주기.
	- push 된 temp에 반복문 요소들이 2개 겹치는지 확인. (2개 이상이면 통과)
	- 다시 Nums 배열에 순서대로 넣기
	
	- **실패한 이유 1**:
	  (실패한 이유에 대한 설명)
		빈배열을 추가 할당해줌.
		in-place 알고리즘.
		Do not allocate extra space for another array.
		O(1) 추가 메모리를 사용하여 입력 배열을 내부에서 수정하여 이를 수행해야 합니다.
		two-pointer 를 사용하지않아서.

    ```js
    var removeDuplicates = function(nums) {
        let temp = [];
    
        for(let i = 0; i < nums.length; i++) {
            const isExist = temp.filter(item => item === nums[i]);
            
            if (isExist.length < 2) {
                temp.push(nums[i]);
            }
        }
        
        for(let i = 0; i < temp.length; i++) {
            nums[i] = temp[i];
        }
    
        return temp.length;
    };
    ```

## 수정한 접근 방법 및 코드
1. 수정한 코드 
```js
var removeDuplicates = function (nums) {
  if (nums.length <= 2) {
    return nums.length;
  }
  let k = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] != nums[k - 2] || nums[i] != nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
```

2. 수정한 코드 
```js
var removeDuplicates = function (nums) {
  let i = 0;
  while (i < nums.length) {
    const num = nums[i];
    const leftNeighbor = nums[i - 1];
    const rightNeighbor = nums[i + 1];
		
		// 현재 기준 요소 왼쪽 요소와 오른쪽 요소가 값이 같다면 3개가 연속으로 같기때문에
		// splice 를 사용해서 nums 를 제거.
    if (rightNeighbor === num && leftNeighbor === num) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  console.log(nums);
  return nums.length;
};
```


## 시간 복잡도

  1번 솔루션 :O(n)
  
  2번 솔루션 : O(n^2) 
  
  나의 코드 : O(n^2)

## 공간 복잡도

  1번 솔루션 : O(1)
  
  2번 솔루션 : O(1)
  
  나의 코드 : O(n)


## 피드백 및 개선점

- **긍정적인 점**:
	1번 솔루션에서 제공한 코드의 runtime 은 190ms memory 는 51.3mb 인데
	내가 처음에 사용한 코드의 runtime 은 65ms memory 는 45mb 이다.
	물론 주어진 조건은 만족 시키지 못했지만 예제 코드 안에서 해결책에 비해 성능은 좋았다는것에 긍정적으로 느낌.

- **개선이 필요한 점**:
	in-place 알고리즘  
	two-pointer 를 피드백으로 받고있는데, 아무리 생각해도 추가 공간 할당말고 생각이 나지 않는다...
	

- **기타 피드백**:
	코드를 작성하기전 나 자신과의 대화가 필요한듯 (초등학생한테 문제를 설명하듯 설명먼저하기)
