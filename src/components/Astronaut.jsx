/* eslint-disable react/no-unknown-property, react/prop-types */

import { useEffect, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const MODEL_PATH = "/raiden.glb";

// The starting pose
const BASE_ROTATION = [0, 0.35, Math.PI + 0.18];

// Layout
const NAV_PX = 80;       // navbar height in px
const TOP_GAP_PX = 10;   // space kept between the navbar and the model
const BOTTOM_GAP = 0.1;  // space kept at the bottom (world units)
const RIGHT_GAP = 0.3;   // space kept at the right edge (world units)

// Drag rotation
const DRAG_SPEED = 0.01;
const INERTIA = 0.94;
const ALLOW_TILT = true;
const TILT_LIMIT = 0.6;  // max up/down tilt (radians)
const HIT_PADDING = 20;

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
  const spinRef = useRef(null);

  const drag = useRef({ active: false, x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const startTime = useRef(null);
  const introDone = useRef(false);
  const idleAmount = useRef(0);

  const { scene } = useGLTF(MODEL_PATH);
  const { viewport, size, camera, gl } = useThree();
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

  // Work out scale and position so the model always fits under the navbar
  const topMargin =
    ((NAV_PX + TOP_GAP_PX) / size.height) * viewport.height + IDLE_BOB + 0.05;
  const bottomMargin = BOTTOM_GAP + IDLE_BOB;
  const availableHeight = viewport.height - topMargin - bottomMargin;
  const modelHeight1 = Math.max(bounds.max.y - bounds.min.y, 0.0001);

  const wantedScale = isMobile ? Math.min(scale, 5) : scale;
  const modelScale = Math.min(wantedScale, availableHeight / modelHeight1);

  const fitY = viewport.height / 2 - topMargin - bounds.max.y * modelScale;
  const wantedX = isMobile ? 0 : viewport.width * 0.27;
  const maxX = viewport.width / 2 - Math.max(bounds.max.x, 0) * modelScale - RIGHT_GAP;
  const modelPosition = position ?? [Math.min(wantedX, maxX), fitY, 0];

  // Click and drag rotation
  useEffect(() => {
    const box = new THREE.Box3();
    const corner = new THREE.Vector3();

    const isOverModel = (e) => {
      if (!spinRef.current) return false;
      spinRef.current.updateWorldMatrix(true, true);
      box.setFromObject(spinRef.current);
      if (box.isEmpty()) return false;

      const rect = gl.domElement.getBoundingClientRect();
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

      for (let i = 0; i < 8; i++) {
        corner.set(
          i & 1 ? box.max.x : box.min.x,
          i & 2 ? box.max.y : box.min.y,
          i & 4 ? box.max.z : box.min.z,
        ).project(camera);
        const px = (corner.x * 0.5 + 0.5) * rect.width + rect.left;
        const py = (-corner.y * 0.5 + 0.5) * rect.height + rect.top;
        minX = Math.min(minX, px); maxX = Math.max(maxX, px);
        minY = Math.min(minY, py); maxY = Math.max(maxY, py);
      }

      return (
        e.clientX >= minX - HIT_PADDING && e.clientX <= maxX + HIT_PADDING &&
        e.clientY >= minY - HIT_PADDING && e.clientY <= maxY + HIT_PADDING
      );
    };

    const onDown = (e) => {
      if (!introDone.current || !isOverModel(e)) return;
      drag.current = { active: true, x: e.clientX, y: e.clientY };
      velocity.current = { x: 0, y: 0 };
      document.body.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
    };

    const onMove = (e) => {
      if (!drag.current.active) {
        document.body.style.cursor =
          introDone.current && isOverModel(e) ? "grab" : "auto";
        return;
      }
      if (!spinRef.current) return;

      const dx = e.clientX - drag.current.x;
      const dy = e.clientY - drag.current.y;
      drag.current.x = e.clientX;
      drag.current.y = e.clientY;

      velocity.current.y = dx * DRAG_SPEED;
      velocity.current.x = ALLOW_TILT ? dy * DRAG_SPEED : 0;

      spinRef.current.rotation.y += velocity.current.y; // full turns, no limit
      spinRef.current.rotation.x = THREE.MathUtils.clamp(
        spinRef.current.rotation.x + velocity.current.x,
        -TILT_LIMIT,
        TILT_LIMIT,
      );
    };

    const onUp = () => {
      if (!drag.current.active) return;
      drag.current.active = false;
      document.body.style.cursor = "auto";
      document.body.style.userSelect = "";
    };

    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [camera, gl]);

  useFrame((state, delta) => {
    const intro = introRef.current;
    const idle = idleRef.current;
    const spin = spinRef.current;
    if (!intro || !idle || !spin) return;

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

    // 2) Drag inertia
    if (!drag.current.active) {
      spin.rotation.y += velocity.current.y;
      spin.rotation.x = THREE.MathUtils.clamp(
        spin.rotation.x + velocity.current.x,
        -TILT_LIMIT,
        TILT_LIMIT,
      );
      velocity.current.y *= INERTIA;
      velocity.current.x *= INERTIA;
      if (Math.abs(velocity.current.y) < 0.0001) velocity.current.y = 0;
      if (Math.abs(velocity.current.x) < 0.0001) velocity.current.x = 0;
    }

    // 3) Idle movement, only when resting
    const resting =
      introDone.current &&
      !drag.current.active &&
      Math.abs(velocity.current.x) < 0.002 &&
      Math.abs(velocity.current.y) < 0.002;

    idleAmount.current = THREE.MathUtils.lerp(
      idleAmount.current,
      resting ? 1 : 0,
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
          <group ref={spinRef} rotation-order="YXZ">
            <primitive
              object={scene}
              rotation={BASE_ROTATION}
              scale={modelScale}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(MODEL_PATH);