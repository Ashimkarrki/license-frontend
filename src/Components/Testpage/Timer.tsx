import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Timer: React.FunctionComponent = () => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        return prev + 1;
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sticky top-2 mr-4  flex gap-2 border-2 justify-center flex-row rounded-xl p-2 flex-wrap">
      <div className="w-40">
        <CircularProgressbar
          strokeWidth={7}
          value={time}
          text={`${
            Math.floor(time / 60) < 10
              ? "0" + Math.floor(time / 60)
              : Math.floor(time / 60)
          }:${time % 60 < 10 ? "0" + (time % 60) : time % 60}`}
          background
          backgroundPadding={3}
          styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
      </div>
    </div>
  );
};

export default Timer;
