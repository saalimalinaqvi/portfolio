"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function SpaceStation() {
  const ref = useRef<THREE.Group>(null!);
  const { scene } = useGLTF("/models/spacestation.glb");

  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh && child.material) {
        child.material.emissiveIntensity = 1.2;
      }
    });
  }, [scene]);

  // Very slow orbital drift (space feel)
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.1) * 0.6;
    ref.current.rotation.y += 0.0006;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={6}
      position={[0, 0, 0]}
    />
  );
}

useGLTF.preload("/models/spacestation.glb");
