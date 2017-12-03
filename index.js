const express   = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
//const db = require('./server/config/dbconfig');
const app = express();
const port      = process.env.PORT || 3000;

const mongo_uri = process.env.MONGODB;
console.log('------------');
console.log(mongo_uri);
console.log('------------');
//mongo_uri = db.url;
app.use(bodyParser.json());

app.use(function (req, res, next) {
    
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
});

app.use(express.static(`${__dirname}/client/public/`)); 		// statics
require(`./server/routes/routes.js`)(app);						// routes

// app.listen(port);										// let the games begin!
// console.log(`Web server listening on port ${port}`);
const newItem = {
        date: "2017-06-01",
        globalClock: "2785.3",
        localClock: "2411.9",
        moatzaSum: "0",
        shmira: "171",
        biuv: "0",
        id: 5736
      };

MongoClient.connect(mongo_uri, (err, database) => {
        if (err) return console.log(err)                
        require(`./server/routes/routes.js`)(app, database);
        app.listen(port, () => {
          console.log('We are live on ' + port);
        });               
})