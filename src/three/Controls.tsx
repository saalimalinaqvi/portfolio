"use client";

import { OrbitControls } from "@react-three/drei";

export default function Controls() {
  return (
    <OrbitControls
      enableRotate
      enableZoom
      enablePan
      enableDamping
      dampingFactor={0.06}
      minDistance={60}
      maxDistance={400}
      minPolarAngle={Math.PI / 3.5}
      maxPolarAngle={Math.PI / 2}
      rotateSpeed={0.3}
      zoomSpeed={0.8}
      panSpeed={0.6}
    />
  );
}
