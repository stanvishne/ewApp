import {config} from 'config/config.js';

const url = `${config.baseUrl}electricity`;

function fetchList() {
  return fetch(url);  
}

function addItem(water) {
  return fetch(url,{
    method: 'post',
    headers: config.headers,
    body: JSON.stringify(water)
  });  
}

function putItem(water) {
  return fetch(url,{
    method: 'put',
    headers: config.headers,
    body: JSON.stringify(water)
  });  
}

function deleteItem(water) {
  return fetch(url,{
    method: 'delete',
    headers: config.headers,
    body: JSON.stringify(water)
  });  
}


export default class ApiElectricity {
    static add(water) {
        return addItem(water)
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
      return putItem(water)
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
      return deleteItem(item)
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