import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
    this.search = this.search.bind(this);
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      method: 'POST',
      url: 'http://localhost:1128/repos',
      data: {name: term},
      dataType: 'json',
      success: (results) => {
        console.log('here is you results', results)
      }, 
      error: (error) => {
        console.log('You have an error',error)
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));