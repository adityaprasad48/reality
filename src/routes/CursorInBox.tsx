import { useEffect, useRef, useState } from "react";

export const ImageRender = () => {
  const [rd, setRd] = useState(0);
  const [zl, setZl] = useState(100);
  const [bz, setBz] = useState(false);

  const onZoom = (zoom: string) => {
    if (zoom === "in") {
      alert("zoom in");
      setZl((zl) => zl + 25);
    }
    if (zoom === "out") {
      alert("zoom out");
      setZl((zl) => zl - 25);
    }
  };

  const hr = () => {
    if (rd === 270) {
      setTimeout(() => {
        setRd(0);
      }, 1000);
    } else {
      setRd(rd + 90);
    }
  };

  const defaultImage =
    "https://media-public.canva.com/QYYhU/MAEzGDQYYhU/1/s.jpg";
  const imageFile = useRef<any>(null);
  const [selectedImage, setSelectedImage] = useState(defaultImage);

  const handleFileInputChange = (event: any) => {
    const file = event?.target?.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const openImage = () => {
    imageFile?.current?.click();
  };

  return (
    <div className="p-4 flex flex-col justify-center items-center w-100 h-100">
      <Tabs
        hr={hr}
        onZoom={onZoom}
        openImage={openImage}
        changeFile={handleFileInputChange}
        rotate={hr}
      />
      <input
        ref={imageFile}
        type="file"
        accept=".jpg,.jpeg,.png,.webp,.heif,.heic"
        onChange={handleFileInputChange}
        style={{ display: "none" }}
      />
      <ImageContainer rd={rd} imageSrc={selectedImage} />
    </div>
  );
};

export const Heading = () => {
  return (
    <div className="inline-block text-white text-2xl font-extrabold border border-gray  p-1 w-full text-center bg-gradient-to-r from-cyan-500 to-blue-500">
      Image Viewer
    </div>
  );
};

export const Tabs = ({
  hr,
  onZoom,
  openImage,
  rotate,
  changeFile,
}: {
  hr: any;
  onZoom: any;
  openImage: any;
  rotate: any;
  changeFile: any;
}) => {
  return (
    <div className="m-2 flex gap-2 w-full p-1">
      <div
        role="button"
        onClick={() => onZoom("in")}
        className="bg-orange-400 text-white p-2 rounded-lg cursor-zoom-in select-none"
      >
        Zoom In
      </div>
      <div
        role="button"
        onClick={() => onZoom("out")}
        className="bg-orange-400 text-white p-2 rounded-lg cursor-zoom-out select-none"
      >
        Zoom Out
      </div>
      <div
        role="button"
        onClick={rotate}
        className="bg-orange-400 text-white p-2 rounded-lg cursor-pointer select-none"
      >
        Rotate
      </div>
      <div
        role="button"
        onClick={openImage}
        className="bg-blue-400 text-white p-2 rounded-lg cursor-pointer select-none"
      >
        Open Image
      </div>
    </div>
  );
};

export const ImageContainer = ({ imageSrc, rd }: any) => {
  const imageRef = useRef<any>(null);
  // using state can create a remove nodes if update in state
  return (
    <div className="img_container">
      <div className="img_box_wrap">
        <div className="img_box" style={{ transform: `rotate(${rd}deg)` }}>
          <img
            ref={imageRef}
            crossOrigin="anonymous"
            src={imageSrc}
            draggable="false"
            alt="Blue Circles on Blurred Background"
          />
        </div>
      </div>
    </div>
  );
};

export const TranslateBox = () => {
  return (
    <div className="translate_root">
      <div className="translate_box">
        <h1>Translate Box</h1>
      </div>
    </div>
  );
};

export const TranslateBoxWithCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const divStyle = {
    left: cursorPosition.x,
    top: cursorPosition.y,
  } as any;

  return (
    <div
      onMouseMove={handleMouseMove}
      className="w-[500px] h-[500px] border-green-500 border-2 border-dotted mt-[200px] ml-[200px] relative"
    >
      <div
        className="w-[100px] h-[100px] rounded-full bg-slate-400 text-xs flex items-center justify-center absolute"
        style={divStyle}
      >
        X: {cursorPosition.x}, Y: {cursorPosition.y}
      </div>
    </div>
  );
};

