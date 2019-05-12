const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = new mongoose.Schema({
  repoId: {type: Number, unique :true}, // id # of the repo
  avatar: String,  // avatar url 
  forks: Number,
  open_issues: Number,
  name: String, // login
  repoUrl: String, //Repo url
  repoName: String,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo, cb) => {
 
const data = {
  repoId: repo.id,
  avatar: repo.owner.avatar_url,
  forks: repo.forks,
  open_issues: repo.open_issues_count,
  name: repo.owner.login,
  repoUrl: repo.html_url,
  repoName: repo.name
}

const Test = new Repo(data);
 
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  Test.save((err) => {
    if(err) { console.log("THIS IS AN ERROR WITH SAVING",err) }
  });
  cb(null,"Post successful")
}
let getData = (res,cb) => {
  Repo.find({}, (err,documents) => {
    if(err) {
      console.log("ERROR IN RETRIEVING DATA", err)
    } else {
      cb(null,documents)
    }
  }).sort({ forks : -1 })
  .limit(25)
  
}

module.exports = {
  save : save,
  getData: getData
}