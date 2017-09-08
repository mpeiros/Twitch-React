import React from 'react';

const Game = ({ gameData: { game, viewers } }) => {
  return (
    <div>
      <img src={game.box.medium} alt="Game Box Art" />
      <p>{game.name}</p>
      <p>{viewers}</p>
    </div>
  );
};

export default Game;
