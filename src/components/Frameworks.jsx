import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "autocad.svg",
    "creo.svg",
    "FreeCAD.svg",
    "fusion.svg",
    "onshape.svg",
    "Python-logo.svg",
    "Siemens-NX.svg",
    "soildedge.svg",
    "Matlab.svg",
    "soildworkslogo.svg",
    "arduino.webp",
    "c-language.png",
    "esp32-chip.png",
    "ai-chip.jpg",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      {/* Outer Ring */}
      <OrbitingCircles iconSize={40}>
        {skills.map((skill) => (
          <Icon key={skill} src={`/assets/logos/${skill}`} alt={skill} />
        ))}
      </OrbitingCircles>

      {/* Inner Ring (Reversed) */}
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill) => (
          <Icon key={skill} src={`/assets/logos/${skill}`} alt={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, alt }) => (
  <img 
    src={src}
    alt={alt}
    className="duration-200 rounded-sm hover:scale-110 object-contain" 
    onError={(e) => (e.target.style.display = "none")}
  />
);