import GameState from "./GameState";

function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return <div className="game-over"><b>O Wins</b></div>;
    case GameState.playerXWins:
      return <div className="game-over"><b>X Wins</b></div>;
    case GameState.draw:
      return <div className="game-over"><b>Draw</b></div>;
    default:
      return <></>;
  }
}

export default GameOver;
