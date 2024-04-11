import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="min-h-20 w-full border-b-2 border-slate-200 px-4 shadow-sm">
      <div className="lg:max-w-screen-lg h-full mx-auto flex items-center justify-between">
        <div className="w-full flex justify-between">
          <Link href="/">
            <button className="px-8 py-2 outline outline-2 outline-indigo-300 text-slate-600 rounded-lg  hover:bg-indigo-500/80 hover:text-white active:bg-indigo-500/80 ">
              About
            </button>
          </Link>
          <div className="">
            <Link href="/projects">
              <button className="px-8 py-2 outline outline-2 outline-indigo-300 text-slate-600 rounded-lg hover:bg-indigo-500/80 hover:text-white active:bg-indigo-500/80 ">
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
