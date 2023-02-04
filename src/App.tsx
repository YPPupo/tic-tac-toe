import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import { calculateWinner, classNames } from "./helpers";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const winner = calculateWinner(squares)

  const handleClick = (i: number) => {
    let copySquares = [...squares];

    if (copySquares[i] === "" && winner === null) {
      if (isXTurn) {
        copySquares[i] = "X";
        setSquares(copySquares);
      } else {
        copySquares[i] = "O";
        setSquares(copySquares);
      }
      setIsXTurn(!isXTurn);
    }
  };

  const handleReset = () => {
    setSquares(Array(9).fill(""));
    setIsXTurn(true);
  };

  return (
    <div className="container">
      <h1 className="title">{`My \n Tic Tac Toe \n Game`}</h1>
      <Board handleClick={handleClick} squares={squares} />
      {winner !== null ? (
        <div className="win-container">
          <span
            className={classNames(
              "message",
              winner === "draw" ? "draw-message" : "",
              winner === "X" ? "win-X" : "",
              winner === "O" ? "win-O" : ""
            )}
          >
            {winner === "draw" ? "Is draw" : `Winner is ${winner}`}
          </span>
          <button onClick={handleReset} className="reset-button">
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
