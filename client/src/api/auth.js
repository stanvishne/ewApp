import {config} from 'config/config.js';

const url = `${config.baseUrl}login`;

function login(values) {
    return fetch(url,{
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