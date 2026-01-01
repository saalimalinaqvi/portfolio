"use client";

import { Canvas, useFrame, useThree, invalidate } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

import Lights from "./Lights";
import SpaceStation from "./SpaceStation";
import Stars from "./Stars";
import Particles from "./Particles";
import Controls from "./Controls";

/* ---------------- SCENE CONTENT ---------------- */

function SceneContent() {
  const { gl } = useThree();
  const visibleRef = useRef(true);
  const [ready, setReady] = useState(false);

  /* 🔴 VISIBILITY + FORCE RENDER */
  useEffect(() => {
    const onVisibilityChange = () => {
      const visible = document.visibilityState === "visible";
      visibleRef.current = visible;
      if (visible) invalidate();
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  /* 🔴 WEBGL CONTEXT LOSS */
  useEffect(() => {
    const canvas = gl.domElement;

    const onLost = (e: Event) => e.preventDefault();
    const onRestored = () => {
      gl.setSize(window.innerWidth, window.innerHeight);
      gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      invalidate();
    };

    canvas.addEventListener("webglcontextlost", onLost);
    canvas.addEventListener("webglcontextrestored", onRestored);

    return () => {
      canvas.removeEventListener("webglcontextlost", onLost);
      canvas.removeEventListener("webglcontextrestored", onRestored);
    };
  }, [gl]);

  /* 🔴 DEMAND RENDER LOOP */
  useFrame(() => {
    if (!visibleRef.current) return;
  });

  /* 🔴 MARK SCENE READY (remove fallback) */
  useEffect(() => {
    const t = setTimeout(() => {
      setReady(true);
      invalidate();
    }, 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Fallback gradient while GPU restores */}
      {!ready && (
        <mesh position={[0, 0, -5]}>
          <planeGeometry args={[20, 20]} />
          <meshBasicMaterial>
            <canvasTexture
              attach="map"
              image={createGradientCanvas()}
            />
          </meshBasicMaterial>
        </mesh>
      )}

      <Lights />
      <Stars />
      <Particles />
      <SpaceStation />
      <Controls />
    </>
  );
}

/* ---------------- CANVAS ROOT ---------------- */

export default function Scene() {
  return (
    <Canvas
      frameloop="demand"
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      dpr={[1, 2]}
      camera={{ position: [0, 4, 12], fov: 50 }}
      onCreated={({ gl }) => {
        gl.setClearColor("#000000", 1);
      }}
    >
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  );
}

/* ---------------- GRADIENT FALLBACK ---------------- */

function createGradientCanvas() {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 256;
  const ctx = c.getContext("2d")!;
  const g = ctx.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, "#020617");
  g.addColorStop(1, "#000000");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  return c;
}
