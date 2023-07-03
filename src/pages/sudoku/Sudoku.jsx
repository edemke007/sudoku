import solve from "@mattflow/sudoku-solver";
import React, { useEffect, useState } from "react";
import Board from "../../components/board/Board";

const BOARD_WIDTH = 9;
const INITIAL_STATE = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const Sudoku = () => {
  const [boardValue, setBoardValue] = useState(INITIAL_STATE);
  const [error, setError] = useState('');

  useEffect(() => {
    const savedValue = localStorage.getItem('sudokuStartingSet');

    if(savedValue !== null) {
      setBoardValue(JSON.parse(savedValue));
    }
  
  },[]);

  const handleSolve = () => {

    const boardValueString = boardValue.map(array => array.join(''));

    try {
      const solvedBoard = [];
      const solved = solve(boardValueString.join(''));

      for (let i=0; i<9; i++) {
        solvedBoard.push([...solved.slice(i*9,(i*9)+9)].map(Number));
      }

      setBoardValue(solvedBoard);

      setError('');

    } catch(e) {
      setError(e.message);
    }
  };

  const handleReset = () => {
    setBoardValue(INITIAL_STATE);
    setError('');
  };

  return (
    <div className="flex justify-center items-center h-4/5">
      <div>
        <div className="flex justify-center pb-8">
          <Board boardWidth={BOARD_WIDTH} boardValue={boardValue} setBoardValue={setBoardValue} initialState={INITIAL_STATE}/>
        </div>
        <div className="flex justify-around">
          <button
            className="bg-white hover:bg-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded"
            onClick={() => handleSolve()}
          >
            Solve
          </button>
          <button
            className="bg-white hover:bg-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded"
            onClick={() => handleReset()}
          >
            Reset
          </button>
        </div>
        <div className={`h-10 p-2 m-10 text-red-600 ${ error ? 'border rounded border-red-600' : ''}`}>{error}</div>
      </div>
    </div>
  );
};

export default Sudoku;
