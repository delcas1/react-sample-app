// request.js
const http = require('http');

export default function request(url) {
  return new Promise(resolve => {
    // Test http request
    // c-code data from DAPI.
    
    http.get({path: url}, response => {
      let data = '';
      response.on('data', _data => (data += _data));
      response.on('end', () => resolve(data));
    });
  });
}