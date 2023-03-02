import React, { memo } from "react";
import classes from "./style.module.css";

const Block = (props) => {
  const { refBlock } = props;
  return (
    <div ref={refBlock} className={classes.block}>
      2
    </div>
  );
};

export default memo(Block);
