/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import {
  ViewSlashIcon,
  ViewIcon,
  UserIcon,
  AcademicIcon,
  CodeIcon,
} from "./components/Icons";
import { details } from "./utils/data";

function App() {
  const [viewed, setViewed] = useState(true);

  const handleViewd = () => {
    setViewed((viewed) => !viewed);
  };

  return (
    <div className="app_wrap h-[100%]">
      <div className="flex gap-2 h-[100%]">
        <div className="flex-1 border-2 border-dotted">
          <h1>Quotes Will Come here</h1>
        </div>
        {viewed && (
          <div className="w-[400px] border-2 border-dotted select-none">
            <div className="relative flex justify-center mt-5">
              <button
                onClick={handleViewd}
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
        )}
      </div>
    </div>
  );
}

export default App;
