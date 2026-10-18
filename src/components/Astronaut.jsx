/* eslint-disable react/no-unknown-property, react/prop-types */

import { useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const MODEL_PATH = "/raiden.glb";

export function Astronaut({
  position,
  scale = 7.5,
}) {
  const modelRef = useRef(null);
  const { scene } = useGLTF(MODEL_PATH);
  const { viewport, size } = useThree();
  const isMobile = size.width < 768;
  const modelPosition =
    position ?? [isMobile ? 0 : viewport.width * 0.22, isMobile ? 0.35 : 1.8, 0];
  const modelScale = isMobile ? Math.min(scale, 4.8) : scale;

  useFrame((state) => {
    if (!modelRef.current) return;

    const targetX = 0.35 + state.pointer.x * 0.2;
    const targetY = state.pointer.y * 0.15;

    modelRef.current.rotation.y = THREE.MathUtils.lerp(
      modelRef.current.rotation.y,
      targetX,
      0.05,
    );
    modelRef.current.rotation.x = THREE.MathUtils.lerp(
      modelRef.current.rotation.x,
      targetY,
      0.05,
    );
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.08}
      floatIntensity={0.25}
      floatingRange={[-0.15, 0.15]}
    >
      <primitive
        ref={modelRef}
        object={scene}
        position={modelPosition}
        rotation={[0.35, Math.PI / 2, Math.PI + 0.18]}
        scale={modelScale}
      />
    </Float>
  );
}

useGLTF.preload(MODEL_PATH);
