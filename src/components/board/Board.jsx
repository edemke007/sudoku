import PropTypes from 'prop-types';
import BoardCell from './board-cell/BoardCell';
import React, { useEffect, useState } from 'react';

const Board = ({boardWidth, boardValue, setBoardValue, initialState}) => {
    
    const [savedBoard, setSavedBoard] = useState(initialState);

    useEffect(() => {
        const savedBoardValue = localStorage.getItem('sudokuStartingSet');
    
        if(savedBoardValue !== null) {
            setSavedBoard(JSON.parse(savedBoardValue));
        }
    },[]);

    return (
        <table>
            <tbody className="border border-collapse">
            {[...Array(boardWidth).keys()].map((row, rowIndex) => (
            <tr
                className="border border-collapse"
                key={rowIndex}
            >
                {[...Array(boardWidth).keys()].map((col, colIndex) => (
                <BoardCell
                    key={colIndex + rowIndex}
                    id={colIndex + rowIndex}
                    col={col}
                    row={row}
                    boardValue={boardValue}
                    setBoardValue={setBoardValue}
                    disabled={boardValue[row][col] !== 0}
                    value={boardValue[row][col] === 0 ? '' : boardValue[row][col]}
                    isCalculated={savedBoard[row][col] === 0 && boardValue[row][col] !== 0 }
                />
                ))}
            </tr>
            ))}
        </tbody>
      </table>
    );
};

Board.propTypes = {
    boardWidth: PropTypes.number,
    boardValue: PropTypes.array,
    setBoardValue: PropTypes.func,
    initialState: PropTypes.array,
};

export default Board;