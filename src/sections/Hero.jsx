/* eslint-disable react/no-unknown-property */

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import HeroText from "../components/HeroText";
import { Astronaut } from "../components/Astronaut";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen w-full flex items-start md:items-center justify-between overflow-hidden bg-[#232323]"
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

      <div className="relative z-30 mx-auto flex w-full max-w-7xl flex-col items-center gap-0 px-6 pb-8 pt-16 sm:px-10 md:gap-8 md:pt-24 lg:flex-row lg:items-start lg:justify-between lg:px-16 lg:pb-12">
        <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
          <HeroText />
        </div>

        <div
          aria-hidden="true"
          className="h-[550px] min-h-[550px] w-full shrink-0 lg:h-[700px] lg:min-h-0 lg:w-1/2"
        >
          <Canvas
            camera={{ position: [0, 0, 6], fov: 45 }}
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
    </section>
  );
};

export default Hero;
