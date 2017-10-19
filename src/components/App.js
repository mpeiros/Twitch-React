import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GameList from './GameList';
import StreamList from './StreamList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={GameList} />      
            <Route exact path="/streams" component={StreamList} />      
            <Route exact path="/streams/:game" component={StreamList} />      
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
