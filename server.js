const https = require('https');
const { userBal } = require('money-sim-project/JS Code (front-end)/MoneySim.js');

// URL of the server you want to make a request to
const url = 'https://my-cloudflare-worker.schoolproj.workers.dev/';

// Making a GET request
https.get(url, (response) => {
  let data = '';

  // A chunk of data has been received.
  response.on('data', (chunk) => {
    data += chunk;
  });

  // The response has ended.
  response.on('end', () => {
    console.log('Response:', data);
  });

}).on('error', (error) => {
  console.error('Error:', error);
});
