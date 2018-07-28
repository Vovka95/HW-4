function getUserlastName() {
   	return new Promise(function(resolve, reject) {
      	setTimeout(function() {
      		resolve({
         		lastName: 'Protskyi'
      		});
      	}, 10000);
      });
}


getUserlastName().then(function(data) {
	console.log(data);
})

