

if (!Array.prototype.map2) {
	Array.prototype.map2 = function(func, array) {
	
		const newArray =[];

		for (let i = 0; i < array.length; i++) {
		
			newArray.push(func(array[i], i, array));
	
		}

		return newArray;
	}

}

let arr = [1, 4, 9];
let newArr = arr.map2(
	function(el) {
		return el ** 2;
	}
)

console.log(newArr);
//console.log(roots2);


