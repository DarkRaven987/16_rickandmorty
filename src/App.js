import React, { Component, Fragment } from 'react';

import Header from './components/Header';
import CharList from './components/CharList';

import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header
			title = "the rick and morty api"
			homeSubtitle="hey, did you ever want to hold a terry fold?"
			middleSubtitle="i got one right here, grab my terry flap!"
		/>
		<CharList/>
      </Fragment>
    );
  }
}

export default App;
