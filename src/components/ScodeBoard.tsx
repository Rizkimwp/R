import React from 'react';

interface ScoreboardProps {
  score: number;
  onReset: () => void;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ score, onReset }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Score: {score}</h1>
      <button
        onClick={onReset}
        className="mt-2 px-4 py-2 bg-success text-dark rounded"
      >
        Reset Game
      </button>
    </div>
  );
};

export default Scoreboard;
