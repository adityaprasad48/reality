import { useState, useRef } from "react";

const Touch = () => {
  const [log, setLog] = useState("");
  // hold for 3 sec first item would change to Great by rotating list vertically
  const timer = useRef<any>(null);
  const [timeUp, setTimeUP] = useState(false);
  
  const touchStart = () => {
    setLog("Touched");
    timer.current = setTimeout(() => {
      setTimeUP(true);
    }, 3000)
  };
  
  const touchEnd = () => {
    setLog("Touch Out");
    if(timeUp) setLog('Waited for 3 secs...')
    setTimeUP(false);
    clearTimeout(timer.current);
  };

  const touchMove = () => {
    setLog('Touch Move')
  }

  // not able to did if I hold the touch event context menue gets open.
  // I did testing in mobile

  return (
    <div className="m-4 select-none">
      <h1 className="text-2xl text-gray-500 my-2 text-center">Touch Page</h1>
      <ul className="bg-white-100 m-2">
        {/* <li
          className="py-2 px-3 text-xl mb-2 rounded-md bg-gray-100  z-10"
          onTouchStart={touchStart}
          onTouchEnd={touchEnd}
        >
          <div className="relative  text-gray-500 bg-gray-100">
            Learn
            <div className="absolute top-0 left-0 bg-green-200 h-[100%] w-[100%] z-9"></div>
          </div>
        </li> */}
        <li
          className="py-2 px-3 text-xl text-gray-500 mb-2 rounded-md bg-gray-100"
          onTouchMove={touchMove}
        >
          Apply
        </li>
        <li className="py-2 px-3 text-xl text-gray-500 mb-2 rounded-md bg-gray-100">
          Practice
        </li>
      </ul>

      <p className="text-xs text-right">
        <strong>Note:</strong> This example is for touch devices only.
      </p>

      <div className="h-0.5 w-[100%] bg-pink-400 my-2"></div>
      <p id="demo">{log}</p>
    </div>
  );
};

export default Touch;
