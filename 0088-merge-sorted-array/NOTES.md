# 알고리즘 피드백

감소하지 않는 순서로 정렬된 두 개의 정수 배열 nums1과 nums2가 주어지고, nums1과 nums2의 요소 수를 각각 나타내는 두 개의 정수 m과 n이 주어집니다.

nums1과 nums2를 감소하지 않는 순서로 정렬된 단일 배열로 병합합니다.

최종 정렬된 배열은 함수에 의해 반환되지 않고 nums1 배열 안에 저장되어야 합니다. 이를 위해 nums1의 길이는 m + n이며, 첫 번째 m 요소는 병합해야 하는 요소를 나타내고 마지막 n 요소는 0으로 설정되어 무시해야 합니다. nums2의 길이는 n입니다.
## 문제 해결 방법

1번째 시도

```js
  function merge(nums1: number[], m: number, nums2: number[], n: number): void {
      nums1 = [...nums1,...nums2].sort().filter(item=>item!==0)
  };
```

2번째 시도

```js
  function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1 = [...nums1.slice(0,m),...nums2.slice(0,n)].sort()
  };
```

3번째 시도

```js
  function merge(nums1: number[], m: number, nums2: number[], n: number): void {
      nums1 = nums1.splice(m,n,...nums2).sort()
  };
```

nums1 에 m개 자리수 뒤 부터 0,0,0 으로 채워지는것을 splice 를 통해서 매꿈. exampe 2,3 통과
<br/>
`nums1= ....` nums1 을 덮어쓰는중

4번째 시도

```js
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for(let i=m; i < m+n; i++){
        nums1[i]=nums2[i-m]
    }

    nums1.sort()
};
```

## 실패한 이유

**실패한 이유 **:

- example 3개가 브라우저 콘솔에서는 잘 동작함. 
- leetcode에서는 example 2번만 통과됨 아직 문제에 대한 이해도가 부족
- 주어진 문제에 대해 천천히 읽어봐야할 필요를 느낌.

## 수정한 접근 방법 및 코드

```js
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
};
```

## 피드백 및 개선점

**긍정적인 점**:
  - 브라우저에서는 동작하는 코드를 만든것은 잘함.

**개선이 필요한 점**:
  - 브라우저에서만 동작하는 코드를 만든것을 잘못함.
	