export const AmazonZoomin = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [customCursor, setCustomCursor] = useState(false);
  const [clickedOnImg, setClickedOnImg] = useState(false);

  const onMouseEnter = (e: any) => {
    setCustomCursor(true);
  };

  const onMouseLeave = (e: any) => {
    setCustomCursor(false);
  };

  const handleMouseMove = (e: any) => {
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const divStyle = {
    left: cursorPosition.x,
    top: cursorPosition.y,
  } as any;

  const [scale, setScale] = useState(1);

  const zoomIn = () => {
    if (scale === 3) return;
    setScale((scale) => scale + 0.5);
  };

  const zoomOut = () => {
    if (scale === 0.5) {
      return;
    }
    setScale((scale) => scale - 0.5);
  };

  const onImgClicked = () => {
    setClickedOnImg(!clickedOnImg);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex gap-1 m-2 ">
        <button
          onClick={zoomIn}
          className="bg-green-500 text-white text-sm p-2 rounded-full"
        >
          Zoom In
        </button>
        <button
          onClick={zoomOut}
          className="bg-blue-500 text-white text-sm p-2 rounded-full"
        >
          Zoom Out
        </button>
        <span className=" text-black text-sm p-2">scale: {scale}</span>
      </div>
      <div
        className={`border-green-500 border-2 border-dotted flex justify-center items-center w-[1000px] h-[1000px] overflow-hidden ${
          clickedOnImg ? "cursor-zoom-out" : "cursor-zoom-in"
        }`}
      >
        <img
          onClick={onImgClicked}
          style={{ transform: `scale(${scale})` }}
          src="https://m.media-amazon.com/images/I/719YzzTusnL._SX522_.jpg"
          alt="sandisk"
          className="w-[500px] h-[500px]"
        />
        {/* <div className="w-[500px] h-[500px] border-green-500 border-2 border-solid bg-[url('https://m.media-amazon.com/images/I/719YzzTusnL._SX522_.jpg')] absolute left-[40px] top-[0px]"></div> */}
      </div>
    </div>
  );
};

export const DragDrop = () => {
  function allowDrop(e: any) {
    // preventing default event that will occurs like prevent from submitting form
    // To ensure that the drop event always fires as expected,
    e.preventDefault();
  }

  function drag(e: any) {
    console.log("drag start", e.target.id);
    e.dataTransfer.setData("text", e.target.id);
  }

  function drop(e: any) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }

  return (
    <div className="drag_wrap flex gap-8">
      <div
        id="div1"
        className="border w-[200px] h-[300px]"
        onDrop={drop}
        onDragOver={allowDrop}
      ></div>

      <img
        src="https://picsum.photos/200/300"
        alt="logo"
        draggable
        onDragStart={drag}
        id="drag1"
        width="100%"
        height="100%"
      />

      <div
        id="div2"
        className="border w-[200px] h-[300px]"
        onDrop={drop}
        onDragOver={allowDrop}
      ></div>
    </div>
  );
};

export const CursorInBox = () => {
  const cursorNode = useRef<any>(null);

  const handleMove = (e: any) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    cursorNode.current.style.left = mouseX - 100 + "px";
    cursorNode.current.style.top = mouseY - 100 + "px";
  };

  return (
    <>
      <img
        src="https://cdn-icons-png.flaticon.com/512/15136/15136633.png"
        id="cursor"
        alt="a cursor"
        ref={cursorNode}
        className="border-pink-500 border-2 border-dotted"
      />
      <div
        className="w-[500px] h-[500px] border-green-500 border-2 border-dotted mt-[200px] ml-[200px]"
        onMouseMove={handleMove}
      ></div>
    </>
  );
};

export const ClockTimerWithMusic = () => {
  return (
    <div className="w-[200px] h-[200px] bg-black rounded-full flex  justify-center ">
      <div>
        {/* black stroke and radient when start */}
        {/* <div className="D0_gbA">
          <svg className="_h0m2A _7YXtUA Xm9hgw">
            <defs>
              <linearGradient id=":rod:">
                <stop offset="0%" stop-color="rgb(0, 196, 204)"></stop>
                <stop offset="100%" stop-color="rgb(125, 42, 232)"></stop>
              </linearGradient>
            </defs>
            <circle r="96" cx="100" cy="100" stroke-dashoffset="0"></circle>
          </svg>
        </div> */}

        <div className="bg-black-200 flex justify-center items-center">
          <button className="text-white text-xl">-</button>
          <span className="text-white text-xl">1 min</span>
          <button className="text-white text-xl">+</button>
        </div>
        <div className="time_wrap border border-solid border-indigo-400 text-white">
          <span className="minute">05</span>
          <span className="separator">:</span>
          <span className="seconds">00</span>
        </div>
        <div className="button_wrap">
          <span className="play_icon text-white">
            <span aria-hidden="true">
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="m8.248 4.212 11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </span>
          <span className="restart_icon text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M8.75 5.52V9a.75.75 0 0 0 1.5 0V5c0-.97-.78-1.75-1.75-1.75h-4a.75.75 0 0 0 0 1.5h2.6a8.75 8.75 0 1 0 9.12-.42.75.75 0 1 0-.73 1.32 7.25 7.25 0 1 1-6.74-.13z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
