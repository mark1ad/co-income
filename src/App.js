import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import './App.css';

import Header from './Components/Header/Header';
import About from './Components/About/About';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Route path="/about" component={About} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
