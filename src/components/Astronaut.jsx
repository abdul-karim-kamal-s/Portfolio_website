/* eslint-disable react/no-unknown-property, react/prop-types */

import { useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MODEL_PATH = "/raiden.glb";

export function Astronaut({
  position = [0.8, 2, 0],
  scale = 6.5,
}) {
  const modelRef = useRef(null);
  const { scene } = useGLTF(MODEL_PATH);

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
      speed={2}
      rotationIntensity={0.2}
      floatIntensity={0.4}
      floatingRange={[-0.1, 0.1]}
    >
      <primitive
        ref={modelRef}
        object={scene}
        position={position}
        rotation={[0.35, Math.PI / 2, Math.PI + 0.18]}
        scale={scale}
      />
    </Float>
  );
}

useGLTF.preload(MODEL_PATH);
