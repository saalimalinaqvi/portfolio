"use client";

import { Stars as DreiStars } from "@react-three/drei";

export default function Stars() {
  return (
    <DreiStars
      radius={70}        // outer radius
      depth={40}         // star field depth
      count={2000}       // ⭐ reduced for GPU
      factor={3}
      saturation={0}
      fade
      speed={0.5}
    />
  );
}
