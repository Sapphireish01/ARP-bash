import { useEffect, useRef } from "react";

export default function AudioPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current?.play();
  }, []);

  return (
    <audio ref={audioRef} src="public/Assets/audio/B-song.mp3" autoPlay />
  );
}