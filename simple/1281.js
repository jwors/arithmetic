
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
	// 方法 1
	let type = typeof n
	if (type === "number") { 
		n = n.toString()
	}
	const arr = []
	for (let int = 0; int < n.length; int++) { 
		arr.push(n.substring(int, int + 1) - 0)
	}
	return arr.reduce((total,item) => total=total*item,1) - arr.reduce((total, item) => total += item, 0)

	// 方法2 
	n = n + ''
	let  result = 0
	let a = 0, b = 1
	for (let i of n) { 
		result = i - 0
		a += result
		b *= result
	}
	return b - a
};