import React, { Component, Fragment } from 'react';

import Header from './components/Header';
import CharList from './components/CharList';

import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
		<CharList/>
      </Fragment>
    );
  }
}

export default App;
