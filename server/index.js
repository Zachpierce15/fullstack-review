const express = require('express');
let app = express();
const getRepos = require('../helpers/github.js')
const bodyParser = require('body-parser');
app.use(bodyParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  console.log(req.body)
  var name = req.body.name
  getRepos.getReposByUsername(name, res, (err, data) => {
    if(err) {
      console.log("Failed to add post data to database")
    } else {
      res.status(200);
      res.send('query complete')
    }
  })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

