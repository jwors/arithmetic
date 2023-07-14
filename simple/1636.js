/*
	1636.按照频率将数组升序排序
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
		me
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
console.log(frequencySort([3,8,7,-7,5,3,-7]))