import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const interval = useRef("");
  const [playing, setPlaying] = useState(false);

  const playOrPause = () => {
    setPlaying(!playing);
  };

  // music popup and play icon :- icon and name of song just 4 it should play pause button and rotate icon when playing
  //  timer of 3 minute with div width incresing if time increases.
  // upload to cdn or your rpi server and use it as script tag

  useEffect(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }
    if (playing) {
      const timer = setInterval(() => {
        setSecond((second) => second + 1);
        // console.log("timer running");
      }, 1000);
      interval.current = timer;
    }
  }, [playing]);

  useEffect(() => {
    if (second == 60) {
      setMinute((minute) => minute + 1);
      setSecond(0);
    }
  }, [second]);

  useEffect(() => {
    if (minute == 3) {
      setPlaying(false);
    }
  }, [minute]);

  const onRestart = () => {
    setSecond(0);
    setMinute(0);
    setPlaying(true);
  };
  return (
    <div>
      <div className="flex justify-center items-center gap-2">
        <h1>
          <span className="p-2">3</span> Min Timer
        </h1>
        <button
          className="bg-green-300 text-sm rounded-full px-3 py-1"
          onClick={playOrPause}
        >
          {!playing ? "Play" : "Pause"}
        </button>
        <button
          className="bg-orange-300 text-sm rounded-full px-3 py-1"
          onClick={onRestart}
        >
          Restart
        </button>
      </div>

      <div className="flex justify-center items-center gap-2 mt-2">
        <h1 className="text-4xl">
          {minute < 10 && "0"}
          {minute} : {second < 10 && "0"}
          {second}
        </h1>
      </div>
    </div>
  );
};

export default Timer;
