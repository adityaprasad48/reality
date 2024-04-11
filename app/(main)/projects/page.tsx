import { Projects } from "@/lib/utils/data";
import { Monitor, MonitorOff } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full w-full flex justify-center">
      <div className="">
        <div className="my-10 flex justify-center">
          <h2 className="text-2xl font-light bg-indigo-400 text-white px-10">
            List of Projects
          </h2>
        </div>
        <div className="w-[600px]  flex flex-col space-y-2">
          {Object.values(Projects)
            .sort((p: any) => (p.completed ? -1 : 1))
            .map((project) => {
              return (
                <Link key={project.id} href={`projects/${project.id}`}>
                  {/* Language Tags */}
                  <div className="flex justify-between gap-2 items-center p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md cursor-pointer project-card">
                    <div className="flex flex-1 gap-2">
                      {/* <Image
                      className="rounded-lg"
                      src={project.image}
                      alt="Picture of the author"
                      width={100}
                      height={100}
                    /> */}
                      <div className="h-[100px] w-[100px] rounded-lg bg-gray-50 flex justify-center items-center">
                        {project.completed ? (
                          <Monitor className="text-gray-400" size={48} />
                        ) : (
                          <MonitorOff className="text-gray-400" size={48} />
                        )}
                      </div>
                      <div className="flex flex-col space-y-2 flex-1">
                        <h2 className="font-semibold text-slate-800 text-xl">
                          {project.name}
                        </h2>
                        <p className="font-normal text-slate-500 text-sm leading-5">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="relative w-60">
                      <div className="flex flex-wrap gap-1 project-tags">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 border border-indigo-300 border-1 rounded-full bg-indigo-200/50 text-xs font-semibold text-indigo-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* Preview Buttons */}
                      <div className="absolute top-1 left-1/2 project-btns">
                        <button className="bg-indigo-500 text-white px-4 py-1 rounded-full shadow-lg text-md">
                          {project.completed ? "Dev Done" : "In Dev"}
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </main>
  );
}
