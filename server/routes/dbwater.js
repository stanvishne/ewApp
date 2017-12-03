module.exports = (app, database) => {
  let db;

  if (database) {
    this.db = database;  
  }

  app.post(`/water`, (req, res) => {  
        let newItem = req.body;        
        newItem.id = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        this.db.collection('water').insert(newItem, (err, result) => {
          if (err) { 
            res.send({ 'error': 'An error has occurred' }); 
          } else {
            this.db.collection('water').find().toArray((err, docs) => {                
                res.json(docs);
            });            
          }
        });
    });

  app.get(`/water`, (req, res) => {      
    if (this.db) {
      this.db.collection('water').find().toArray((err, docs) => {            
          res.json(docs);
      });
    }                    
  });
}