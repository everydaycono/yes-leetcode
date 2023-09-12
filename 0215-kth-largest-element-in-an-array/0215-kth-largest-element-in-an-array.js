/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
    // 퀵 선택 알고리즘을 구현합니다.
    function quickSelect(arr, left, right, k) {
        if (left === right) return arr[left];

        const pivotIndex = partition(arr, left, right);

        if (k === pivotIndex) {
            return arr[k];
        } else if (k < pivotIndex) {
            return quickSelect(arr, left, pivotIndex - 1, k);
        } else {
            return quickSelect(arr, pivotIndex + 1, right, k);
        }
    }

    // 배열을 파티션하는 함수를 구현합니다.
    function partition(arr, left, right) {
        const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        const pivotValue = arr[pivotIndex];
        swap(arr, pivotIndex, right);

        let i = left;

        for (let j = left; j < right; j++) {
            if (arr[j] > pivotValue) {
                swap(arr, i, j);
                i++;
            }
        }

        swap(arr, i, right);
        return i;
    }

    // 두 요소의 위치를 바꾸는 함수를 구현합니다.
    function swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // k번째로 큰 요소를 찾습니다.
    return quickSelect(nums, 0, nums.length - 1, k - 1);
}

// 예제 테스트
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4
