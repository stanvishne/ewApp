module.exports = (app, db) => {
    app.post(`/water`, (req, res) => {  
        let newItem = req.body;        
        newItem.id = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        db.collection('water').insert(newItem, (err, result) => {
          if (err) { 
            res.send({ 'error': 'An error has occurred' }); 
          } else {
            res.send(result.ops[0]);
          }
        });
    });
}