import { useState, useEffect, useContext } from "react";
import { BoltIcon, ClockIcon, HomeIcon, MoonIcon, MusicIcon, UserMinus } from "./Icons";
import Battery from "./Battery";
import NavDateTime from "./NavDateTime";
import { ScreenPopContext } from "../ctx/ScreenPopProvider";

const Navbar = () => {
  const [oldScrollY, setOldScrollY] = useState(window.scrollY);
  const [direction, setDirection] = useState("");

  const screenPopCtx = useContext(ScreenPopContext);

  const showTimer = () => {
    screenPopCtx.setScreenPop((s: any) => {
      return { ...s, timer: true };
    });
  };

  const showMusic = () => {
    screenPopCtx.setScreenPop((s: any) => {
      return { ...s, music: true };
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // console.log({ scrollY: window.scrollTo });
      if (window.scrollY > 59 && oldScrollY < window.scrollY) {
        setDirection("Down");
      } else {
        setDirection("Up");
      }
      setOldScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [oldScrollY]);

  return (
    <nav
      className={`text-gray-600 bg-white mb-4 h-[60px] w-[100%] flex items-center shadow-md rounded-md z-50 ${
        direction === "Up" && "sticky_new"
      }`}
    >
      <div className="px-2 flex items-center justify-between w-[100%]">
        <div className="flex items-center gap-2 w-[40%]">
          <div className="cursor-pointer text-lg flex items-center">
            <a
              href="/"
              className="cursor-pointer border-2 border-blue-500 rounded-full p-2 text-sm flex items-center mr-3"
              data-tooltip-id="my-tooltip"
              data-tooltip-place="bottom"
              data-tooltip-content="Home"
            >
              <HomeIcon />
            </a>
          </div>
          <div className="cursor-pointer text-lg flex items-center">
            <a
              href="/apps"
              className="cursor-pointer border-2 border-blue-500 rounded-full p-2 text-sm flex items-center mr-3"
              data-tooltip-id="my-tooltip"
              data-tooltip-place="bottom"
              data-tooltip-content="View Apps"
            >
              <BoltIcon />
            </a>
          </div>
          <NavDateTime />
        </div>

        <div className="flex items-center">
          <div
            onClick={showTimer}
            className="cursor-pointer border-2 border-purple-500 rounded-full p-2 text-sm flex items-center mr-3"
            data-tooltip-id="my-tooltip"
            data-tooltip-place="bottom"
            data-tooltip-content="Start Timer/StopWatch"
          >
            <ClockIcon />
          </div>
          <div
            onClick={showMusic}
            className="cursor-pointer border-2 border-blue-500 rounded-full p-2 text-sm flex items-center mr-3"
            data-tooltip-id="my-tooltip"
            data-tooltip-place="bottom"
            data-tooltip-content="Play Music"
          >
            <MusicIcon />
          </div>
          <div
            className="cursor-pointer border-2 border-blue-500 rounded-full p-2 text-sm flex items-center mr-3"
            data-tooltip-id="my-tooltip"
            data-tooltip-place="bottom"
            data-tooltip-content="Log Out"
          >
            <UserMinus />
          </div>
          <div
            onClick={showMusic}
            className="cursor-pointer border-2 border-blue-500 rounded-full p-2 text-sm flex items-center mr-3"
            data-tooltip-id="my-tooltip"
            data-tooltip-place="bottom"
            data-tooltip-content="Dark Mode"
          >
            <MoonIcon />
          </div>
          <Battery />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


