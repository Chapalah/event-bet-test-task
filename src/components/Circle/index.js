import React, {
  memo,
  useLayoutEffect,
} from "react";
import classes from "./style.module.css";

const Circle = (props) => {
  const { refAnimatedBlock, setIsShowCircle } = props;
  const startPosition = refAnimatedBlock.current.getBoundingClientRect();
  const style = {
    top: startPosition.top + 23,
    left: startPosition.left + 23,
  };

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setIsShowCircle(false);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div className={classes.circle} style={style} />;
};

export default memo(Circle);
