/*let arr=[];
let decrement1 = (n) => {
    if(n >= 0) {
        arr.push(n);
       return decrement(n-1);
   }else {
    console.log(arr.join(','));
	}
}
decrement1(10);*/



const decrement2 = (a) => {
	let arr = [];	
	for (let i = a; i >= 0; i-- ) {
		
		arr.push(i);		
			
	}
	console.log(arr.join(', '));
};

decrement2(10);