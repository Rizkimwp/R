import React, { useState, useEffect, useRef } from 'react';
import Board from '../components/Board';
import Scoreboard from '../components/ScodeBoard';
import { useTetris } from '../hooks/useTetris';


const StackGame: React.FC = () => {
  const { board, currentPiece, position, movePiece, resetGame, isGameOver, score } =
  useTetris();

  const renderBoard = () => {
    const tempBoard = board.map((row) => [...row]);
  
    if (currentPiece) {
      currentPiece.shape.forEach((row, y) => {
        row.forEach((cell, x) => {
          if (cell !== 0) {
            const boardX = position.x + x;
            const boardY = position.y + y;
  
            if (
              boardY >= 0 &&
              boardY < tempBoard.length &&
              boardX >= 0 &&
              boardX < tempBoard[0].length
            ) {
              tempBoard[boardY][boardX] = cell;
            }
          }
        });
      });
    }
  
    return tempBoard.map((row, y) => (
      <div key={y} className="flex">
        {row.map((cell, x) => (
          <div
            key={x}
            className={`w-6 h-6 border ${
              cell === 0
                ? 'bg-color1' // Warna kosong
                : cell === 1
                ? 'bg-color2' // Tetromino tipe 1
                : cell === 2
                ? 'bg-color3' // Tetromino tipe 2
                : cell === 3
                ? 'bg-color4' // Tetromino tipe 3
                : cell === 4
                ? 'bg-color5' // Tetromino tipe 4
                : cell === 5
                ? 'bg-color6' // Tetromino tipe 5
                : cell === 6
                ? 'bg-color7' // Tetromino tipe 6
                : 'bg-pink-500' // Tetromino tipe 7
            }`}
          ></div>
        ))}
      </div>
    ));
  };
  
  
const handleKeyDown = (e: React.KeyboardEvent) => {
  if (isGameOver) return;

  if (e.key === 'ArrowLeft') movePiece('left');
  if (e.key === 'ArrowRight') movePiece('right');
  if (e.key === 'ArrowDown') movePiece('down');
};


return (
  <div
    className="flex flex-col items-center mt-4"
    tabIndex={0}
    onKeyDown={handleKeyDown}
  >
    <h1 className="text-2xl font-bold">Tetris Game</h1>
    <div className="mt-4">{renderBoard()}</div>
    <div className="mt-4 text-lg">Score: {score}</div>
    {isGameOver && (
      <div className="mt-4 text-red-500 text-lg font-bold">Game Over!</div>
    )}
    <button
      onClick={resetGame}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
    >
      {isGameOver ? 'Restart Game' : 'Start Game'}
    </button>
  </div>
);
};

export default StackGame;
