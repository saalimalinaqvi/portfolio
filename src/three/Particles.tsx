"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function Particles() {
  const pointsRef = useRef<THREE.Points>(null);

  // Create particle positions once
  const positions = useMemo(() => {
    const count = 400;
    const array = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      array[i] = (Math.random() - 0.5) * 30;
    }

    return array;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        {/* ✅ CORRECT, TS-SAFE WAY */}
        <bufferAttribute args={[positions, 3]} />
      </bufferGeometry>

      <pointsMaterial
        color="#22d3ee"
        size={0.05}
        transparent
        opacity={0.5}
        depthWrite={false}
      />
    </points>
  );
}
