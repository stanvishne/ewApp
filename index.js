const express   = require('express');
const app       = express();
const port      = 3000;

//var cors = require('cors')
//app.use(cors());
app.use(express.static(`${__dirname}/client/public/`)); 		// statics
require(`./server/routes/routes.js`)(app);						// routes

app.listen(port);										// let the games begin!
console.log(`Web server listening on port ${port}`);