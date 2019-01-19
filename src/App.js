import React, { Component } from 'react';

import Header from "./components/Header.jsx";
import Tweets from "./components/Tweets.jsx";

import './styling/App.scss';

class App extends Component {
  render() {
    return (
      <Header />
      <Tweets />
    );
  }
}

export default App;
