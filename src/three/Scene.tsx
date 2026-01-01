"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import SpaceStation from "./SpaceStation";
import Lights from "./Lights";
import Stars from "./Stars";

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 40, 120], // FULL ZOOM-OUT
        fov: 40,
        near: 0.1,
        far: 3000,
      }}
      gl={{ antialias: true }}
    >
      <color attach="background" args={["#000008"]} />

      <Stars />
      <Lights />

      <OrbitControls
        enableRotate
        enableZoom
        enablePan
        enableDamping
        dampingFactor={0.05}
        minDistance={60}
        maxDistance={400}
        rotateSpeed={0.3}
        zoomSpeed={0.8}
        panSpeed={0.6}
      />

      <Suspense fallback={null}>
        <SpaceStation />
      </Suspense>
    </Canvas>
  );
}
