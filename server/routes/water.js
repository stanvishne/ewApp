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
let db = require(`../db/db.js`);
const waterFile = 'water.txt';

module.exports = function(app, mdb) {
    /*get list of records */
    app.get(`/water`, (req, res) => {
        db.getList(waterFile).then(data => {
            res.json(data);
        })                                     
    });
     /*add item to records */
    //  app.post(`/water`, (req, res) => {               
    //     let newItem = req.body;
    //     const update = !!newItem.id;
    //     if (!update) newItem.id = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    //     db.getList(waterFile)
    //     .then(list => {

    //         let newList = [];
    //         if (update) {
    //            newList = list.map(item => {
    //                return item.id === newItem.id ? 
    //                     newItem : item;
    //             });
    //         } else {
    //             newList = [...list, newItem];
    //         }
    //         //list.push(newItem);
    //         db.writeList(waterFile, newList).then(()=>{
    //             res.json(newList);
    //         })
    //     }, error => {
    //         dummyList.push(newItem);
    //         db.writeList(waterFile, dummyList).then(()=>{
    //             res.json(dummyList);
    //         })
    //     })                
    // });

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
};