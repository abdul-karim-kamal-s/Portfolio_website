/* eslint-disable react/no-unknown-property */

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import HeroText from "../components/HeroText";
import { Astronaut } from "../components/Astronaut";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-between overflow-hidden bg-[#232323]"
      id="home"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <img
          src="/assets/hero-circuit.png"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-y-0 left-0 z-0 w-full bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none sm:w-1/3 lg:w-1/4" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 pt-24 pb-12">
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <HeroText />
        </div>

        <div className="w-full lg:w-1/2 h-[450px] sm:h-[550px] lg:h-[650px] flex items-center justify-center pointer-events-auto">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            gl={{ alpha: true, antialias: true }}
            onCreated={({ gl }) => gl.setClearColor("#000000", 0)}
          >
            <Suspense fallback={null}>
              <Environment preset="city" />
              <ambientLight intensity={0.08} />
              <directionalLight
                color="white"
                position={[0, 5, 2]}
                intensity={2.5}
              />
              <directionalLight
                color="#ff102a"
                position={[0, -4, -3]}
                intensity={4}
              />
              <pointLight
                color="#ff102a"
                position={[0, -1.5, -2]}
                intensity={12}
                distance={10}
              />
              <Astronaut />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 h-full w-full"
        viewBox="0 0 710 490"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <clipPath id="foreground-human-hand">
            <path d="M550 206 527 207 501 207 480 209 461 211 445 216 429 224 415 229 399 227 385 228 372 233 366 239 371 245 380 247 378 263 380 275 386 280 392 276 396 257 402 253 400 276 403 289 409 293 414 286 412 261 419 253 430 261 438 269 446 269 450 264 439 250 455 244 477 244 503 245 529 244 550 247Z" />
          </clipPath>
        </defs>
        <image
          href="/assets/hero-circuit.png"
          width="710"
          height="490"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#foreground-human-hand)"
        />
      </svg>
    </section>
  );
};

export default Hero;
