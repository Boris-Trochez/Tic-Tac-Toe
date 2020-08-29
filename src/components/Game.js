import React, { useState, useEffect } from "react";
import { useReducer } from "react";

import SquaresGrid from "./SquaresGrid";
import Information from "./Information";
import gameReducer from "./gameReducer";
import createSquares from "./helpers/createSquares";

import "./styles/Game.scss";

const Game = () => {
  const gridSquares = createSquares();
  const [squares, dispatch] = useReducer(gameReducer, gridSquares);
  const [mark, setMark] = useState("o");

  const squareActivated = (id) => {
    dispatch({
      type: "squareActivated",
      payload: {
        id,
        mark,
      },
    });
  };

  useEffect(() => {
    setMark((mark) => (mark === "o" ? "x" : "o"));
  }, [squares]);
  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe</h1>

      <div className="game__grid">
        <SquaresGrid squareActivated={squareActivated} squares={squares} />
      </div>
      <Information />
    </div>
  );
};

export default Game;
