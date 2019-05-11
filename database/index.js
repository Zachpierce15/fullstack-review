const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = new mongoose.Schema({
  id: Number, // id # of the repo
  avatar: String,  // avatar url 
  forks: Number,
  open_issues: Number,
  name: String // login
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo, cb) => {
  console.log("THSI IS A TEST THAT IS PASSING")
const data = {
  id: repo.id,
  avatar: repo.owner.avatar_url,
  forks: repo.owner.forks,
  open_issues: repo.owner.open_issues_count,
  name: repo.owner.login
}
const Test = new Repo(data)
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  Test.save()
}

module.exports.save = save;