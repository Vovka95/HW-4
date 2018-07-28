function getUserName() {
	return new Promise(function(resolve, reject) {
		resolve({
			name: 'Vova'	
		});
	})
}




function getUserlastName() {
   return new Promise(function(resolve, reject) {
      setTimeout(function() {
      	resolve({
         	lastName: 'Protskyi'
      	});
      }, 10000);
	})
}


async function showAllData() {
	try {	
		const userName = await getUserName();
		const userlastName = await getUserlastName();
		console.log(userName, userlastName);
	} catch (err) {
		console.log("error")
	}
	
}

showAllData();