import React, { memo } from "react";
import classes from "./style.module.css";

const Button = (props) => {
  const { isActive, counter, setTimer, setIsShowCircle } = props;

  const handleClick = () => {
    setTimer((prev) => ({ ...prev, isActive: true }));
    setIsShowCircle(true);
  };

  return (
    <button
      className={classes.button}
      disabled={isActive}
      onClick={handleClick}
    >
      {isActive ? counter : "Start"}
    </button>
  );
};

export default memo(Button);
