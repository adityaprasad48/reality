import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="min-h-[65px] h-[65px] w-full flex items-center justify-between absolute top-2">
      <div className="w-[790px] border h-full mx-auto border-b-1 bg-gray-50  border-slate-200 px-6 shadow-sm flex items-center justify-between rounded-lg">
        <div className="w-full flex justify-between">
          <Link href="/">
            <button className="px-8 py-1 outline outline-2 outline-indigo-300 text-slate-600 rounded-lg  hover:bg-indigo-500/80 hover:text-white active:bg-indigo-500/80 ">
              About
            </button>
          </Link>
          <div className="">
            <Link href="/projects">
              <button className="px-8 py-1 outline outline-2 outline-indigo-300 text-slate-600 rounded-lg hover:bg-indigo-500/80 hover:text-white active:bg-indigo-500/80 ">
                Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
