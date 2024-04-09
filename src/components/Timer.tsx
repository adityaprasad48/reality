import React, { useContext, useEffect, useState } from "react";
import DragMove from "./DragMove";
import { useScreenPopCtx } from "../ctx/ScreenPopProvider";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [typeMin, setTypedMin] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [isTimer, setIsTimer] = useState(false);
  const screenPopCtx = useScreenPopCtx();

  useEffect(() => {
    let intervalId: any;

    if (isRunning) {
      console.log(isTimer && time >= typeMin * 60, time);
      if (isTimer && time == typeMin * 60) {
        clearInterval(intervalId);
      } else {
        intervalId = setInterval(() => {
          setTime((prevTime) => prevTime + 1); // Increment time every second
        }, 1000);
      }
    } else {
      clearInterval(intervalId); // Clear interval when stopwatch stops
    }

    // Cleanup: clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, [isRunning, typeMin, time]);

  const handleIsTimer = () => {
    setIsTimer((timer) => !timer);
    setTime(0);
    setIsRunning(false);
  };

  const startOrStop = () => {
    if (!isRunning) {
      setIsRunning(true);
    } else {
      setIsRunning(false);
    }
  };

  const resetStopwatch = () => {
    setTime(0);
    setIsRunning(false);
  };

  const minInc = () => {
    setTypedMin((m) => m + 1);
  };

  const minDec = () => {
    typeMin > 0 && setTypedMin((m) => m - 1);
  };

  const mzeTimer = () => {
    screenPopCtx.setScreenPop((s: any) => {
      return { ...s, timer: false };
    });
  };

  const [translate, setTranslate] = useState({
    x: 30,
    y: 500,
  });

  const handleDragMove = (e: MouseEvent) => {
    console.log("moving");
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    });
  };

  // console.log(translate.x, translate.y);

  const style: React.CSSProperties = {
    position: "absolute",
    // bottom: "20px",
    transform: `translate(${translate.x}px, ${translate.y}px)`,
  };

  // Calculate minutes and seconds
  let minutes, seconds, remainingTime;

  if (!isTimer) {
    minutes = Math.floor(time / 60);
    seconds = time % 60;
  } else {
    remainingTime = typeMin * 60 - time; // 4 minutes = 240 seconds
    minutes = Math.floor(remainingTime / 60);
    seconds = remainingTime % 60;
  }

  const styles: React.CSSProperties = {
    strokeDasharray: (remainingTime / (typeMin * 60)) * 609 + "px",
    height: "200px",
    width: "200px",

    fill: "black",

    strokeWidth: "8px",
    borderRadius: "50%",
    pointerEvents: "none",
    transform: "rotate(90deg) scaleX(-1)",
  };

  return screenPopCtx?.screenPop.timer ? (
    <DragMove className="" isSvg={false} onDragMove={handleDragMove}>
      <div
        className="cursor-move top-[200px] rounded-lg w-[200px] h-[200px] flex justify-center items-center z-50 select-none"
        style={style}
      >
        <div>
          <div className="absolute top-0 left-0">
            <svg style={styles} className="shadow-blue-500 shadow-lg">
              <defs>
                <linearGradient id="gradient">
                  <stop offset="0%" stopColor="rgb(0, 196, 204)" />
                  <stop offset="100%" stopColor="rgb(125, 42, 232)" />
                </linearGradient>
              </defs>
              <circle
                r="96"
                cx="100"
                cy="100"
                strokeDashoffset="5.715836999976091"
                stroke="url(#gradient)"
                fill="none"
                strokeWidth="8"
              />
            </svg>
          </div>
          <div className="relative">
            <div className="flex flex-col  items-center gap-2">
              {isTimer && (
                <div>
                  <div className="flex items-center gap-2 select-none">
                    <button
                      className="border-2 border-gray-300 cursor-pointer p-1 rounded-md"
                      onClick={minInc}
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Add Min"
                    >
                      <PlusIcon />
                    </button>
                    <span>{typeMin}</span>
                    <button
                      className="border-2 border-gray-300 cursor-pointer p-1 rounded-md"
                      onClick={minDec}
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Minus Min"
                    >
                      <MinusIcon />
                    </button>
                  </div>
                </div>
              )}

              <div className="flex justify-center items-center gap-2 ">
                <h1 className="text-4xl">
                  {String(minutes).padStart(2, "0")} :{" "}
                  {String(seconds).padStart(2, "0")}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="bg-green-300 text-sm rounded-full p-1"
                  onClick={startOrStop}
                >
                  {!isRunning ? <PlayIcon /> : <PauseIcon />}
                </button>
                <button
                  className="bg-orange-300 text-sm rounded-full p-1"
                  onClick={resetStopwatch}
                >
                  <RestartIcon />
                </button>
              </div>
            </div>
            {/* <div className="bg-yellow-100 rounded-full w-[100%] h-[20px] mt-2">
              <div
                style={widthStyle}
                className="rounded-full bg-green-500 h-[100%]"
              ></div>
            </div> */}
          </div>
          <div className="absolute -top-[50px]  cursor-pointer shadow-lg bg-blue-100 p-1 rounded-full flex gap-2 items-center">
            <button
              onClick={handleIsTimer}
              className="rounded-full p-1 hover:bg-blue-400"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={isTimer ? "Start Timer" : "Start Watch"}
            >
              {isTimer ? "Timer" : "Watch"}
            </button>
            <button
              onClick={mzeTimer}
              className="p-1 rounded-full hover:bg-blue-400"
            >
              <CrossIcon />
            </button>
          </div>
        </div>
      </div>
    </DragMove>
  ) : null;
};

export default Timer;

const MinusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
    </svg>
  );
};

const CrossIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  );
};

const PlayIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-8 h-8"
    >
      <path
        fillRule="evenodd"
        d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const PauseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-8 h-8"
    >
      <path
        fillRule="evenodd"
        d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm5-2.25A.75.75 0 0 1 7.75 7h.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75v-4.5Zm4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75v-4.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const RestartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-8 h-8"
    >
      <path
        fillRule="evenodd"
        d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
