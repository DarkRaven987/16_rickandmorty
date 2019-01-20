import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/Header';
import CharList from './components/CharList';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
		<Fragment>
			<Header
				title = "the rick and morty api"
				homeSubtitle="hey, did you ever want to hold a terry fold?"
				middleSubtitle="i got one right here, grab my terry flap!"
			/>
			<Route path="/" component={CharList}/>
		</Fragment>
      </Router>
    );
  }
}

export default App;
