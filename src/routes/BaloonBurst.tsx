// const ThrowBall = () => {
//   return (
//     <div className="w-[80%] m-auto">
//       {/* Box where ball and holes are there */}
//       <div className="w-[700px] h-[700px] rounded-md border-2 border-blue-300 border-dotted relative">
//         <div className="holes absolute top-0 left-[10%] h-[10px] w-[200px] bg-green-400 shadow-lg"></div>
//         <div className="holes absolute top-0 left-[60%] h-[10px] w-[200px] bg-pink-400 shadow-lg"></div>

//         <div className="ball absolute bottom-0 right-[50%] h-[100px] w-[100px] rounded-full bg-orange-300"></div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

// const Ball = () => {
//   const [pos, setPos] = useState({ left: 0, top: 0 });
//   const v = 100; // initial velocity in pixels/sec
//   const g = 500; // acceleration due to gravity in pixels/sec^2
//   const containerHeight = 500; // height of container in pixels

//   // useEffect(() => {
//   //   const startTime = Date.now();
//   //   const intervalId = setInterval(() => {
//   //     const t = (Date.now() - startTime) / 1000; // time in seconds
//   //     const left = v * t;
//   //     const top = containerHeight - (v * t - 0.5 * g * t * t);
//   //     setPos({ left, top });
//   //     if (top < 0) clearInterval(intervalId);
//   //   }, 1000 / 60); // update 60 times per second

//   //   return () => clearInterval(intervalId);
//   // }, [v, g, containerHeight]);

//   return (
//     <div className="w-[80%] m-auto">
//       <div className="w-[700px] h-[700px] rounded-md border-2 border-blue-300 border-dotted relative">
//         <div style={{ position: "absolute", left: pos.left, top: pos.top }}>
//           🏀
//         </div>
//       </div>
//     </div>
//   );
// };

// import "./SlingShot.css"; // Import CSS file for styling

const BaloonBurst = () => {
  const [ballPosition, setBallPosition] = useState({ x: 320, y: 635 });

  const launchBall = () => {
    const randomAngle = (Math.random() * Math.PI) / 4 + Math.PI / 4; // Random angle between π/4 and π/2
    const initialSpeed = 10; // Initial speed of the ball
    const dx = Math.cos(randomAngle) * initialSpeed;
    const dy = -Math.sin(randomAngle) * initialSpeed; // Negative because y-coordinates increase downward
    const timeStep = 30; // Time step for animation

    const moveBall = setInterval(() => {
      setBallPosition((prevPosition) => ({
        x: prevPosition.x + dx,
        y: prevPosition.y + dy,
      }));
    }, timeStep);

    // Stop the ball when it reaches the top of the box
    setTimeout(() => {
      clearInterval(moveBall);
      setBallPosition({ x: 320, y: 635 }); // Reset ball position
    }, 3000); // Adjust the time according to the height of the box
  };

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const angleDeg = angle * (180 / Math.PI); // Convert radians to degrees
    setCursorPos({ x: e.clientX, y: e.clientY, angleDeg });
  };

  const fruits = [
    ["🍎", 10],
    ["🍇", 8],
    ["🌽", 7],
    ["🥭", 9],
    ["🍉", 6],
    ["🍎", 5],
    ["🥭", 9],
    ["🍇", 3],
    ["🍉", 6],
    ["🌽", 7],
  ];

  // mix them all and how to delete all fruits which attached to that tree

  // divide them into more than 9 show it would look collective

  const clickedFruit = (ficon, index) => {
    console.log({ ficon, index });
  };

  return (
    <div className="w-[80%]  mx-auto mt-[100px]">
      <div
        className="mx-auto items-center w-[700px] h-[700px] rounded-md border-4 border-blue-300 border-dotted relative overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <div className="fruits flex flex-wrap gap-2">
          {fruits.map(([emoji, quantity], index) =>
            Array.from({ length: quantity }, (_, index) => (
              <div
                className="text-4xl select-none cursor-pointer z-50"
                key={index}
              >
                {emoji}
              </div>
            ))
          )}
        </div>
        <div
          className="text-6xl absolute select-none cursor-pointer z-50"
          style={{
            left: ballPosition.x,
            top: ballPosition.y,
            transform: `rotate(${cursorPos.angleDeg}deg)`,
          }}
          onClick={launchBall}
        >
          ⚽️
        </div>
      </div>
    </div>
  );
};


export default BaloonBurst;
