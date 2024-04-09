import { useState } from "react";

const SimpleImageSlider = () => {
  const [index, setIndex] = useState(1);

  const startIndex = 1;
  const endIndex = 3;

  const onLeft = () => {
    if (index <= 1) {
      setIndex(endIndex);
      return;
    }
    setIndex((index) => index - 1);
  };

  const onRight = () => {
    if (index == 3) {
      setIndex(startIndex);
      return;
    }
    setIndex((index) => index + 1);
  };

  const mc = (...args: string[]) => {
    let str = "";
    for (let arg of args) {
      str = str.concat(" ").concat(arg);
    }
    return str;
  };
  return (
    <div className="min-w-[800px] border relative">
      <div
        style={{
          display: index == 1 ? "block" : "none",
        }}
        className="bg-gray-400"
      >
        <img
          className="w-full"
          src="https://www.w3schools.com/howto/img_mountains_wide.jpg"
          alt=""
        />
      </div>

      <div
        style={{
          display: index == 2 ? "block" : "none",
        }}
        className="bg-gray-400"
      >
        <img
          className="w-full"
          src="https://www.w3schools.com/howto/img_nature_wide.jpg"
          alt=""
        />
      </div>

      <div
        style={{
          display: index == 3 ? "block" : "none",
        }}
        className="bg-gray-400"
      >
        <img
          className="w-full"
          src="https://www.w3schools.com/howto/img_snow_wide.jpg"
          alt=""
        />
      </div>

      <button
        onClick={onLeft}
        type="button"
        className="absolute top-1/2 left-0 py-1 px-3 bg-white text-gray-500 font-bold shadow-lg rounded-full transform -translate-y-1/2 ml-2"
      >
        Left
      </button>
      <button
        onClick={onRight}
        type="button"
        className="absolute top-1/2 right-0 py-1 px-3 bg-white text-gray-500 font-bold shadow-lg rounded-full transform -translate-y-1/2 mr-2"
      >
        Right
      </button>

      <div className="flex gap-2 justify-center my-2 w-full">
        <div
          onClick={() => setIndex(1)}
          className={mc(
            "w-[15px] h-[15px] rounded-full hover:bg-gray-400 cursor-pointer",
            index == 1 ? "bg-gray-400" : "bg-gray-300"
          )}
        ></div>
        <div
          onClick={() => setIndex(2)}
          className={mc(
            "w-[15px] h-[15px] rounded-full hover:bg-gray-400 cursor-pointer",
            index == 2 ? "bg-gray-400" : "bg-gray-300"
          )}
        ></div>
        <div
          onClick={() => setIndex(3)}
          className={mc(
            "w-[15px] h-[15px] rounded-full hover:bg-gray-400 cursor-pointer",
            index == 3 ? "bg-gray-400" : "bg-gray-300"
          )}
        ></div>
      </div>
    </div>
  );
};

export default SimpleImageSlider;
