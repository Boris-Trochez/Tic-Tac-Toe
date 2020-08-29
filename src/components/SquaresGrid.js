import React from "react";

import Mark from "./Mark";

import "./styles/Square.scss";

const SquaresGrid = ({ squareActivated, squares }) => {
  return (
    <>
      {squares.map((square) => {
        return (
          <button
            type="button"
            key={square.id}
            className="game__square"
            onClick={() => squareActivated(square.id)}
          >
            {square.activate && <Mark mark={square.mark} />}
          </button>
        );
      })}
    </>
  );
};

export default SquaresGrid;
