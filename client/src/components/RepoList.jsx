import React from 'react';
import SingleRepo from './singleRepo.jsx'
const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    {props.repos.map(repo => {
       return <SingleRepo key={repo.repoId} repo={repo} />
    })}
  </div>
)

export default RepoList;