import React, { memo, useEffect, useState } from "react";
import classes from "./style.module.css";

const Circle = (props) => {
  const { refAnimatedBlock, refBlock, setIsShowCircle } = props;
  const currentPosition = refAnimatedBlock.current.getBoundingClientRect();
  let blockPosition = refBlock.current.getBoundingClientRect();
  const [style, setStyle] = useState({
    top: currentPosition.top + 23,
    left: currentPosition.left + 23,
  });

  const onResize = () => {
    blockPosition = refBlock.current.getBoundingClientRect();
    setStyle({
      top: blockPosition.top + 23,
      left: blockPosition.left + 23,
    });
  };

  useEffect(() => {
    setStyle({
      top: blockPosition.top + 23,
      left: blockPosition.left + 23,
    });
    window.addEventListener("resize", onResize);
    const timer = setTimeout(() => {
      setIsShowCircle(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <div className={classes.circle} style={{ ...style }} />;
};

export default memo(Circle);
