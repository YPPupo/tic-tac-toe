import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Winner from "./components/Winner";
import { calculateWinner } from "./helpers";

function App() {
	const [squares, setSquares] = useState(Array(9).fill(""));
	const [isXTurn, setIsXTurn] = useState(true);
	const winner = calculateWinner(squares);

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
			<div className="title-container">
				<p className="title">Tic Tac Toe</p>
			</div>
			<div className="game-container">
			<Board handleClick={handleClick} squares={squares} />
			<Winner winner={winner} handleReset={handleReset} />
			</div>
					</div>
	);
}

export default App;
