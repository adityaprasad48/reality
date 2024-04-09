import { NewspaperIcon } from "@heroicons/react/16/solid";
import { LeftArrowIcon, RightArrowIcon } from "../../components/Icons";

const EdgeSlide = () => {
  return (
    <div className="w-[130px] h-[230px] rounded-r-lg bg-gray-100 ml-10 mb-10 p-2 text-gray-500 border">
      <h3 className="text-sm mb-1 font-semibold ">New Text is coming...</h3>
      <div className="-m-4 mt-1 ">
        <div className="flex justify-center w-[150px]">
          <div
            style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
            className="overflow-x-scroll w-[150px] flex items-start"
          >
            {Array(3)
              .fill(0)
              .map((item: number, index: number) => (
                <div
                  key={index}
                  className="slide min-w-[110px] mr-2 bg-white rounded-lg border shadow-lg"
                >
                  <div className="ml-2">
                    <div className="my-2">
                      <NewspaperIcon height={25} width={25} />
                    </div>
                    <div
                      style={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        lineHeight: "20px",
                        maxHeight: "80px",
                        width: "80px",
                        display: "-webkit-inline-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                      }}
                      className="text-xs mb-2"
                    >
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae quod magnam, maxime commodi aut sunt, nam obcaecati
                        explicabo repellendus culpa autem repudiandae
                        perspiciatis quia adipisci corrupti? Officiis
                        voluptatibus eos iure?
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-center gap-2 items-center mt-2">
          <div className="h-[20px] w-[20px] bg-gray-500 rounded-full -scale-x-100">
            <LeftArrowIcon />
          </div>
          <ul className="flex items-center">
            <li className="h-2 w-2 rounded-full bg-gray-500 mr-2 inline-block hover:bg-gray-600 hover:scale-150 hover:cursor-pointer"></li>
            <li className="h-2 w-2 rounded-full bg-gray-500 mr-2 inline-block hover:scale-150 hover:cursor-pointer"></li>
            <li className="h-2 w-2 rounded-full bg-gray-500 mr-1 inline-block hover:scale-150 hover:cursor-pointer"></li>
          </ul>
          <div className="h-[20px] w-[20px] bg-gray-500 rounded-full">
            <RightArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgeSlide;
