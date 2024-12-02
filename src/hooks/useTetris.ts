import { useState, useEffect } from 'react';
import { Tetromino, Tetrominoes } from '../types/TetromiboShape';

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

const createEmptyBoard = (): number[][] =>
  Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(0));

export const useTetris = () => {
  const [board, setBoard] = useState(createEmptyBoard());
  const [currentPiece, setCurrentPiece] = useState<Tetromino | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const spawnPiece = () => {
    const tetrominoes = Object.values(Tetrominoes);
    const randomPiece =
      tetrominoes[Math.floor(Math.random() * tetrominoes.length)];
    setCurrentPiece(randomPiece);
    setPosition({ x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 });
  };

  const checkCollision = (piece: Tetromino, pos: { x: number; y: number }) => {
    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (piece.shape[y][x] !== 0) {
          const boardX = pos.x + x;
          const boardY = pos.y + y;

          if (
            boardY >= BOARD_HEIGHT || // Tabrak bagian bawah
            boardX < 0 || // Tabrak sisi kiri
            boardX >= BOARD_WIDTH || // Tabrak sisi kanan
            board[boardY]?.[boardX] !== 0 // Tabrak blok lain
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };

  const mergePieceToBoard = () => {
    const newBoard = [...board];
    currentPiece?.shape.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell !== 0) {
          newBoard[position.y + y][position.x + x] = cell;
        }
      });
    });
    setBoard(newBoard);
  };

  const clearLines = () => {
    const newBoard = board.filter((row) => row.some((cell) => cell === 0));
    const clearedLines = BOARD_HEIGHT - newBoard.length;
    setScore((prev) => prev + clearedLines * 100);

    // Tambahkan baris kosong di atas
    while (newBoard.length < BOARD_HEIGHT) {
      newBoard.unshift(Array(BOARD_WIDTH).fill(0));
    }
    setBoard(newBoard);
  };

  const movePiece = (dir: 'left' | 'right' | 'down') => {
    const newPos = {
      x: dir === 'left' ? position.x - 1 : dir === 'right' ? position.x + 1 : position.x,
      y: dir === 'down' ? position.y + 1 : position.y,
    };

    if (!checkCollision(currentPiece!, newPos)) {
      setPosition(newPos);
    } else if (dir === 'down') {
      if (position.y === 0) {
        setIsGameOver(true); // Game Over jika tabrakan di atas
      } else {
        mergePieceToBoard();
        clearLines();
        spawnPiece();
      }
    }
  };

  const resetGame = () => {
    setBoard(createEmptyBoard());
    setScore(0);
    setIsGameOver(false);
    spawnPiece();
  };

  // Logika jatuh otomatis
  useEffect(() => {
    if (isGameOver) return;

    const interval = setInterval(() => {
      movePiece('down');
    }, 1000); // Tetromino jatuh setiap 1 detik

    return () => clearInterval(interval);
  }, [isGameOver, movePiece]);

  useEffect(() => {
    if (!currentPiece) spawnPiece();
  }, [currentPiece]);

  return { board, currentPiece, position, score, movePiece, resetGame, isGameOver };
};
