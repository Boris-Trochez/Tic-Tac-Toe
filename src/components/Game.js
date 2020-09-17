import React, { useState, useEffect } from "react";
import { useReducer } from "react";

import SquaresGrid from "./SquaresGrid";
import Information from "./Information";
import gameReducer from "./gameReducer";
import createSquares from "./helpers/createSquares";

import "./styles/Game.scss";
import { gameAnalyzer } from "./helpers/gameAnalyzer";
import { SquareStateContext } from "./SquareStateContext";

const Game = () => {
  const gridSquares = createSquares();
  const [squares, dispatch] = useReducer(gameReducer, gridSquares);
  const [mark, setMark] = useState("o");
  const [id, setId] = useState();

  const squareActivated = (id) => {
    setId(id);
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
    const result = gameAnalyzer({ squares, mark, id });

    for (let item of result) {
      if (item.length === 3) {
        console.log("Winner");
      }
    }
  }, [squares]);

  return (
    <SquareStateContext.Provider value={mark}>
      <div className="container">
        <h1 className="title">Tic Tac Toe</h1>

        <div className="game__grid">
          <SquaresGrid squareActivated={squareActivated} squares={squares} />
        </div>
        <Information />
      </div>
    </SquareStateContext.Provider>
  );
};

export default Game;
