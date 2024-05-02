// pages/index.tsx

import React from 'react';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const router = useRouter();

  const handlePlayerVsIA = () => {
    router.push('/player-vs-ia');
  };

  const handlePlayerVsPlayer = () => {
    router.push('/player-vs-player');
  };

  return (
    <div className="container">
      <h1>JOGO DA VELHA</h1>
      <div className="board">
        <div>
          <button onClick={handlePlayerVsIA}>Jogador vs IA</button>
        </div>
        <div>
          <button onClick={handlePlayerVsPlayer}>Jogador 1 vs Jogador 2</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
