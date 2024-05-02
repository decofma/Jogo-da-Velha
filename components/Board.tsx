// components/Board.tsx

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { calculateWinner, findBestMove } from '../utils/gameUtils';

interface Props {
  mode: 'Player vs IA' | 'Player vs Player';
}

const Board: React.FC<Props> = ({ mode }) => {
  const router = useRouter();
  const [board, setBoard] = useState(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i: number) => {
    if (winner || board[i]) return;
    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(''));
    setXIsNext(true);
  };

  const handleReturnToMenu = () => {
    router.push('/');
  };

  useEffect(() => {
    if (mode === 'Player vs IA' && !xIsNext && !winner) {
      // IA's move
      const bestMove = findBestMove(board);
      const newBoard = [...board];
      newBoard[bestMove] = 'O';
      setBoard(newBoard);
      setXIsNext(true);
    }
  }, [board, mode, winner, xIsNext]);

  const isBoardFull = board.every(cell => cell !== '');

  return (
    <div className="board">
      <div className="status">
        {winner ? `Vencedor: ${winner}` : isBoardFull ? 'Deu Empate!' : `Próximo Jogador: ${xIsNext ? 'X' : 'O'}`}
      </div>
      <div className="board-row">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`board-cell ${board[i]}`} onClick={() => handleClick(i)}>
            {board[i]}
          </div>
        ))}
      </div>
      <div className="board-row">
        {[3, 4, 5].map((i) => (
          <div key={i} className={`board-cell ${board[i]}`} onClick={() => handleClick(i)}>
            {board[i]}
          </div>
        ))}
      </div>
      <div className="board-row">
        {[6, 7, 8].map((i) => (
          <div key={i} className={`board-cell ${board[i]}`} onClick={() => handleClick(i)}>
            {board[i]}
          </div>
        ))}
      </div>
      {(winner || isBoardFull) && (
        <div className="board-buttons">
          <button onClick={handleRestart}>Jogar Novamente</button>
          <button onClick={handleReturnToMenu}>Voltar ao Menu</button>
        </div>
      )}
    </div>
  );
};

export default Board;
