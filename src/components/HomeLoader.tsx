"use client";

import { useEffect, useState } from "react";

type Props = {
  onFinish: () => void;
};

export default function HomeLoader({ onFinish }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("home_loaded");

    if (hasLoaded) return;

    setVisible(true);

    const timer = setTimeout(() => {
      sessionStorage.setItem("home_loaded", "true");
      setVisible(false);
      onFinish();
    }, 5000); // ⏱️ 5 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <video
        src="/loader.mp4"
        autoPlay
        muted
        playsInline
        className="h-full w-full object-cover"
      />
    </div>
  );
}
