function fetchList() {
  return fetch('http://localhost:3000/water');  
}


export default class ApiWater {
    static addEdit() {
        return new Promise(resolve => {
          setTimeout(() => {
            // do something here
            resolve();
          }, 1000);
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
}