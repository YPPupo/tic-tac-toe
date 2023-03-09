import React, { useMemo} from "react";
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

  const borderClass = useMemo(() => {
    switch(position){
      case 0: 
      return "borderBottom borderRight";
      case 1: 
      return "borderBottom borderRight";
      case 2: 
      return "borderBottom"

      case 3: 
      return "borderRight"
      case 4: 
      return "borderRight"

      case 6: 
      return "borderTop borderRight"
      case 7:
      return "borderTop borderRight"
      case 8: 
      return "borderTop"
      default:
      return ""
    }
  }, [position])

  return (
    <div onClick={() => handleClick(position)} className={classNames("square",borderClass)}>
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
