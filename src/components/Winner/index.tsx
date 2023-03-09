import React from 'react'
import { classNames } from '../../helpers'
import "./styles.css"

export default function Winner({winner,handleReset}:{winner: string | null; handleReset: () => void}) {
  return (
    <div>
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
  )
}
