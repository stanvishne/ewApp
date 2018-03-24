module.exports = (app, database) => {
  let db;

  if (database) {
    this.db = database;  
  }

  app.post(`/electricity`, (req, res) => {  
        let newItem = req.body;        
        newItem.id = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        this.db.collection('electricity').insert(newItem, (err, result) => {
          if (err) { 
            res.send({ 'error': 'An error has occurred' }); 
          } else {
            this.db.collection('electricity').find().toArray((err, docs) => {                
                res.json(docs);
            });            
          }
        });
    });
  app.put('/electricity', (req, res) => {
      let item = req.body;
      const query = {id: item.id};
      delete item._id;
      this.db.collection("electricity").updateOne(query, item, (err, result) => {
        if (err) throw err;        
        this.db.collection('electricity').find().toArray((err, docs) => {            
          res.json(docs);
        });
      });
  });
  app.get(`/electricity`, (req, res) => {      
    if (this.db) {
      this.db.collection('electricity').find().sort({'date': 1}).toArray((err, docs) => {            
          res.json(docs);
      });
    }                    
  });

  app.delete('/electricity', (req, res) => {
    let item = req.body;
    const query = {id: item.id};    
    this.db.collection("electricity").deleteOne(query, (err, result) => {
      if (err) throw err;        
      this.db.collection('electricity').find().toArray((err, docs) => {            
        res.json(docs);
      });
    });
});

}