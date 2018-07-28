let arr=[];
let decrement = (n) => {
    if(n >= 0) {
        arr.push(n);
        decrement(n-1);
   }else {
    console.log(arr.join(','));
	}
}
decrement(10);