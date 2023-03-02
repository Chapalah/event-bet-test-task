import React, { memo } from "react";
import classes from "./style.module.css";

const AnimatedBlock = (props) => {
  const { refAnimatedBlock } = props;
  return (
    <div ref={refAnimatedBlock} className={classes.block}>
      1
    </div>
  );
};

export default memo(AnimatedBlock);
