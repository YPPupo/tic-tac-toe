import React from "react";
import Square from "../Square";
import "./styles.css";

export default function Board({
  squares,
  handleClick,
}: {
  squares: string[];
  handleClick: (i: number) => void;
}) {
  return (
    <div className="board">
      {squares.map((square: string, i: number) => {
        return (
          <Square
            key={i}
            value={square}
            position={i}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}
