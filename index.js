const express   = require('express');
let bodyParser = require('body-parser');


const app       = express();
const port      = process.env.PORT || 3000;

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

app.listen(port);										// let the games begin!
console.log(`Web server listening on port ${port}`);