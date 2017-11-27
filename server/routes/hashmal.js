const electricityFile = 'hashmal.txt';
var fs = require('fs');
let db = require(`../db/db.js`);

module.exports = function(app, mdb) {
    app.get(`/electricity`, (req, res) => {
        db.getList(electricityFile).then(data => {
            res.json(data);
        })                                     
    });

    app.post(`/electricity`, (req, res) => {               
        let newItem = req.body;
        const update = !!newItem.id;
        if (!update) newItem.id = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        db.getList(electricityFile)
        .then(list => {

            let newList = [];
            if (update) {
               newList = list.map(item => {
                   return item.id === newItem.id ? 
                        newItem : item;
                });
            } else {
                newList = [...list, newItem];
            }            
            db.writeList(electricityFile, newList).then(()=>{
                res.json(newList);
            })
        }, error => {
            elDummyList.push(newItem);
            db.writeList(electricityFile, elDummyList).then(()=>{
                res.json(elDummyList);
            })
        })                
    });

    app.delete(`/electricity`, (req, res) => {
        let item = req.body;
        db.getList(electricityFile)
            .then(list => {
                const newList = list.filter(el => el.id !== item.id);
                db.writeList(electricityFile, newList).then(() => {
                    res.json(newList);
                });
            }, error => {
                res.json({});
            })
    });
}