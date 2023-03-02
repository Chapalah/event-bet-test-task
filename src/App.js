import { useEffect, useState, useRef } from "react";
import { AnimatedBlock, Block, Button, Circle } from "./components";
import "./App.css";

const App = () => {
  const refBlock = useRef(null);
  const refAnimatedBlock = useRef(null);
  const [isShowCircle, setIsShowCircle] = useState(false);
  const [timer, setTimer] = useState({
    isActive: false,
    duration: 5,
    counter: 5,
  });

  useEffect(() => {
    if (timer.isActive) {
      const interval = setInterval(() => {
        setTimer((prev) => ({ ...prev, counter: prev.counter - 1 }));
      }, 1000);

      if (timer.counter === 0) {
        setTimer((prev) => ({
          ...prev,
          counter: prev.duration,
          isActive: false,
        }));
        clearInterval(interval);
      }

      return () => {
        clearInterval(interval);
      };
    }
  }, [timer]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="row">
          <AnimatedBlock
            refAnimatedBlock={refAnimatedBlock}
            isActiveTimer={timer.isActive}
          />

          {isShowCircle && (
            <Circle
              refAnimatedBlock={refAnimatedBlock}
              refBlock={refBlock}
              setIsShowCircle={setIsShowCircle}
            />
          )}

          <Block refBlock={refBlock} />
        </div>
        <Button {...timer} setTimer={setTimer} setIsShowCircle={setIsShowCircle} />
      </div>
    </div>
  );
};

export default App;
