"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";

export default function Stars() {
  const positions = useMemo(() => {
    const arr = new Float32Array(6000 * 3);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = (Math.random() - 0.5) * 2000;
    }
    return arr;
  }, []);

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        color="#ffffff"
        size={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}
