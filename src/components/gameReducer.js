const gameReducer = (state, action) => {
  switch (action.type) {
    case "squareActivated":
      return state.map((square) =>
        square.id === action.payload.id
          ? { ...square, activate: true, mark: action.payload.mark }
          : square
      );
    case "win":
      return console.log("You Win!");
    case "gameOver":
      return;
    default:
      return;
  }
};

export default gameReducer;
