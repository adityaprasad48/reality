"use client";

import { useState, useEffect, useContext } from "react";
import {
  BoltIcon,
  ClockIcon,
  GithubIcon,
  HomeIcon,
  LinkdinIcon,
  MusicIcon,
} from "./Icons";
import Battery from "./Battery";
import NavDateTime from "./NavDateTime";
import { DarkMode } from "./DarkMode";
import { details } from "../lib/utils/data";

const Navbar = () => {
  const [oldScrollY, setOldScrollY] = useState(window.scrollY);
  const [direction, setDirection] = useState("");


  const showTimer = () => {
    // screenPopCtx.setScreenPop((s: any) => {
    //   return { ...s, timer: true };
    // });
  };

  const showMusic = () => {
    // screenPopCtx.setScreenPop((s: any) => {
    //   return { ...s, music: true };
    // });
  };

  const showResume = () => {
    // screenPopCtx.setScreenPop((s: any) => {
    //   return { ...s, resume: true };
    // });
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
    <div>
      <header
        className={`text-gray-600 bg-white dark:bg-slate-800 dark:text-gray-300 mb-4 h-[60px] w-[100%]  shadow-md rounded-md z-50 sticky_navbar ${
          direction === "Up" && "sticky"
        }`}
      >
        <div className="px-2 h-[60px] flex items-center justify-between w-[100%]">
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
            <div>
              <button
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg focus:outline-none focus:shadow-outline animate-pulse"
                onClick={showResume}
              >
                Resume
              </button>
            </div>
            <NavDateTime />
          </div>

          <div className="flex-1 flex justify-end items-center">
            <a
              className="h-full p-1 mr-6 flex items-center bg-slate-100 rounded-lg text-slate-500 hover:text-slate-700 ring ring-orange-500 ring-offset-4 ring-opacity-50"
              target="_blank"
              href={details.social.GITURL}
            >
              <span>
                <GithubIcon />
              </span>
            </a>
            <a
              className="h-full p-1 mr-5 flex items-center bg-slate-100 rounded-lg text-slate-500 hover:text-slate-700 ring ring-orange-500 ring-offset-4 ring-opacity-50"
              target="_blank"
              href={details.social.LinkDinURL}
            >
              <span>
                <LinkdinIcon />
              </span>
            </a>
            <div
              onClick={showTimer}
              className="cursor-pointer border-2 border-blue-500 rounded-full p-2 text-sm flex items-center mr-3"
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
            {/* <div
            className="cursor-pointer border-2 border-blue-500 rounded-full p-2 text-sm flex items-center mr-3"
            data-tooltip-id="my-tooltip"
            data-tooltip-place="bottom"
            data-tooltip-content="Log Out"
          >
            <UserCircleIcon height={25} width={25} />
          </div> */}
            <DarkMode />
            <Battery />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
