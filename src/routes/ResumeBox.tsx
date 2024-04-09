import React from "react";
import { useScreenPopCtx } from "../ctx/ScreenPopProvider";
import { details } from "../utils/data";
import { ViewSlashIcon, ViewIcon, UserIcon, AcademicIcon, CodeIcon } from "../components/Icons";

const ResumeBox = () => {
  const screenPopCtx = useScreenPopCtx();

  let resumeVisible = screenPopCtx?.screenPop.resume;

  const closeResume = () => {
    screenPopCtx.setScreenPop((s: any) => {
      return { ...s, resume: false };
    });
  };

  let viewed = false

  return (
    <div
      className={`resume-box border ${
        resumeVisible ? "slide-up " : ""
      } h-full w-full bg-white`}
    >
      <div className="flex justify-end p-2">
        <button
          className="bg-slate-100 px-2 py-1 rounded-lg"
          onClick={closeResume}
        >
          Close
        </button>
      </div>
      <div className="p-5 text-slate-800">
        <div className="w-[400px] border-2 border-dotted select-none">
          <div className="relative flex justify-center mt-5">
            <button
              // onClick={handleViewd}
              className="absolute top-1 left-10 border-2 border-gray-300 cursor-pointer p-1 rounded-md"
            >
              <span>{viewed ? <ViewSlashIcon /> : <ViewIcon />}</span>
            </button>
            <img
              className="w-[300px] h-[300px] bg-gray-300 rounded-full outline outline-8 outline-gray-200"
              src="https://avatars.githubusercontent.com/u/44614594?s=400&u=92fa4155c955fe485545f01bff48a10dafc04303&v=4"
              alt="Avatar"
            />
          </div>
          <div className="relative flex flex-col gap-2">
            <div className="border-b-2 border-blue-300 p-3 flex items-center gap-1">
              <UserIcon />
              <span>Aditya Prasad</span>
            </div>
            <div className="border-b-2 border-blue-300 p-3 flex items-center gap-1">
              <AcademicIcon />
              <span>3 Yrs of Experience</span>
            </div>
            <div className="border-b-2 border-blue-300 p-3 flex  items-center gap-1">
              <CodeIcon />
              <div className="w-[80%] flex flex-wrap items-center gap-1">
                {details.skills.map((skill) => (
                  <span
                    key={"__" + skill}
                    className="border rounded-full px-2 text-gray-500 "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBox;
