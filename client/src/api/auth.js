function login(values) {
    return fetch('http://localhost:3000/login',{
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });  
  }

export default class ApiAuth {
    static login(values) {
        return login(values)
          .then(function(response) {        
            return response.json();
          })
          .then(function(resp) {    
            
              return new Promise(resolve => {
                resolve(resp);
              });
          });
        

    }
}    