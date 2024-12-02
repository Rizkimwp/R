import React from 'react';

interface BoardProps {
  board: number[][];
}

const Board: React.FC<BoardProps> = ({ board }) => {
  return (
    <div className="grid gap-1" style={{
      gridTemplateColumns: `repeat(${board[0].length}, 20px)`,
      gridTemplateRows: `repeat(${board.length}, 20px)`,
    }}>
      {board.flat().map((cell, index) => (
        <div
          key={index}
          className={`w-5 h-5 ${cell === 0 ? 'bg-white' : 'bg-success'}`}
        ></div>
      ))}
    </div>
  );
};

export default Board;
