import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="min-h-20 w-full border-t-2 border-slate-200 shadow-sm px-4">
      <div className="lg:max-w-screen-lg h-full mx-auto flex items-center justify-between">
        <div className="w-full flex justify-center cursor-pointer">
          Made with ❤️ by &nbsp; <Link  className="text-slate-400 hover:text-slate-600 hover:underline" href="https://github.com/adityaprasad48" target="_blank">adityaprasad48</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
