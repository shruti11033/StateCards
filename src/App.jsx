//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
//import Pagination from '@material-ui/lab/Pagination';
import Search from './search';
import Sort from './sort';
import States from './states';
import Paging from './paging';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchPrefix: '', sortDir: 1, limit: 10, offset: 0, count: 0 };
  }

  searchHandler(searchTerm) {
    this.setState({ searchPrefix: searchTerm });
  }

  sortHandler(dir) {
    console.log(`app got sort: ${dir}`);
    this.setState({ sortDir: dir });
  }

  paginationHandler(offsetValue) {
    this.setState({ offset: offsetValue });
  }

  countHandler(countValue) {
    this.setState({ count: countValue });
  }

  offsetHandler(offsetValue) {
    this.setState({ offset: offsetValue });
  }

  render() {
    return (
      <div className="App">
        <h1>States of America</h1>
        <div>
          <div style={{display: 'inline-block'}}><Search searchHandler={this.searchHandler.bind(this)}/></div>
          <div style={{display: 'inline-block'}}><Sort sortHandler={this.sortHandler.bind(this)}/></div>
        </div>
        <States searchPrefix={this.state.searchPrefix} sortDir={this.state.sortDir} limit={this.state.limit} offset={this.state.offset} countHandler={this.countHandler.bind(this)} />
        <Paging offset={this.state.offset} count={this.state.count} limit={this.state.limit} offsetHandler={this.offsetHandler.bind(this)} />
      </div>
    );
  }
}

export default App;
