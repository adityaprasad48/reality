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
import NumberSpan from "./components/NumberSpan";
import SlideShow from "./routes/SlideShow";
import { appsChild, includeFields } from "./main";
import AquaNote from "./routes/AquaNote";
import JustTransform from "./routes/JustTransform";
import ImageEffects from "./routes/ImageEffects";
import CanvasPanel from "./routes/CanvasPanel";
import NameSearch from "./routes/NameSearch";
import { CheckDaily } from "./routes/CheckDaily";

function App() {
  const Projects = [
    <AquaNote />,
    <JustTransform />,
    <ImageEffects />,
    <CanvasPanel />,
    <SlideShow />,
    <NameSearch />,
  ];

  const [counter, setCounter] = useState(0);

  function generateSequentialNumber() {
    setCounter((c) => (c + 1) % 6);
  }

  return (
    <div className="h-[100%] w-[100%]">
      <div className="border-2 border-dotted">
        <div>
          <button
            onClick={generateSequentialNumber}
            className="px-2 bg-slate-100 py-2 m-4 rounded-lg flex items-center gap-2"
          >
            Reload
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="h-[800px] w-[800px]">
          <h1 className="text-2xl flex items-center">
            Random Project <NumberSpan randomNum={counter} />
            {/* Project Name: {appsChild[counter].name} */}
          </h1>
          {/* <div className="p-4">{Projects[counter]}</div> */}
          <CheckDaily />
        </div>
      </div>
    </div>
  );
}

export default App;
