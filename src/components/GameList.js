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

  navigateToGame(gameName) {
    this.props.history.push(`/streams/${gameName}`)
  }

  renderGames() {
    return this.state.topGames.map(gameData => {
      return (
        <div 
          key={gameData.game._id}
          onClick={() => this.navigateToGame(gameData.game.name)}
        >
          <Game gameData={gameData} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="row">
        {this.renderGames()}
      </div>
    );
  }
}

export default GameList;
