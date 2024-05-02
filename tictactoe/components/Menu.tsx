import React from 'react'
import Board from './Board'

type Props = {
  setGameMode: React.Dispatch<React.SetStateAction<string>>
}

const Menu: React.FC<Props> = ({ setGameMode }) => {
  return (
    <div className="menu">
      <h1>Tic Tac Toe</h1>
      <button onClick={() => setGameMode('player-vs-player')}>Player vs Player</button>
      <button onClick={() => setGameMode('player-vs-ai')}>Player vs AI</button>
    </div>
  )
}

export default Menu