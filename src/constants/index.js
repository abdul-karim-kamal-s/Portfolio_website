const neervaImages = [
  "/assets/projects/neerva-1.jpg",
  "/assets/projects/neerva-2.jpg",
  "/assets/projects/neerva-3.jpg",
  "/assets/projects/neerva-4.jpg",
  "/assets/projects/neerva-5.jpg",
];

export const myProjects = [
  {
   id: 1,
    title:
      "Hybrid Solar-Wind Harvesting, Intelligent Solar Maintenance Rover & Smart Charging Station for Desert Applications",
    projectType: "Final Project",
    category: "Final Year Project",
    description:
      "A dual-source microgrid pairing auto-tracking solar PV with vertical-axis wind turbines, regulated via an intelligent power-conditioning unit to a shared DC bus and battery storage.",
    subDescription: [
      "Adaptive Energy-Management: Real-time power routing balancing generation, storage state, and demand to power the station or store surplus.",
      "Automated Battery Control: Autonomous charge sequencing that initiates on demand and cuts off at full capacity.",
      "Dust Detection & Cleaning Rover: Sensor-triggered autonomous rover deployed for dry/wet panel cleaning upon detecting output loss.",
    ],
    href: "https://skfb.ly/pOYuQhttps://sketchfab.com/3d-models/station-fb45b4ae8f3841249f918fe476397c1e",
    logo: "/assets/logos/esp32.png",
    image: "/assets/projects/desert.png",
    images: [
      "/assets/projects/desert.png",
       "/assets/projects/desert-rover-chassis.jpeg",
      "/assets/projects/desert-solar-panels.jpeg",
      "/assets/projects/desert-charging-station.jpeg",
      "/assets/projects/desert-ev-charging-points.jpeg",
      "/assets/projects/desert-wind-turbines.jpeg",
      "/assets/projects/desert-wind-turbine-detail.jpeg",
    ],
    tags: [
      {
        id: 1,
        name: "Renewable Energy / Microgrid",
        path: "",
      },
    ],
  },
  {
    id: 2,
    title: "Gepard Racing: Go-Kart Design and Fabrication",
    description:
      "Designed and developed a high-performance go-kart vehicle focused on competitive racing, recreational use, and reliable overall performance.",
    subDescription: [
      "Worked on the mechanical design and development of the vehicle, including the AISI 4130 alloy steel chassis, stainless-steel shafts, steering system, and braking components. ",
      "Integrated a 149 cc R15V1S engine producing 16.58 HP and 14 N·m torque, along with a 6-speed transmission and hydraulic disc braking system. ",
      "Contributed to the fabrication, assembly, testing, and overall development of the go-kart to achieve improved handling, durability, safety, and driving performance.",
    ],
    href: "",
    logo: "/assets/projects/gepard-racing-logo.png",
    titleLogo: "/assets/projects/gepard-racing-logo.png",
    image: "/assets/projects/Go-Kart.jpg",
    images: [
      "/assets/projects/Go-Kart.jpg",
      "/assets/projects/Go-Kart-1.jpg",
      "/assets/projects/go-kart-chassis-design-2.jpeg",
      "/assets/projects/go-kart-chassis-design-1.jpeg",
    ],
    tags: [
      {
        id: 1,
        name: "Gepard Racing",
        path: "/assets/projects/gepard-racing-logo.png",
      },
    ],
  },
   {
    id: 3,
    title: "NEERVA: Smart Water Purification and Quality Monitoring System",
    description:
      "•	Designed and developed a portable smart water purification system for mining-affected regions, integrating pH, TDS, turbidity, and temperature sensors with multi-stage purification and sensor-driven adaptive treatment.",
    subDescription: [
      "Implemented dual-stage water-quality verification to analyze raw and treated water, automatically activate required purification stages based on contamination levels, and detect unsafe output conditions.",
      "Integrated a centralized IoT dashboard and Digital Water Passport to track water quality, treatment history, purification efficiency, filter health, and pollution events for remote monitoring. ",
      "Implemented predictive filter-life intelligence and smart leak-detection alerts to monitor filter performance, estimate maintenance requirements, identify potential failures, and support timely intervention.",
    ],
    href: "",
    logo: "/assets/projects/neerva-logo.png",
    titleLogo: "/assets/projects/neerva-logo.png",
    image: "/assets/projects/neerva-1.jpg",
    images: neervaImages,
    tags: [
      {
        id: 1,
        name: "NEERVA",
        path: "/assets/projects/neerva-logo.png",
      },
    ],
  },
  {
    id: 4,
    title: "Ncorithm: Large Language Model (LLM) – Integration for Embodied AI",
    description:
      "Developed an embodied AI system integrating a Large Language Model (LLM) with embedded devices to enable natural voice-based interaction and control.",
    subDescription: [
      "The system captures user voice commands through a microphone and interprets them using the LLM, converting simple spoken instructions into suitable embedded operations.",
      "Integrated a microcontroller, wireless communication, and AI processing framework to transmit commands and control connected devices based on the user’s requirements.",
      "•	Implemented MCP for device communication and task execution, demonstrating how conversational AI can simplify interaction with embedded systems without requiring users to manually write code.",
    ],
    href: "https://drive.google.com/file/d/1J2YeTPgPagysvkVPHvX4GNWtq60K6PrN/view?usp=drivesdk",
    logo: "/assets/projects/ncorithm-logo.png",
    titleLogo: "/assets/projects/ncorithm-logo.png",
    image: "/assets/projects/ncorithm-llm-2.jpg",
    images: [
      "/assets/projects/ncorithm-llm-2.jpg",
      "/assets/projects/ncorithm-llm-1.jpg",
    ],
    tags: [
      {
        id: 1,
        name: "Ncorithm",
        path: "/assets/projects/ncorithm-logo.png",
      },
    ],
  },
  {
    id: 5,
    title: "Sthiraprana: Safe-Flow Intelligent Dialysis System",
    description:
      "Developed an Intelligent Dialysis System designed to ensure patient safety and treatment continuity during earthquake emergencies.",
    subDescription: [
      "Integrated earthquake, pressure, and air-bubble sensors to continuously monitor critical conditions in the dialysis bloodline. ",
      "Designed an automatic emergency blood-flow switching mechanism that reroutes or stops blood flow when abnormal conditions are detected. ",
      "Implemented a portable, battery-powered backup dialysis loop with alarms and safety mechanisms for reliable operation during emergencies.",
    ],
    href: "",
    logo: "/assets/projects/sthiraprana-logo.png",
    titleLogo: "/assets/projects/sthiraprana-logo.png",
    image: "/assets/projects/sthiraprana-dialysis-1.jpg",
    images: [
      "/assets/projects/sthiraprana-dialysis-1.jpg",
      "/assets/projects/sthiraprana-dialysis-2.jpg",
    ],
    tags: [
      {
        id: 1,
        name: "Sthiraprana",
        path: "/assets/projects/sthiraprana-logo.png",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/Matheshs777",
    icon: "/assets/logos/github.png",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mathesh-s-598ab7367",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Email",
    href: "mailto:matheshs777@gmail.com",
    icon: "/assets/socials/email.jpg",
  },
];

export const experiences = [
  {
    title: "Student Engineer — B.E. Mechanical",
    job: "Sri Krishna College of Engineering and Technology (SKCET)",
    date: "Aug 2025 - Present",
    contents: [
      "Studying core mechanical engineering concepts including Thermodynamics, Fluid Mechanics, and Kinematics.",
      "Building hands-on projects combining SolidWorks 3D modeling, ANSYS simulations, and practical lab work.",
      "Developing technical solutions leveraging industry-standard CAD software like Fusion 360 and Solid Edge.",
      "Exploring the integration of mechanical design with modern web technologies for 3D visualization.",
    ],
  },
  {
    title: "Mechanical CAD / CFD Designer",
    job: "Independent Projects",
    date: "2026 - Present",
    contents: [
      "Modeled complex automotive assemblies, including a 4-cylinder engine and suspension systems.",
      "Utilized Finite Element Analysis (FEA) to calculate safety factors and stress distributions.",
      "Deployed a live interactive web portfolio to showcase 3D mechanical models and technical capabilities.",
    ],
  },
];

export const reviews = [
  {
    name: "Academic Peer",
    username: "@skcet_colleague",
    body: "Mathesh demonstrates a deep understanding of mechanical design principles. His 3D modeling skills in SolidWorks are exceptionally precise.",
    img: "https://robohash.org/skcet1",
  },
  {
    name: "Project Advisor",
    username: "@advisor",
    body: "Excellent work on the CFD analysis. The attention to detail in the fluid flow simulations was thorough and highly accurate.",
    img: "https://robohash.org/advisor1",
  },
  {
    name: "Design Lead",
    username: "@cad_expert",
    body: "The engine assembly model shows great proficiency with parametric constraints and interference checks. Brilliant execution.",
    img: "https://robohash.org/cad_expert",
  }, 
];

export const navLinks = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Work", href: "#work" },
  { id: 4, name: "Contact", href: "#contact" },
];

export const clientReviews = reviews;
export const workExperiences = experiences;