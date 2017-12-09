module.exports = (app, database) => {
	let db;
  
	if (database) {
	  this.db = database;  
	}
  
	app.post(`/login`, (req, res) => {
		  const user = req.body;  
		  let itemToFind = {};
		  itemToFind[user.username] = user.password;
		  this.db.collection('users').find(itemToFind).toArray((err, result) => {			
			if (err || !result.length) { 
				console.log(err);
				res.json({logged: false});
			} else {				
				res.json({
					logged: true
				});
			}
		  });
	  });
	
  }