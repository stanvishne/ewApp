var fs = require('fs');

var db = function () {};

db.prototype.getList = function(fileName) {
    return promise = new Promise(function(resolve, reject) {
        fs.readFile(fileName, 'utf8', function (err,data) {
            if (err) {
              console.log(err);  
              reject(Error("error reading file"));          
             } else {
             resolve(JSON.parse(data));
             }             
         });       
      });    
}

db.prototype.writeList = function(fileName, list) {
    return promise = new Promise(function(resolve, reject) {        
        fs.writeFile(fileName, JSON.stringify(list), function (err) {
            if (err) {
                reject(Error("error writing file"));    
            } else {
                resolve();
            }          
        });    
      });    
}

db.prototype.login = function(user) {
    return promise = new Promise(function(resolve, reject) {
        
        var res = users
        fs.readFile('users.txt', 'utf8', function (err,data) {
            if (err) {
              console.log(err);  
              reject(Error("error reading file"));          
             } else {
                 const usersList = JSON.parse(data);
                 const res = usersList.find(el => el.name === user.username && el.pass === user.password);
                 resolve({
                     logged: !!res
                 });
             }             
         });       
      });    
}

module.exports = new db();