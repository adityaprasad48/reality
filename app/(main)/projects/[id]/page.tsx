import Image from "next/image";
import AquaNote from "@/components/projects/AquaNote";
import CanvasPanel from "@/components/projects/CanvasPanel";
import JustTransform from "@/components/projects/JustTransform";
import NameSearch from "@/components/projects/NameSearch";
import SlideShow from "@/components/projects/SlideShow";
import { Projects } from "@/lib/utils/data";

interface ProjectCompType {
  [key: string]: JSX.Element;
}
const ProjectComp: ProjectCompType = {
  "1": <AquaNote />,
  "2": <JustTransform />,
  "3": <CanvasPanel />,
  "4": <NameSearch />,
  "5": <SlideShow />,
};

export default function Page({ params }: any) {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="my-10 flex justify-center">
        <h2 className="text-2xl font-light bg-indigo-400 text-white px-10">
          {Projects[params.id as keyof typeof Projects].name}
        </h2>
      </div>
      <div className="w-[700px]">{ProjectComp[params.id]}</div>
    </main>
  );
}
