import { useEffect, useRef, useState } from "react";
import { BackwardIcon, ForwardIcon, PauseIcon, PlayIcon } from "./Icons";
import clsx from "clsx";
import { songs } from "../utils/data";
import { useScreenPopCtx } from "../ctx/ScreenPopProvider";

export default function MusicPlay() {
  const screenPopCtx = useScreenPopCtx();
  const [audioContext, setAudioContext] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioObj, setAudioObj] = useState(songs[0]);
  let sourceNode = useRef(null);

  // track user gesture on window and true that flag and add this to condition along with audioUrl.

  useEffect(() => {
    const initAudio = async (au: string) => {
      try {
        // Create an AudioContext instance
        const context = new AudioContext();
        setAudioContext(context);

        // Fetch audio data
        const response = await fetch(au);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await context.decodeAudioData(arrayBuffer);

        // Create a new source node every time audio is initialized
        sourceNode.current = context.createBufferSource();
        sourceNode.current.buffer = audioBuffer;

        // Connect the source node to the destination (speakers)
        sourceNode.current.connect(context.destination);
      } catch (error) {
        console.error("Error initializing audio:", error);
      }
    };

    let audioUrl = audioObj.src;

    if (audioUrl) {
      initAudio(audioUrl);
    }

    // Cleanup
    return () => {
      if (audioContext) {
        audioContext.close();
      }
    };
  }, [audioObj]);

  const play = () => {
    if (audioContext && sourceNode.current) {
      console.log("state", audioContext?.state);
      if (audioContext.state === "suspended") {
        audioContext.resume(); // Resume the audio context if it's suspended
      } else {
        console.log("starting...");
        sourceNode.current.start(0); // Start the audio playback
      }

      setIsPlaying(true); // Toggle the playing state
    }
  };

  const pause = () => {
    if (audioContext && sourceNode.current && isPlaying) {
      audioContext.suspend(); // Pause the audio context
      setIsPlaying(false);
    }
  };

  const changeSong = (item: any) => {
    if (sourceNode.current && isPlaying) {
      sourceNode.current.stop(0);
      setIsPlaying(false);
    }
    setAudioObj(item);
  };

  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null);

  const playSong = (song: any) => {
    if (currentSong && currentSong.id === song.id) {
      togglePlay();
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (audioRef?.current?.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  let outlineCls = "outline outline-2 outline-orange-400";
  return screenPopCtx?.screenPop.music ? (
    <div className="bg-transparent flex justify-center mt-4">
      <div className="w-[600px]  flex flex-col justify-center items-center  rounded-lg bg-transparent ">
        <div className="w-full bg-green-200 rounded-xl">
          <div className="bg-transparent ">
            <div
              className="overflow-x-auto w-full  p-3 bg-transparent flex gap-2"
              style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
            >
              {songs.map((item: any) => {
                return (
                  <div
                    key={item.id}
                    className={clsx([
                      "px-2 py-1 shadow-lg  rounded-full h-10 outline outline-1 outline-gray-400 flex justify-center items-center",
                      item.id == audioObj.id && outlineCls,
                    ])}
                    role="button"
                  >
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                    <div
                      className="text-sm text-gray-600 whitespace-nowrap"
                      onClick={() => changeSong(item)}
                    >
                      {item.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex gap-2 py-2 px-4 justify-center flex-start rounded-b-xl bg-green-200">
          <button className="bg-white text-gray-400 text-sm rounded-full p-2">
            <BackwardIcon />
          </button>
          <button
            onClick={play}
            className={clsx([
              "bg-white text-gray-400 text-sm rounded-full p-2",
              isPlaying && outlineCls,
            ])}
          >
            <PlayIcon />
          </button>
          <button
            onClick={pause}
            className={clsx([
              "bg-white text-gray-400 text-sm rounded-full p-2",
              !isPlaying && outlineCls,
            ])}
          >
            <PauseIcon />
          </button>
          <button
            className={clsx([
              "bg-white text-gray-400 text-sm rounded-full p-2",
              // isPlaying && "outline outline-2 outline-orange-400",
            ])}
          >
            <ForwardIcon />
          </button>
        </div>
      </div>
      {/* <div className="border bg-green-100 p-2">
        <ul>
          {songs.map((song) => (
            <li
              className="border mb-2"
              key={song.id}
              onClick={() => playSong(song)}
            >
              {song.title}
            </li>
          ))}
        </ul>
        {currentSong && (
          <div>
            <audio ref={audioRef} src={currentSong.src} controls></audio>
            <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
          </div>
        )}
      </div> */}
    </div>
  ) : null;
}
