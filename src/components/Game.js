import React from 'react';

const Game = ({ gameData }) => {
  return (
    <div>
      <img src={gameData.game.box.medium} alt="Game Box Art"/>
      <p>{gameData.game.name}</p>
      <p>{gameData.viewers}</p>
    </div>
  );
};

export default Game;
