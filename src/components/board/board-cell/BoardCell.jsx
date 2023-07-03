import React, { useState } from 'react';
import PropTypes from "prop-types";

const BoardCell = ({
  col,
  row,
  boardValue,
  setBoardValue,
  isCalculated
}) => {

  const [isManuallyAdded, setIsManuallyAdded] = useState(false);

  const handleInputChange = (e, row, col) => {
    e.preventDefault();

    const value = parseInt(e.target.value) || 0;
    const grid = JSON.parse(JSON.stringify(boardValue));

    if (value === 0 || (value >= 1 && value <= 9)) grid[row][col] = value;

    setBoardValue(grid);
    setIsManuallyAdded(true);

    localStorage.setItem('sudokuStartingSet', JSON.stringify(grid))
  };

  return (
    <td className='border border-collapse'>
      <input
        disabled={boardValue[row][col] !== 0}
        onChange={(e) => handleInputChange(e, row, col)}
        value={boardValue[row][col] === 0 ? '' : boardValue[row][col]}
        className={`text-center lg:w-14 lg:h-14 md:w-10 md:h-10 w-8 h-8 ${
          isCalculated && isManuallyAdded ? "bg-blue-200" : "bg-white"
        }`}
      ></input>
    </td>
  );
};

BoardCell.propTypes = {
  col: PropTypes.number,
  row: PropTypes.number,
  boardValue: PropTypes.array,
  setBoardValue: PropTypes.func,
  isCalculated: PropTypes.bool,
};

export default BoardCell;
