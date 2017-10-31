function fetchList() {
  return fetch('http://localhost:3000/water');  
}

function addWater(water) {
  return fetch('http://localhost:3000/water',{
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(water)
  });  
}

function deleteWater(water) {
  return fetch('http://localhost:3000/water',{
    method: 'delete',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(water)
  });  
}


export default class ApiWater {
    static addEdit(water) {
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