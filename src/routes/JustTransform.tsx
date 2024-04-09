import clsx from "clsx";
import React, { useEffect, useState } from "react";

const bounceAnimation = `@keyframes bounce {
    0% { transform: scale(1); }
    25% { transform: scale(.97); }
    35% { transform: scale(.9); }
    45% { transform: scale(1.1); }
    55% { transform: scale(.9); }
    65% { transform: scale(1.1); }
    75% { transform: scale(1.03); }
    100% { transform: scale(1); }
  }`;

const boxStyle = {
  width: "100px",
  height: "100px",
  backgroundColor: "#3498db",
  animation: `bounce 2s infinite`,
};

const JustTransform = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger slide-in animation when component mounts
    setIsVisible(true);
  }, []);

  const smallBoxStyle = {
    // animation: "slideIntoscreen 4s",
  };

  return (
    <div>
      <div className="mt-20 flex">
        <div className="rect_rotate mr-12 w-[100px] h-[100px] bg-pink-200 rounded-lg"></div>
        <div className="rect_rotate mr-12 w-[100px] h-[100px] bg-green-200 rounded-lg"></div>
        <div className="rect_rotate mr-12 w-[100px] h-[100px] bg-blue-200 rounded-lg"></div>
      </div>

      <div className="border-b border-2"></div>
      <div className="h-[500px] w-[500px] border border-red-500 p-2 relative overflow-x-hidden">
        <div
          style={smallBoxStyle}
          className={clsx([
            "h-20 w-20 border-2 border-pink-500 rounded-lg absolute pink-box",
            isVisible ? "slide-in" : "",
          ])}
        ></div>
        <div
          style={smallBoxStyle}
          className={clsx([
            "h-20 w-20 border-2 border-blue-500 rounded-lg absolute blue-box",
            isVisible ? "blue-slide-in" : "",
          ])}
        ></div>
      </div>

      <div className="border-b border-2"></div>
      <div className="flex justify-end">
        <div>
          <h1>Bouncing Effect</h1>
          <div
            style={boxStyle}
            className="text-4xl text-white flex justify-center items-center"
          >
            <span>Offer</span>
            <style>{bounceAnimation}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JustTransform;
