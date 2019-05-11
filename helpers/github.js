const request = require('request');
const config = require('../config.js');
const db = require('../database/index.js')

let getReposByUsername = (query, res, cb) => {
  let options = {
    url: `https://api.github.com/users/${query}/repos`,
  headers: {
    'User-Agent': 'request',
    'Authorization': `token ${config.TOKEN}`
  }

}
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  request(options, function (error, response, body) {
    if(error) {
      console.log("YOU HAVE AN ERROR IN THE GITHUB API CALL")
    } else {
     var newBody = JSON.parse(body)
    newBody.map((repo) => {
      db.save(repo,cb)
    })
    }
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
  });
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
};

module.exports.getReposByUsername = getReposByUsername;