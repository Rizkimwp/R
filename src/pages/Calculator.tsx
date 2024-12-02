import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
    setResult(null);
  };

  const calculateResult = () => {
    try {
      // Menggunakan `eval` (pastikan hanya untuk aplikasi lokal)
      const calculated = eval(input); // eslint-disable-line no-eval
      setResult(calculated);
    } catch (error) {
      alert('Invalid calculation');
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
    <div className="text-2xl">
        <h1 className='text-center mb-4'>Kalkulator</h1>
    </div>
        <div className="mb-4 text-right">
          <div className="text-xl font-mono text-gray-700">{input || '0'}</div>
          <div className="text-2xl font-bold text-gray-900">{result !== null ? `= ${result}` : ''}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
            <button
              key={btn}
              onClick={btn === '=' ? calculateResult : () => handleClick(btn)}
              className={`py-2 rounded-md font-bold ${
                btn === '='
                  ? 'bg-green-500 text-black hover:bg-success'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {btn}
            </button>
          ))}
          <button
            onClick={clearInput}
            className="col-span-4 py-2 rounded-md bg-red-500 text-black  hover:bg-navbar"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
