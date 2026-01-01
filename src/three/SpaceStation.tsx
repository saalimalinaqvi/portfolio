"use client";

import { useFrame, invalidate } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/* 🔹 Preload model (GOOD practice) */
useGLTF.preload("/models/spacestation.glb");

export default function SpaceStation() {
  const groupRef = useRef<THREE.Group>(null);

  // Load GLB
  const { scene } = useGLTF("/models/spacestation.glb");

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // 🔄 Rotate on its axis
    groupRef.current.rotation.y += delta * 0.15;

    // 🌀 Optional slow orbit (comment out if not needed)
    const t = state.clock.elapsedTime;
    groupRef.current.position.x = Math.cos(t * 0.15) * 1.5;
    groupRef.current.position.z = Math.sin(t * 0.15) * 1.5;

    // 🔥 REQUIRED for frameloop="demand"
    invalidate();
  });

  return (
    <group
      ref={groupRef}
      scale={2}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    >
      <primitive object={scene} />
    </group>
  );
}
