import React from 'react';


var SingleRepo = (props) => (
  <div style={{ borderBottom: "solid"}}>
  <div style={{fontSize:30}}>{props.repo.name}</div>
  <img style={{height: 75, textAlign: 'center'}} src={props.repo.avatar} />
  <div><a href={props.repo.repoUrl}>{props.repo.repoName}</a></div>

  </div>
);

export default SingleRepo;

// avatar: "https://avatars3.githubusercontent.com/u/46329458?v=4"
// forks: 0
// name: "Zachpierce15"
// open_issues: 0
// repoId: 184799394
// repoName: "Movielist"
// repoUrl: "https://api.github.com/repos/Zachpierce15/Movielist"
// __v: 0
// _id: "5cd75fe7aff7444349db0aa7"