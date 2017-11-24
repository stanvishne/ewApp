const dummyList = [
    {
      date: "2017-06-01",
      globalClock: "2785.3",
      localClock: "2411.9",
      moatzaSum: "0",
      shmira: "171",
      biuv: "0",
      id: 5736
    },
    {
      date: "2017-08-01",
      globalClock: "2841.3",
      localClock: "2446.2",
      moatzaSum: "317",
      shmira: "171",
      biuv: "186",
      id: 5737
    }
];

const elDummyList = [
    {
        date: "2017-08-06",
        globalClock: "125764",
        localClock: "20392.1",
        sum: "1539.17",
        id: 5736
      }
];

const waterFile = 'water.txt';
const electricityFile = 'hashmal.txt';

let db = require(`../db/db.js`);
var fs = require('fs');

module.exports = app => {
    app.get(`/`, (req, res) => {
		res.sendfile('./public/index.html');
	});
    /*get list of records */
    app.get(`/water`, (req, res) => {
        db.getList(waterFile).then(data => {
            res.json(data);
        })                                     
    });

    /*add item to records */
    app.post(`/water`, (req, res) => {               
        let newItem = req.body;
        const update = !!newItem.id;
        if (!update) newItem.id = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        db.getList(waterFile)
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
            //list.push(newItem);
            db.writeList(waterFile, newList).then(()=>{
                res.json(newList);
            })
        }, error => {
            dummyList.push(newItem);
            db.writeList(waterFile, dummyList).then(()=>{
                res.json(dummyList);
            })
        })                
    });

    app.delete(`/water`, (req, res) => {
        let item = req.body;
        db.getList(waterFile)
            .then(list => {
                const newList = list.filter(el => el.id !== item.id);
                db.writeList(waterFile, newList).then(() => {
                    res.json(newList);
                });
            }, error => {
                res.json({});
            })
    });
    
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

    app.post(`/login`, (req, res) => {
        let user = req.body;
        db.login(user)
            .then(result => {
                res.json(result);
            }, error => {
                console.log(error);
                res.json({logged: false});
            })
    }); 
};