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
var fs = require('fs');
let db = require(`../db/db.js`);

const water_routes = require('./water');
const hashmal_routes = require('./hashmal');
const dbwater = require('./dbwater');

module.exports = (app,mdb) => {
    water_routes(app,mdb);
    hashmal_routes(app,mdb);
    dbwater(app, mdb);
    
    app.get(`/`, (req, res) => {
		res.sendfile('./public/index.html');
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