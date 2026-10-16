import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import { Astronaut } from "../components/Astronaut";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-between overflow-hidden bg-[#111111]" id="home">
      {/* 1. Full-screen Background Illustration */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-circuit.png"
          alt="Hero Background"
          className="w-full h-full object-cover object-center grayscale contrast-125 brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
      </div>

      {/* 2. Grid & Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 pt-24 pb-12">
        {/* Left: Typography & Headings */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <HeroText />
        </div>

        {/* Right: Floating 3D Model Viewport */}
        <div className="w-full lg:w-1/2 h-[450px] sm:h-[550px] lg:h-[650px] flex items-center justify-center pointer-events-auto">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <Suspense fallback={null}>
              {/* These are Three.js JSX elements, not DOM attributes. */}
              {/* eslint-disable-next-line react/no-unknown-property */}
              <ambientLight intensity={1.5} />
              {/* eslint-disable-next-line react/no-unknown-property */}
              <directionalLight position={[5, 5, 5]} intensity={2} />
              <Astronaut position={[0.8, -1, 0]} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;