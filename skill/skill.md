
## 取模

> 数学技巧
这里的方法利用了一个数论的性质：如果一个数能被 m 整除，那么将它乘以 10 后再加上另一个数字，结果对 m 取模的余数和之前的结果相比不变。
具体地说，假设有一个数 x，它能被 m 整除，即 x % m === 0。那么当我们将 x 乘以 10 后再加上另一个数字 w，得到新的数 x' = x * 10 + w，它对 m 取模的余数仍然是 0。

[找出字符串的可整除数组](https://leetcode.cn/problems/find-the-divisibility-array-of-a-string/description/?envType=daily-question&envId=2024-03-07)

## 二分法
>
> 可用于**有序数组**的查找对应的值

```javascript

int binarySearch(int[] nums, int target){
  if(nums == null || nums.length == 0)
    return -1;

  int left = 0, right = nums.length - 1;
  while(left <= right){
    // Prevent (left + right) overflow
    int mid = left + (right - left) / 2;
    if(nums[mid] == target){ return mid; }
    else if(nums[mid] < target) { left = mid + 1; }
    else { right = mid - 1; }
  }

  // End Condition: left > right
  return -1;
}

// left + (right - left) / 2 是为了防止溢出
```

## 双指针
>
> 双指针技巧通常用于解决一些数组或字符串相关的算法问题，其中需要在数组或字符串中找到满足特定条件的子序列、子数组或子字符串。这种技巧的核心思想是使用两个指针来遍历数组或字符串，通过移动这两个指针以在遍历过程中实现特定的目标。

## 快慢指针

[来源](https://leetcode.cn/leetbook/read/array-and-string/cv3bv/)


##