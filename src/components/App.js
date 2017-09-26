import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GameList from './GameList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route exact path="/" component={GameList} />          
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
