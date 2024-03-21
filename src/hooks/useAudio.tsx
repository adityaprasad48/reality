import { useState, useEffect } from "react";

export const useWebAudio = (audioUrl) => {
  const [audioContext, setAudioContext] = useState(null);
  const [sourceNode, setSourceNode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const initAudio = async () => {
      try {
        // Create an AudioContext instance
        const context = new AudioContext();
        setAudioContext(context);

        // Fetch audio data
        const response = await fetch(audioUrl);
        const arrayBuffer = await response.arrayBuffer();

        // Decode audio data
        const audioBuffer = await context.decodeAudioData(arrayBuffer);

        // Create a source node
        const source = context.createBufferSource();
        source.buffer = audioBuffer;

        // Connect the source node to the destination (speakers)
        source.connect(context.destination);

        setSourceNode(source);
      } catch (error) {
        console.error("Error initializing audio:", error);
      }
    };

    initAudio();

    // Cleanup
    return () => {
      if (audioContext) {
        audioContext.close();
      }
    };
  }, [audioUrl]);

  const play = () => {
    if (sourceNode && audioContext && !isPlaying) {
      sourceNode.start(0);
      setIsPlaying(true);
    }
  };

  console.log({ sourceNode });

  const stop = () => {
    if (sourceNode && audioContext && isPlaying) {
      sourceNode.stop(0);
      setIsPlaying(false);
    }
  };

  return { play, stop, isPlaying };
};
