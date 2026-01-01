"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";

export default function Particles() {
  const positions = useMemo(() => {
    const arr = new Float32Array(3000 * 3);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = (Math.random() - 0.5) * 500;
    }
    return arr;
  }, []);

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.12}
        depthWrite={false}
      />
    </Points>
  );
}
