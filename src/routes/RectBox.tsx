import React, { useEffect, useRef, useState } from "react";
import { getBoundingRect } from "../utils";

// keep it oragnized use react router  and github
interface Position {
  x: number;
  y: number;
}

const defaultPosition: Position = {
  x: NaN,
  y: NaN,
};

function RectBox() {
  const rectRef = useRef(null);
  const [click, setClick] = useState(defaultPosition);
  const [move, setMove] = useState(defaultPosition);
  const [elements, setElements] = useState<{type: string, style: React.CSSProperties}[]>([]);
  const imageFile = useRef<HTMLInputElement>(null);

  const rectStyle = {
    left: `${Math.min(move.x, click.x)}px`,
    top: `${Math.min(move.y, click.y)}px`,
    height: `${Math.abs(move.y - click.y)}px`,
    width: `${Math.abs(move.x - click.x)}px`,
  };

  function storeClick(e: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = e;
    const { left, top } = getBoundingRect(document?.getElementById("box"));
    const mx = clientX - left;
    const my = clientY - top;
    setClick((s) => ({ ...s, x: mx, y: my }));
  }

  function storeMove(e: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = e;
    const { left, top } = getBoundingRect(document?.getElementById("box"));
    const mx = clientX - left;
    const my = clientY - top;
    setMove((s) => ({ ...s, x: mx, y: my }));
  }

  const mouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    storeClick(e);
  };

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    storeMove(e);
  };

  const mouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    const height = Math.abs(move.y - click.y);
    const width = Math.abs(move.x - click.x);
    const rectStyle = {
      left: `${Math.min(move.x, click.x)}px`,
      top: `${Math.min(move.y, click.y)}px`,
      height: `${Math.abs(move.y - click.y)}px`,
      width: `${Math.abs(move.x - click.x)}px`,
    };
    const elmentType = "div";
    if (height && width) {
      setElements([
        ...elements,
        {
          type: elmentType,
          style: rectStyle,
        },
      ]);
    }
    setClick(defaultPosition);
  };

  function getContext() {
    const canvas = document.getElementById("canvas");
    if (!canvas) {
      return Error("Canvas Not found!!");
    }
    const ctx = canvas.getContext("2d");
    return ctx;
  }

  useEffect(() => {
    const ctx = getContext();
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 500, 500);
  }, []);

  const drawLine = () => {
    const ctx = getContext();
    // Draw a line between the two points
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(200, 300);
    ctx.stroke();
  };

  const drawRectangle = () => {
    const width = 300;
    const height = 200;
    const ctx = getContext();
    ctx.beginPath();
    ctx.moveTo(50, 50);

    ctx.lineTo(width, 50);
    ctx.lineTo(width, height);
    ctx.lineTo(50, height);
    ctx.lineTo(50, 50);

    ctx.fillStyle = "#eab308";
    ctx.fill();
  };

  function drawImageFromInput(e: any) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const img = new Image();
        img.onload = function () {
          // canvas.width = img.width;
          // canvas.height = img.height;
          ctx.drawImage(img, 0, 0, 500, 500);
        };
        img.src = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }

  function drawRotatedRect(ctx, x, y, width, height, angle, color) {
    ctx.save(); // Save the current transformation state

    // Translate to the center of the rectangle or just got to that point
    ctx.translate(x + width / 2, y + height / 2);

    // Rotate the context by the specified angle (in radians)
    ctx.rotate(angle);

    // Draw the rectangle (centered at 0, 0)
    ctx.fillStyle = color;
    ctx.fillRect(-width / 2, -height / 2, width, height);

    ctx.restore(); // Restore the transformation state
  }
  const drawShape = () => {
    // ctx.beginPath();
    // ctx.moveTo(50, 50);

    // ctx.lineTo(50, 100);
    // ctx.lineTo(100, 30);
    // ctx.lineTo(30, 100);

    // ctx.fillStyle = "pink";

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const width = 100;
    const height = 50;
    const angleDegrees = 45; // Angle in degrees

    // Convert degrees to radians
    const angleRadians = angleDegrees * (Math.PI / 180);

    drawRotatedRect(ctx, centerX, centerY, width, height, angleRadians, "blue");
  };

  const drawText = () => {
    const ctx = getContext();
    ctx.font = "36px Impact";
    ctx.fillStyle = "white";
    ctx.textAlign = "left";

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2; // Adjust outline thickness as needed
    ctx.strokeText("Canvas Memes", 100, 100);

    ctx.fillText("Canvas Memes", 100, 100);
  };

  const saveCanvas = () => {
    const link = document.createElement("a");
    const canvas = document.getElementById("canvas");
    link.href = canvas.toDataURL();
    link.download = "canvas_image.jpg";
    link.click();
  };

  const clearCanvas = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 500, 500);
  };

  const drawPath = () => {
    // const ctx = getContext();
    // // Draw a Rectangle Path

    // // drawShape(ctx);

    // drawAnimateRect();

    let c = document.getElementById("canvas");
    let ctx = c.getContext("2d");
    let x1 = 30;
    let y1 = 40;
    let r = 50;
    let theta = 0.3;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 + r * Math.cos(theta), y1 + r * Math.sin(theta));
    ctx.stroke();

    //  ctx.lineTo(50, 150);
    //  ctx.stroke();
  };

  const renderDiv = () => {
    return (
      <div>
        <span className="text-sm">
          x={move.x} <br /> y={move.y}
        </span>
        <div
          className="w-[600px] h-[600px] bg-orange-200 cursor-crosshair relative"
          onMouseDown={mouseDown}
          onMouseMove={mouseMove}
          onMouseUp={mouseUp}
          ref={rectRef}
          id="box"
        >
          {/* I need this for preview helper  */}
          <div
            className="border-2 border-solid border-blue-400 absolute rounded-full"
            style={rectStyle}
          />

          {elements.map((element: any, index: number) => (
            <div
              className="absolute border-2 border-solid border-blue-400"
              style={element.style}
              key={index}
            />
          ))}

          {/* <div
          className="border-2 border-solid border-blue-400 absolute rounded-full"
          style={circleStyle}
        /> */}
        </div>
      </div>
    );
  };

  return (
    <div className="w-[1000px] m-auto">
      <div className="flex space-x-4 m-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={drawLine}
        >
          Line
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={drawPath}
        >
          Path
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={drawRectangle}
        >
          Rect
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Circle
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={drawText}
        >
          Text
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            imageFile?.current?.click();
          }}
        >
          Choose Image
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={saveCanvas}
        >
          Save As
        </button>

        <button
          className="bg-violet-500 hover:bg-voilet-700 text-white font-bold py-2 px-4 rounded"
          onClick={clearCanvas}
        >
          Clear
        </button>
      </div>

      <canvas id="canvas" width={500} height={500}></canvas>
      <input
        className="invisible"
        ref={imageFile}
        type="file"
        accept=".jpg,.jpeg,.png,.webp,.heif,.heic"
        onChange={drawImageFromInput}
      />
    </div>
  );
}

export default RectBox;
