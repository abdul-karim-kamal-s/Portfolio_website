/* eslint-disable react/no-unknown-property, react/prop-types */

import { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const MODEL_PATH = "/raiden.glb";

// The starting pose
const BASE_ROTATION = [0, 0.35, Math.PI + 0.18];

// Layout
const BOTTOM_GAP = 0.1;  // space kept at the bottom (world units)
const RIGHT_GAP = 0.3;   // space kept at the right edge (world units)
const MOBILE_EDGE_GAP_RATIO = 0.03;

// Intro animation
const INTRO_DELAY = 0.3;
const INTRO_DURATION = 2.0;
const INTRO_SPINS = 1;
const INTRO_FROM_X = 0.55;  // start distance to the right (fraction of screen width)
const INTRO_FROM_Y = -1.0;  // negative = rises from below, never passes behind the navbar

// Idle movement when resting
const IDLE_BOB = 0.1;
const IDLE_DRIFT = 0.05;
const IDLE_SWAY = 0.06;
const IDLE_TILT = 0.025;
const IDLE_SPEED = 1;

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const easeOutBack = (t) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

export function Astronaut({ position, scale = 11 }) {
  const introRef = useRef(null);
  const idleRef = useRef(null);
  const startTime = useRef(null);
  const introDone = useRef(false);
  const idleAmount = useRef(0);

  const { scene } = useGLTF(MODEL_PATH);
  const { viewport, size } = useThree();
  const isMobile = size.width < 768;

  // Model bounds at scale 1 in its starting pose, relative to its pivot
  const bounds = useMemo(() => {
    const prevScale = scene.scale.clone();
    const prevRot = scene.rotation.clone();
    scene.scale.setScalar(1);
    scene.rotation.set(...BASE_ROTATION);
    scene.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(scene);
    scene.scale.copy(prevScale);
    scene.rotation.copy(prevRot);
    scene.updateMatrixWorld(true);
    return box;
  }, [scene]);

  // Fit the full model bounds inside this Canvas, including its idle motion.
  const availableHeight = viewport.height - BOTTOM_GAP * 2 - IDLE_BOB * 2;
  const modelHeight1 = Math.max(bounds.max.y - bounds.min.y, 0.0001);
  const modelWidth1 = Math.max(bounds.max.x - bounds.min.x, 0.0001);

  const horizontalGap = isMobile
    ? viewport.width * MOBILE_EDGE_GAP_RATIO
    : RIGHT_GAP;
  const availableWidth = viewport.width - horizontalGap * 2 - IDLE_DRIFT * 2;
  const modelScale = Math.min(
    scale,
    availableHeight / modelHeight1,
    availableWidth / modelWidth1,
  );

  const fitY = -((bounds.min.y + bounds.max.y) / 2) * modelScale;
  const minX =
    -viewport.width / 2 - bounds.min.x * modelScale + horizontalGap;
  const maxX =
    viewport.width / 2 - bounds.max.x * modelScale - horizontalGap;
  const wantedX = isMobile ? 0 : viewport.width * 0.12;
  const modelPosition = position ?? [
    THREE.MathUtils.clamp(wantedX, minX, maxX),
    fitY,
    0,
  ];

  useFrame((state, delta) => {
    const intro = introRef.current;
    const idle = idleRef.current;
    if (!intro || !idle) return;

    const now = state.clock.elapsedTime;
    if (startTime.current === null) startTime.current = now;
    const elapsed = now - startTime.current;

    // 1) Intro: slide in from the right, rise from below, spin, grow, settle
    const p = clamp01((elapsed - INTRO_DELAY) / INTRO_DURATION);
    const eCubic = easeOutCubic(p);
    const eBack = easeOutBack(p);

    if (elapsed < INTRO_DELAY) {
      intro.scale.setScalar(0.0001);
    } else {
      intro.position.x = (1 - eBack) * viewport.width * INTRO_FROM_X;
      intro.position.y = (1 - eCubic) * INTRO_FROM_Y;
      intro.rotation.y = (1 - eCubic) * Math.PI * 2 * INTRO_SPINS;
      intro.scale.setScalar(0.4 + 0.6 * eCubic);
    }
    if (p >= 1) introDone.current = true;

    // 2) Small idle movement once the intro has finished
    idleAmount.current = THREE.MathUtils.lerp(
      idleAmount.current,
      introDone.current ? 1 : 0,
      1 - Math.exp(-delta * 2.5),
    );

    const a = idleAmount.current;
    const t = now * IDLE_SPEED;
    idle.position.x = Math.sin(t * 0.6) * IDLE_DRIFT * a;
    idle.position.y = Math.sin(t * 1.1) * IDLE_BOB * a;
    idle.rotation.y = Math.sin(t * 0.7) * IDLE_SWAY * a;
    idle.rotation.z = Math.sin(t * 0.9) * IDLE_TILT * a;
  });

  return (
    <group position={modelPosition}>
      <group ref={introRef} scale={0.0001}>
        <group ref={idleRef}>
          <primitive
            object={scene}
            rotation={BASE_ROTATION}
            scale={modelScale}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(MODEL_PATH);