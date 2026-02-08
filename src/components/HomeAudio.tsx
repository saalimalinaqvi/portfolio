"use client";

import { useEffect, useRef } from "react";

export default function HomeAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Check if audio has already played in this browser
    if (localStorage.getItem("intro_audio_played") === "true") return;

    const playAudio = () => {
      if (!audioRef.current) return;

      audioRef.current
        .play()
        .then(() => {
          // Set flag so it never plays again
          localStorage.setItem("intro_audio_played", "true");

          // Cleanup listeners after successful start
          window.removeEventListener("mousedown", playAudio);
          window.removeEventListener("touchstart", playAudio);
          window.removeEventListener("keydown", playAudio);
        })
        .catch(() => {
          // Browser blocked autoplay, wait for interaction
        });
    };

    // Try playing immediately
    playAudio();

    // Fallback listeners for interaction unlock
    window.addEventListener("mousedown", playAudio);
    window.addEventListener("touchstart", playAudio);
    window.addEventListener("keydown", playAudio);

    return () => {
      window.removeEventListener("mousedown", playAudio);
      window.removeEventListener("touchstart", playAudio);
      window.removeEventListener("keydown", playAudio);
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
