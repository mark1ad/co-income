import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import './App.css';

import Header from './Components/Header/Header';
import About from './Components/About/About';
import ShowByYear from './Components/ByYear/ShowByYear';
import ShowByCounty from './Components/ByCounty/ShowByCounty';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={ShowByCounty} />
          <Route path="/about" component={About} />
          <Route path="/byyear" component={ShowByYear} />
          <Route path="/byCounty" component={ShowByCounty} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
