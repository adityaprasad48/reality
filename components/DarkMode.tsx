"use client";

import { SunIcon } from "@heroicons/react/16/solid";
import { useState, useEffect } from "react";
import { useLocalStorage } from "react-use";
import { MoonIcon } from "./Icons";

export const DarkMode = () => {
  const [value, setValue, remove] = useLocalStorage("mode", "light");

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (value == "light") {
      setValue("dark");
    } else {
      setValue("light");
    }
  };

  useEffect(() => {
    console.log("effect", value);
    if (value == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [value]);

  // console.log("value", value);

  return (
    <div
      onClick={toggleDarkMode}
      className="cursor-pointer border-2 border-blue-500 rounded-full h-11 w-11 text-sm mr-3 relative"
      data-tooltip-id="my-tooltip"
      data-tooltip-place="bottom"
      data-tooltip-content="Dark Mode"
    >
      <div
        className={`absolute w-full h-full flex items-center justify-center  element-1  ${
          isDarkMode ? "visible-1" : "hidden-1"
        }`}
      >
        <MoonIcon />
      </div>
      <div
        className={`absolute w-full h-full flex items-center justify-center element-1 ${
          isDarkMode ? "hidden-1" : "visible-1"
        }`}
      >
        <SunIcon height={24} width={24} />
      </div>
    </div>
  );
};
