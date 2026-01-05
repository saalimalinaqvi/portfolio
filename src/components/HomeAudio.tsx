"use client";

import { useEffect, useRef } from "react";

export default function HomeAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem("audio_played") === "true") return;

    const unlockAudio = () => {
      if (!audioRef.current) return;

      audioRef.current
        .play()
        .then(() => {
          sessionStorage.setItem("audio_played", "true");
          window.removeEventListener("click", unlockAudio);
          window.removeEventListener("touchstart", unlockAudio);
        })
        .catch(() => {
          // browser still blocking, ignore silently
        });
    };

    // 🔓 wait for first user interaction
    window.addEventListener("click", unlockAudio);
    window.addEventListener("touchstart", unlockAudio);

    return () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/audio/intro.mp3"
      preload="auto"
    />
  );
}
