import React from "react";

const JustTransform = () => {
  return (
    <div>
      <h1>Transformation</h1>

      <div className="mt-20 flex">
        <div className="rect_rotate mr-12 w-[100px] h-[100px] bg-pink-200 rounded-lg"></div>
        <div className="rect_rotate mr-12 w-[100px] h-[100px] bg-green-200 rounded-lg"></div>
        <div className="rect_rotate mr-12 w-[100px] h-[100px] bg-blue-200 rounded-lg"></div>
      </div>
    </div>
  );
};

export default JustTransform;
