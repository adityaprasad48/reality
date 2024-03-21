import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { audioData } from "../utils/data";
import { useWebAudio } from "../hooks/useAudio";
import { useState } from "react";

export default function AudioPlayer() {
  const [url, setUrl] = useState("");
  const { play, stop, isPlaying } = useWebAudio(url);

  // useEffect(() => {
  //   play();
  // }, []);

  const onSongChange = (songUrl: string) => {
    setUrl(songUrl);
    play();
  };

  const stopSong = () => {};

  // console.log(audioData);
  return (
    <div>
      <div className="flex gap-2 m-2">
        <button
          onClick={stopSong}
          className="bg-green-200 text-xl rounded-lg px-2 py-1"
        >
          <span>Stop</span>
        </button>
        <button className="bg-blue-200 text-xl rounded-lg px-2 py-1">
          <span>Volume</span>
        </button>
      </div>
      <div className="fixed top-16 w-56 text-right">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
              Playlist
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            // as={div}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              {audioData.map((item: any) => {
                return (
                  <div
                    key={item.name}
                    className="px-1 py-1 "
                    onClick={() => onSongChange(item.url)}
                  >
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {item.name}
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                );
              })}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
