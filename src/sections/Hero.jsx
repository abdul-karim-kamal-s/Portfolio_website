import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import { Astronaut } from "../components/Astronaut";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-between overflow-hidden bg-[#232323]" id="home">
      {/* Background & Vignette Overlays */}
      <div aria-hidden="true" className="absolute inset-0">
        <img
          src="/assets/hero-circuit.png"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        {/* Deep black shadow on the left 20% to 30% for text contrast */}
        <div className="absolute inset-y-0 left-0 z-0 w-full sm:w-1/3 lg:w-1/4 bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none" />
      </div>

      {/* Grid & Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 pt-24 pb-12">
        {/* Left: Typography & Headings */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <HeroText />
        </div>

        {/* Right: Floating 3D Model Viewport */}
        <div className="w-full lg:w-1/2 h-[450px] sm:h-[550px] lg:h-[650px] flex items-center justify-center pointer-events-auto">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            gl={{ alpha: true, antialias: true }}
            onCreated={({ gl }) => gl.setClearColor("#000000", 0)}
          >
            <Suspense fallback={null}>
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