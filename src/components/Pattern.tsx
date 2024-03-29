import React, { useState } from "react";

const Dot = ({ x, y, radius, active, onClick }: any) => {
  return (
    <circle
      cx={x}
      cy={y}
      r={radius}
      fill={active ? "blue" : "gray"}
      onClick={onClick}
    />
  );
};

const Line = ({ x1, y1, x2, y2 }: any) => {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="blue" strokeWidth="3" />;
};

const PatternLock = () => {
  const [points, setPoints] = useState([
    { x: 90 * 1, y: 20 },
    { x: 90 * 2, y: 20 },
    { x: 90 * 3, y: 20 },

    { x: 90 * 1, y: 60 },
    { x: 90 * 2, y: 60 },
    { x: 90 * 3, y: 60 },

    { x: 90 * 1, y: 100 },
    { x: 90 * 2, y: 100 },
    { x: 90 * 3, y: 100 },
  ]);
  const [lines, setLines] = useState([]);

  const handleDotClick = (x: number, y: number) => {
    setPoints([...points, { x, y }]);
    if (points.length > 0) {
      const lastPoint = points[points.length - 1];
      setLines([...lines, { x1: lastPoint.x, y1: lastPoint.y, x2: x, y2: y }]);
    }
  };

  const handleReset = () => {
    setPoints([]);
    setLines([]);
  };

  return (
    <div className="flex justify-center mt-10">
      {/* <svg width="300" height="600">
        {points.map((point: any, index) => (
          <Dot
            key={index}
            x={point.x}
            y={point.y}
            radius={20}
            active={index === points.length - 1}
            onMouseOver={() => handleDotClick(point.x, point.y)}
          />
        ))}
        {lines.map((line: any, index) => (
          <Line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
          />
        ))}
      </svg> */}

      

     
    </div>
  );
};

export default PatternLock;
