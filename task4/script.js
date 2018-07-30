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
      }, 5000);
	})
}

function getUserNameAll() {
	return new Promise(function(resolve, reject) {
		resolve(getUserlastName());
	})
}


async function showAllData() {
	try {	
		const userName = await getUserName();
		const userlastName = await getUserNameAll();
		console.log(userName, userlastName);
	} catch (err) {
		console.log("error")
	}
	
}

showAllData();