// pages/player-vs-player.tsx

import React from 'react';
import Board from '../../components/Board';

const PlayerVsPlayer: React.FC = () => {
  return (
    <div className="container-game">
      <h1>JOGADOR 1 <i>vs</i> JOGADOR 2</h1>
      <Board mode="Player vs Player" />
    </div>
  );
};

export default PlayerVsPlayer;
