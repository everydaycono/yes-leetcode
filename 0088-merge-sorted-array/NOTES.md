### 1 번째 시도

```js
  // 1번째 시도
  function merge(nums1: number[], m: number, nums2: number[], n: number): void {
      nums1 = [...nums1,...nums2].sort().filter(item=>item!==0)
  };

  // 2번째시도
  function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1 = [...nums1.slice(0,m),...nums2.slice(0,n)].sort()
  };
```

example 3개가 브라우저 콘솔에서는 잘 동작함.
leetcode에서는 example 2번만 통과됨
아직 문제에 대한 이해도가 부족

### 2 번째 시도

```js
  function merge(nums1: number[], m: number, nums2: number[], n: number): void {
      nums1 = nums1.splice(m,n,...nums2).sort()
  };
```

nums1 에 m개 자리수 뒤 부터 0,0,0 으로 채워지는것을 splice 를 통해서 매꿈. exampe 2,3 통과
<br/>
`nums1= ....` nums1 을 덮어쓰는중

### 3 번째 시도

```js
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for(let i=m; i < m+n; i++){
        nums1[i]=nums2[i-m]
    }

    nums1.sort()
};
```


## 해결책
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
