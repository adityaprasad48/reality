import React, { useEffect, useRef, useState } from "react";

const ImageEffects = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgStyle, setImgStyle] = useState("");

  const getImgStyle = () => {
    if (imgRef.current) {
      setImgStyle(imgRef.current.getAttribute("style"));
    }
  };

  useEffect(() => {
    getImgStyle();
  }, []);
  
  return (
    <div className="flex w-10/12 mx-auto border gap-5 justify-between p-4 border-violet-500 rounded-lg">
      <div className="flex flex-col gap-3 flex-1 border p-2">
        <div className="flex gap-2">
          <h3 className="font-bold text-lg w-[40%] text-violet-500 hover:text-violet-600">
            Blur
          </h3>
          <input className="flex-1" type="range" />
        </div>
        <div className="flex gap-2">
          <h2 className="font-bold text-lg w-[40%] text-violet-500 hover:text-violet-600">
            Brightness
          </h2>
          <input className="flex-1" type="range" />
        </div>
        <div className="flex gap-2">
          <h2 className="font-bold text-lg w-[40%] text-violet-500 hover:text-violet-600">
            Contrast
          </h2>
          <input className="flex-1" type="range" />
        </div>
        <div className="flex gap-2">
          <h2 className="font-bold text-lg w-[40%] text-violet-500 hover:text-violet-600">
            GrayScale
          </h2>
          <input className="flex-1" type="range" />
        </div>
        <div className="flex gap-2">
          <h2 className="font-bold text-lg w-[40%] text-violet-500 hover:text-violet-600">
            Hue Rotate
          </h2>
          <input className="flex-1" type="range" />
        </div>
        <div className="flex gap-2">
          <h2 className="font-bold text-lg w-[40%] text-violet-500 hover:text-violet-600">
            Invert
          </h2>
          <input className="flex-1" type="range" />
        </div>
        <div className="flex gap-2">
          <h2 className="font-bold text-lg w-[40%] text-violet-500 hover:text-violet-600">
            Saturate
          </h2>
          <input className="flex-1" type="range" />
        </div>
        <div className="flex gap-2">
          <h2 className="font-bold text-lg w-[40%] text-violet-500 hover:text-violet-600">
            Sepia
          </h2>
          <input className="flex-1" type="range" />
        </div>

        <pre>{JSON.stringify(imgStyle, null, 2)}</pre>
      </div>
      <div className="w-[400px]">
        <img
          ref={imgRef}
          className="w-full rounded-lg"
          src="https://picsum.photos/400/400"
          alt=""
        />
      </div>
    </div>
  );
};

export default ImageEffects;
