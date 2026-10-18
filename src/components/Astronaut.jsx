/* eslint-disable react/no-unknown-property, react/prop-types */

import { useEffect, useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const MODEL_PATH = "/raiden.glb";

// The pose you actually saw in the reference
const BASE_ROTATION = [0, 0.35, Math.PI + 0.18];

const ROTATE_Y = 0.9;   // left/right strength
const ROTATE_X = 0.4;   // up/down strength
const SMOOTHING = 0.08; // lower = smoother

export function Astronaut({ position, scale = 9 }) {
  const modelRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { scene } = useGLTF(MODEL_PATH);
  const { viewport, size } = useThree();
  const isMobile = size.width < 768;

  const modelPosition =
    position ?? [
      isMobile ? 0 : viewport.width * 0.27, // right side
      isMobile ? 0.2 : 1.95,                // lowered so the feet clear the navbar (was 2.3)
      0,
    ];
  const modelScale = isMobile ? Math.min(scale, 5) : scale;

  // Track the mouse over the whole window, not just the canvas
  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(() => {
    if (!modelRef.current) return;

    const targetY = BASE_ROTATION[1] + mouse.current.x * ROTATE_Y;
    const targetX = BASE_ROTATION[0] - mouse.current.y * ROTATE_X;

    modelRef.current.rotation.y = THREE.MathUtils.lerp(
      modelRef.current.rotation.y,
      targetY,
      SMOOTHING,
    );
    modelRef.current.rotation.x = THREE.MathUtils.lerp(
      modelRef.current.rotation.x,
      targetX,
      SMOOTHING,
    );
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0}
      floatIntensity={0.25}
      floatingRange={[-0.15, 0.15]}
    >
      <primitive
        ref={modelRef}
        object={scene}
        position={modelPosition}
        rotation={BASE_ROTATION}
        scale={modelScale}
      />
    </Float>
  );
}

useGLTF.preload(MODEL_PATH);