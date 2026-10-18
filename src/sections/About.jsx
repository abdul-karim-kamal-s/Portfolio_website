import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="c-space section-spacing scroll-mt-20 sm:scroll-mt-24" id="about">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1: Profile & Resume */}
        <div className="flex items-start md:items-end grid-default-color grid-1 about-card relative h-auto min-h-[24rem] md:h-full overflow-hidden rounded-2xl">
          <img
            src="/assets/card.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#232323]/80 via-[#232323]/45 to-[#232323]/25" />
          <div className="z-10 p-4 sm:p-5">
            <p className="headtext about-card-heading-white">Hi, I&apos;m Abdul</p>
            <p className="subtext">
              As a B.E. Mechanical Engineering student at SKCET, I am passionate about building intelligent systems where mechanics meets electronics and robotics. I enjoy turning ideas into functional prototypes through automation, embedded systems, mechanical design and hands-on engineering.
            </p>

            {/* Download Resume Button */}
            <div className="mt-4">
              <a
                href="/assets/projects/Abdul_Karim_Kamal_S_Resume.pdf"
                download="Abdul_Karim_Kamal_S_Resume.pdf"
                className="inline-block px-6 py-2.5 bg-sky-300 hover:bg-sky-200 text-black border border-sky-300 hover:border-sky-200 font-semibold rounded-full transition-all duration-300 shadow-[0_3px_16px_rgba(56,189,248,0.2)] hover:shadow-[0_4px_20px_rgba(56,189,248,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#191919] cursor-pointer text-center text-sm"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Grid 2: Core Engineering & Robotics Cards */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <p className="flex items-end text-5xl text-sky-200 font-bold select-none opacity-40">
              Robotics & Embedded Systems
            </p>
            <Card
              style={{ rotate: "75deg", top: "28%", left: "18%" }}
              text="ROBOTICS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "58%", left: "42%" }}
              text="EMBEDDED SYSTEMS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "28%", left: "70%" }}
              text="ESP32 / IoT"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "52%", left: "2%" }}
              text="SOLIDWORKS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "12%", left: "36%" }}
              text="Artificial Intelligence"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "68%", left: "72%" }}
              text="FUSION 360"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "72%", left: "22%" }}
              text="AUTOCAD"
              containerRef={grid2Container}
            />

            {/* Software Logo Image Cards */}
            <Card
              style={{ rotate: "15deg", top: "6%", left: "68%" }}
              image="assets/logos/autocad.svg"
              alt="AutoCAD"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "35%", left: "78%" }}
              image="assets/logos/fusion.png"
              alt="Fusion 360"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "25deg", top: "70%", left: "5%" }}
              image="assets/logos/soildworks.png"
              alt="SolidWorks"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "12deg", top: "10%", left: "78%", width: "3.5rem", padding: "4px", backgroundColor: "white", borderRadius: "8px" }}
              image="/assets/logos/arduino.webp"
              alt="Arduino"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-8deg", top: "46%", left: "24%", width: "3.5rem", padding: "4px", backgroundColor: "white", borderRadius: "8px" }}
              image="/assets/logos/c-language.png"
              alt="C programming"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-12deg", top: "70%", left: "52%", width: "3.5rem", padding: "4px", backgroundColor: "white", borderRadius: "8px" }}
              image="/assets/logos/esp32-chip.png"
              alt="ESP32"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "10deg", top: "38%", left: "58%", width: "3.5rem", padding: "4px", backgroundColor: "white", borderRadius: "8px" }}
              image="/assets/logos/ai-chip.jpg"
              alt="Artificial intelligence"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3: Location / Globe */}
        <div className="grid-black-color grid-3 about-card relative overflow-hidden">
          <div className="z-10 w-[50%]">
            <p className="headtext text-sky-200">Location & Collaboration</p>
            <p className="subtext">
              Based in Coimbatore, Tamil Nadu, India. Open to robotics engineering roles,
              smart automation projects and multidisciplinary research worldwide.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4: Contact / CTA */}
        <div className="grid-special-color grid-4 about-card">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext about-card-heading-white">
              Looking to develop intelligent systems or robotics solutions?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5: Tech Stack & Experience */}
        <div className="grid-default-color grid-5 about-card relative overflow-hidden">
          <div className="z-10 w-[50%]">
            <p className="headtext text-sky-200">Robotics, Embedded & CAD Stack</p>
            <p className="subtext">
              Hands-on expertise across AutoCAD, Fusion 360, Solid Edge, ESP32 microcontrollers, autonomous control and Embodied AI. Certified Junior Robotic Program Operator with industrial training across Titan, Ashok Leyland and Maruti Suzuki Arena.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;