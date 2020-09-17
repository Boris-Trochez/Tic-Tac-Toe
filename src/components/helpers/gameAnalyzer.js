import React from "react";
import { useContext } from "react";
import { SquareStateContext } from "../SquareStateContext";

export const GameAnalyzer = (squares) => {
  const mark = useContext(SquareStateContext);

  const firstRow = squares.filter((square) => square.id <= 3);
  const result = firstRow.filter((square) => square.mark === "o");
  console.log(result.length);
  if (result.length === 3) {
    console.log("you win");
  }
};
export const gameAnalyzer = ({ squares, mark, id }) => {
  const firstRow = squares.filter((square) => square.id <= 3);
  const secondRow = squares.filter((square) => square.id > 3 && square.id <= 6);
  const thirdRow = squares.filter((square) => square.id > 6 && square.id <= 9);

  const firstRowResult = firstRow.filter((square) => square.mark === mark);
  const secondRowResult = secondRow.filter((square) => square.mark === mark);
  const thirdRowResult = thirdRow.filter((square) => square.mark === mark);

  //const firstColumn = squares.filter();

  return [firstRowResult, secondRowResult, thirdRowResult];
};
