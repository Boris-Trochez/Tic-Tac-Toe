const gameReducer = (state, action) => {
  const { id } = action.payload;
  const { mark } = action.payload;

  switch (action.type) {
    case "squareActivated":
      return state.map((square) =>
        square.id === id ? { ...square, activate: true, mark: mark } : square
      );
    case "win":
      return;
    case "gameOver":
      return;
    default:
      return;
  }
};

export default gameReducer;
