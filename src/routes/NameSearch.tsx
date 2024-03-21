import { useState } from "react";
import { alphabet, groupNames } from "../utils";

const NameSearch = () => {
  const [cursorLetter, setCursorLetter] = useState("");

  const handleMouseOver = (item: string) => {
    if (item === cursorLetter) return;
    setCursorLetter(item);
  };

  // console.log({ cursorLetter });

  // scrollspy
  // code moduled: done
  // types fix: done
  // keys fix: done
  // wrap names in scroll div and alphabet divs should ratio of 300px and flex 1 for names div
  // github

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col gap-5 cursor-pointer">
        <Alphabet
          handleMouseOver={handleMouseOver}
          cursorLetter={cursorLetter}
          setCursorLetter={setCursorLetter}
        />
        <NameCards cursorLetter={cursorLetter} />
      </div>
      {cursorLetter && (
        <div className="fixed  inset-0 z-50 bg-white bg-opacity-50 backdrop-blur-md"></div>
      )}
    </div>
  );
};

interface AlphabetProps {
  handleMouseOver: (a: string) => void;
  setCursorLetter: (a: string) => void;
  cursorLetter: string;
}

const Alphabet: React.FC<AlphabetProps> = (props) => {
  const ltrhoveredStyle: React.CSSProperties = {
    outline: "2px solid pink",
  };

  return (
    <div className="flex flex-wrap gap-2  fixed top-0 z-[400] p-2 bg-white">
      {alphabet.map((item: string, index: number) => {
        return (
          <div
            key={"alphabet__" + index}
            onMouseOver={() => props.handleMouseOver(item)}
            onClick={() => props.setCursorLetter("")}
            style={props.cursorLetter === item ? ltrhoveredStyle : {}}
            className="w-[40px] h-[40px] bg-gray-100 rounded-lg shadow-md flex items-center justify-center"
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

const NameCard = ({ letter }: { letter: string }) => {
  return (
    <div className="m-2 p-2 flex items-center bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center">{letter}</h2>
    </div>
  );
};

const NameCards = ({ cursorLetter }: { cursorLetter: string }) => {
  const hoveredStyle: React.CSSProperties = {
    zIndex: "300",
    position: "relative",
    outline: "2px solid pink",
  };

  return (
    <div className="mt-20">
      {Object.keys(groupNames()).map((letter: string, gIndex: number) => (
        <div
          key={"namegroup__" + gIndex}
          style={cursorLetter === letter ? hoveredStyle : {}}
          className={`flex flex-wrap `}
        >
          {groupNames()[letter].map((name: string, nIndex: number) => (
            <NameCard key={"namegroup__name__" + nIndex} letter={name} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default NameSearch;
