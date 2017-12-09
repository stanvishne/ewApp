import {config} from 'config/config.js';

const url = `${config.baseUrl}water`;

function fetchList() {
  return fetch(url);  
}

function addWater(water) {
  return fetch(url,{
    method: 'post',
    headers: config.headers,
    body: JSON.stringify(water)
  });  
}

function putWater(water) {
  return fetch(url,{
    method: 'put',
    headers: config.headers,
    body: JSON.stringify(water)
  });  
}

function deleteWater(water) {
  return fetch(url,{
    method: 'delete',
    headers: config.headers,
    body: JSON.stringify(water)
  });  
}


export default class ApiWater {
    static add(water) {
        return addWater(water)
          .then(function(response) {        
            return response.json();
          })
          .then(function(list) {    
            //console.log(list);      
              return new Promise(resolve => {
                resolve(list);
              });
          });
    }

    static edit(water) {
      return putWater(water)
        .then(function(response) {        
          return response.json();
        })
        .then(function(list) {    
          //console.log(list);      
            return new Promise(resolve => {
              resolve(list);
            });
        });
  }

    static fetchList() {      
      return fetchList()
      .then(function(response) {        
          return response.json();
      })
      .then(function(list) {          
           return new Promise(resolve => {
            resolve(list);
           });
       });      
    }

    static deleteItem(item) {
      return deleteWater(item)
      .then(function(response) {        
        return response.json();
      })
      .then(function(list) {          
          return new Promise(resolve => {
            resolve(list);
          });
      });  
    }
}