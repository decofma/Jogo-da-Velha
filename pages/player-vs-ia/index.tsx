// pages/player-vs-ia.tsx

import React, { useState, useEffect } from 'react';
import Board from '../../components/Board';

const PlayerVsIA: React.FC = () => {
  return (
    <div className="container-game">
      <h1>JOGADOR <i>vs</i> IA</h1>
      <Board mode="Player vs IA" />
    </div>
  );
};

export default PlayerVsIA;
