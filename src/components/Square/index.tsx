import React from "react";
import { classNames } from "../../helpers";
import "./styles.css";

export default function Square({
  value,
  position,
  handleClick,
}: {
  value: string;
  position: number;
  handleClick: (i: number) => void;
}) {
  return (
    <div onClick={() => handleClick(position)} className="square">
      <span
        className={classNames(
          "value",
          value === null || value === "X" ? "isX" : "isO"
        )}
      >
        {value}
      </span>
    </div>
  );
}
