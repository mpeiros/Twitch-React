import React from 'react';

const Game = ({ gameData: { game, viewers } }) => {
  return (
    <div className="col m2">
      <div className="card hoverable">
        <div className="card-image">
          <img src={game.box.medium} alt="Game Box Art" />
        </div>
        <div className="card-content">
          <p className="truncate">{game.name}</p>
          <p className="truncate">{viewers} viewers</p>
        </div>
      </div>
    </div>
  );
};

export default Game;
