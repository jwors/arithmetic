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
			new Array(MapValue[keys[t]]).fill(keys[t])
		)
	}
	console.log(arr)
	for (let z = 0; z < arr.length -1; z++) { 
		console.log(z)
		if (arr[z].length === arr[z + 1].length && arr[z][0] < arr[z + 1][0]) { 
			[arr[z],arr[z+1]] = [arr[z+ 1],arr[z]]
		}
	}
	arr = arr.sort((a, b) => a.length - b.length).flat()
	return arr
};

console.log(frequencySort([8,-8,2,-8,-5,-3]))