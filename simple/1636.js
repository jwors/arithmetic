/*
	1636.按照频率将数组升序排序
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
		me
		1. 装成对象或者是map,得出当前数组内不同元素出现的次数
		2. 再把对象转成二位数组，再把而数组通过每一项的长度进行排序
		3. 最后对于长度相同的数组再进进行排序即可
*/ 
const frequencySort = function (nums) {
	const MapValue = {}
	nums.forEach(item => MapValue[item] = 0)
	nums.forEach(item => {
		MapValue[item] = MapValue[item] + 1
	})
	const keys = Object.keys(MapValue)
	let arr = []
	for (let t = 0; t < keys.length; t++){
		arr.push(
			new Array(MapValue[keys[t]]).fill(Number(keys[t]))
		)
	}
	arr = arr.sort((a, b) => a.length - b.length)
	for (let z = 0; z < arr.length  ; z++) { 
		for (let k = 0; k < arr.length -1; k++) { 
			if (arr[k].length === arr[k + 1].length && arr[k][0] < arr[k+1][0]) { 
				[arr[k + 1],arr[k]] = [arr[k],arr[k + 1]]
			}
		}
	}
	return arr.flat()
};

/*
	other people
	作者：LeetCode-Solution
	链接：https://leetcode.cn/problems/sort-array-by-increasing-frequency/solution/an-zhao-pin-lu-jiang-shu-zu-sheng-xu-pai-z2db/
	来源：力扣（LeetCode）
	著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

var OtherFrequencySort = function(nums) {
	const cnt = new Map();
	// 也是计算出出现的次数
	for (const num of nums) {
			cnt.set(num, (cnt.get(num) || 0) + 1);
	}
	const list = [...nums];
	console.log(list)
	list.sort((a, b) => {
			const cnt1 = cnt.get(a), cnt2 = cnt.get(b);
			return cnt1 !== cnt2 ? cnt1 - cnt2 : b - a;
	});
	const length = nums.length;
	for (let i = 0; i < length; i++) {
			nums[i] = list[i];
	}
	return nums;
};

OtherFrequencySort([-1,1,-6,4,5,-6,1,4,1])
