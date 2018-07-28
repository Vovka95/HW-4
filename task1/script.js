if(!Array.prototype.map) {

	Array.prototype.map = function(callback, array) {
	
  	if (this == null) {
      throw new TypeError(' this is null or not defined');
    }
    
 		if(!Array.isArray(this)) {
    	throw new TypeError(`${this} is not array`); 
		}
   
		if (typeof callback !== 'function') {
    	throw new TypeError(`${callback} is not a function`);
    }
    
		const newArray =[];

		for (let i = 0; i < this.length; i++) {
    	newArray.push(callback(this[i], i, this))
    }

		return newArray;
	}
  
}



let arr = [1,3,5];
let newArr = arr.map(
	function(el) {
		return el + 2;
	}
)

console.log(newArr);


