import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <div className="bg-gray-50 w-full p-24 flex justify-center items-center pt-[125px]">
        {/* little intereactive work */}
        <div className="relative opacity-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
          <div className="absolute top-0 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2s"></div>
          <div className="absolute top-0 -left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4s"></div>
        </div>

        <div className="opacity-1 max-w-[1000px] w-[790px] min-w-[400px]">
          <h1 className="text-6xl font-bold">
            <span className="text-slate-700"> Hi, I’m Aditya a </span>{" "}
            <span className="text-indigo-400">Web Developer</span>.
          </h1>
          <p className="text-2xl font-light mt-5 text-slate-700">
            I love to build web applications and websites. I am a Frontend
            developer who is passionate about learning new technologies and
            building cool stuff.
          </p>
        </div>
      </div>

      <div>
        <div className="mt-10 flex justify-center">
          <h2 className="text-2xl font-light bg-indigo-400 text-white px-10">
            Some of Projects
          </h2>
        </div>
        <div className="mt-10 flex gap-4">
          <div className="w-[200px] h-[200px] bg-gray-50 rounded-xl flex items-center justify-center">
            <p className="text-2xl font-bold text-gray-300">Preview Soon</p>
          </div>
          <div className="w-[200px] h-[200px] bg-gray-50 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <p className="text-xs text-gray-300 ">
                preview will be added in shortly check projects page for quick
                view
              </p>
            </div>
          </div>
          <div className="w-[200px] h-[200px] bg-gray-50 rounded-xl flex items-center justify-center">
            <p className="text-2xl font-bold text-gray-300">Preview Soon</p>
          </div>
        </div>
      </div>
    </main>
  );
}
