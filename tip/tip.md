## 双指针

* 可以解决滑动窗口问题 例如 middle\长度最小子数组.md
* [链表中的快慢指针](https://leetcode.cn/leetbook/read/linked-list/jcp57/)

## 二分查找

* 用户查询有序数组中的特定元素

### 二分模板

[来源](https://leetcode.cn/leetbook/read/binary-search/xerqxt/)



```java
 // 模板1 用于查找可以通过访问数组中的单个索引来确定元素或者条件
 int binarySearch(int[] nums,int target){
  if(nums === null || nums.length === 0) {
   return -1
  }
  int left = 0,right=nums.length -1;
  while(left <= right){
   int mid = left + (right - left)/2;
   if(nums[mid] === target){
    return mid
   }else if(nums[mid] < target){
    left = mid+1
   }else{
    right = mid -1
   }
  }
  return -1
 }

 // 模板2
  int binarySearch(int[] nums,int target){
  if(nums === null || nums.length === 0) {
   return -1
  }
  int left = 0,right=nums.length;
  while(left < right){
   int mid = left + (right - left)/2;
   if(nums[mid] === target){
    return mid
   }else if(nums[mid] < target){
    left = mid+1
   }else{
    right = mid
   }
  }
 if(left !=nums.length && nums[left] === target) return left;
  return -1
 }


 //模板3
 int binarySearch(vector<int>& nums, int target){
    if (nums.size() == 0)
        return -1;

    int left = 0, right = nums.size() - 1;
    while (left + 1 < right){
        // Prevent (left + right) overflow
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid;
        } else {
            right = mid;
        }
    }

    // Post-processing:
    // End Condition: left + 1 == right
    if(nums[left] == target) return left;
    if(nums[right] == target) return right;
    return -1;
}
```
