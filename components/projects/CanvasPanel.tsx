"use client";

import React, { useState, useEffect, useRef } from "react";

const CanvasPanel = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [prevMouseX, setPrevMouseX] = useState(0);
  const [prevMouseY, setPrevMouseY] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const [selectedTool, setSelectedTool] = useState("brush");
  const [selectedColor, setSelectedColor] = useState("#000");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        setCanvasBackground(ctx);
      }
    }
  }, [selectedColor]);

  const setCanvasBackground = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = selectedColor;
  };

  const startDraw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    setPrevMouseX(e.nativeEvent.offsetX);
    setPrevMouseY(e.nativeEvent.offsetY);
  };

  const drawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(prevMouseX, prevMouseY);
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctx.strokeStyle = selectedColor;
      ctx.lineWidth = 5;
      ctx.stroke();
      setPrevMouseX(e.nativeEvent.offsetX);
      setPrevMouseY(e.nativeEvent.offsetY);
    }
  };

  const stopDraw = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx) {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setCanvasBackground(ctx);
    }
  };

  const saveImage = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement("a");
      link.download = `${Date.now()}.jpg`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div className="w-[1000px] m-auto">
      <div className="flex gap-2 my-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={clearCanvas}
        >
          Clear
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={saveImage}
        >
          Save
        </button>
      </div>
      <div className="shadow-2xl overflow-hidden">
        <canvas
          onMouseMove={drawing}
          onMouseDown={startDraw}
          onMouseUp={stopDraw}
          ref={canvasRef}
          width={805}
          height={552}
        ></canvas>
      </div>
    </div>
  );
};

export default CanvasPanel;
