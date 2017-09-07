import React, { Component } from 'react';
import axios from 'axios';

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
      return (
        <div key={gameData.game._id}>
          <img src={gameData.game.box.medium} alt="Game Box Art"/>
          <p>{gameData.game.name}</p>
          <p>{gameData.viewers}</p>
        </div>
      );
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
