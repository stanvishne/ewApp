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

const water_routes = require('./dbwater');
const hashmal_routes = require('./dbhashmal');
const login = require('./login');

module.exports = (app,database) => {    
    water_routes(app,database);
    hashmal_routes(app,database);
    login(app, database);

    app.get(`/`, (req, res) => {
		res.sendfile('./public/index.html');
    });
};