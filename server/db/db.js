var fs = require('fs');

var db = function () {};

db.prototype.getList = function() {
    return promise = new Promise(function(resolve, reject) {
        // do a thing, possibly async, then…
        fs.readFile('water.txt', 'utf8', function (err,data) {
            if (err) {
              console.log(err);  
              reject(Error("error reading file"));          
             } else {
             resolve(JSON.parse(data));
             }             
         });       
      });    
}

db.prototype.writeList = function(list) {
    return promise = new Promise(function(resolve, reject) {        
        fs.writeFile('water.txt', JSON.stringify(list), function (err) {
            if (err) {
                reject(Error("error writing file"));    
            } else {
                resolve();
            }          
        });    
      });    
}

module.exports = new db();