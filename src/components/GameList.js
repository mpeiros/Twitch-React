import React, { Component } from 'react';
import axios from 'axios';
import Game from './Game';

class GameList extends Component {
  state = {
    topGames: []
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/games/top')
      .then(response => this.setState({ topGames: response.data.top }));
  }

  renderGames() {
    return this.state.topGames.map(gameData => {
      return <Game key={gameData.game._id} gameData={gameData} />;
    });
  }

  render() {
    return (
      <div>
        {this.renderGames()}
      </div>
    );
  }
}

export default GameList;
