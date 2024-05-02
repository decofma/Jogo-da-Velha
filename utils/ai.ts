type Move = {
    index: number;
    score: number;
  };
  
  const aiMove = (board: string[]): number => {
    const availableMoves = board.reduce((acc: number[], cell, index) => {
      if (cell === null) {
        acc.push(index);
      }
      return acc;
    }, []);
  
    const scores = availableMoves.map((move) => {
      const newBoard = [...board];
      newBoard[move] = 'o';
      const score = minimax(newBoard, false);
      return score;
    });
  
    const bestScore = Math.max(...scores);
    const bestMoves = scores.reduce(
      (acc: Move[], score, index) =>
        score === bestScore ? [...acc, { index, score }] : acc,
      []
    );
  
    const move =
      bestMoves.length > 0
        ? bestMoves[Math.floor(Math.random() * bestMoves.length)].index
        : availableMoves[0];
  
    return move;
  };
  
  const minimax = (board: string[], isMaximizing: boolean): number => {
    const availableMoves = board.reduce((acc: number[], cell, index) => {
      if (cell === null) {
        acc.push(index);
      }
      return acc;
    }, []);
  
    if (checkWin(board, 'x')) {
      return -1;
    }
  
    if (checkWin(board, 'o')) {
      return 1;
    }
  
    if (availableMoves.length === 0) {
      return 0;
    }
  
    if (isMaximizing) {
      let bestScore = -Infinity;
      availableMoves.forEach((move) => {
        const newBoard = [...board];
        newBoard[move] = 'o';
        const score = minimax(newBoard, false);
        bestScore = Math.max(score, bestScore);
      });
      return bestScore;
    } else {
      let bestScore = Infinity;
      availableMoves.forEach((move) => {
        const newBoard = [...board];
        newBoard[move] = 'x';
        const score = minimax(newBoard, true);
        bestScore = Math.min(score, bestScore);
      });
      return bestScore;
    }
  };
  
  const checkWin = (board: string[], player: string) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] === player && board[b] === player && board[c] === player) {
        return true;
      }
    }
  
    return false;
  };
  
  export default aiMove;