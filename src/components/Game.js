import React from "react";

import Box from "./Box";
import Information from "./Information";

import "./styles/Game.scss";

const Game = () => (
  <div className="container">
    <h1 className="title">Tic Tac Toe</h1>
    <div className="game__screen">
      <Box />
    </div>
    <Information />
  </div>
);

export default Game;
