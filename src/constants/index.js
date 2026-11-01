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
      "The system combines a solar photovoltaic subsystem with automatic tracking and multiple vertical-axis wind units, with generated energy rectified, converted, regulated and protected by an intelligent power-conditioning system before reaching a common DC bus. Excess energy is stored in a monitored rechargeable battery. An adaptive energy-management controller continuously evaluates generation, battery state and demand to supply the charging station directly, charge the battery with surplus energy, or draw on stored energy when generation is insufficient. Charging starts automatically when the battery requires energy and terminates once fully charged. Environmental sensors further support a desert-specific feature that detects abnormal photovoltaic output reduction as an indication of dust accumulation, providing a maintenance signal to activate a solar maintenance rover having a mobile drive mechanism and cleaning mechanism for automated dry or wet cleaning of the photovoltaic panels.",
    href: "https://skfb.ly/pOZDJ",
    logo: "/assets/logos/",
    image: "/assets/projects/desert.png",
    images: [
      "/assets/projects/desert.png",
      "/assets/projects/desert-rover-chassis.jpeg",
      "/assets/projects/desert-solar-panels.jpeg",
      "/assets/projects/desert-wind-turbines.jpeg",
      "/assets/projects/desert-wind-turbine-detail.jpeg",
      "/assets/projects/desert-charging-station.jpeg",
      "/assets/projects/desert-ev-charging-points.jpeg",
    
   
    ],
    tags: [
      {
        id: 1,
        name: "Renewable Energy / Solar Rover",
       
      },
    ],
  },
  {
    id: 6,
    title: "Vyuha: AI-Driven Robot That Digitizes Any Place into VR",
    category: "Robotics & VR",
    description:
      "The system combines an agile bipedal mechanical chassis featuring proximal actuation and carbon-fiber linkages with a high-rate LiDAR-IMU spatial telemetry payload, with acquired motion and perceptual data filtered, stabilized and processed by an edge-accelerated spatial computing engine before being broadcast to a low-latency WebRTC streaming core. Reconstructed environmental geometry and volumetric fields are synthesized directly onboard into an interactive 1:1 photorealistic digital twin. An adaptive locomotion controller continuously evaluates ground-reaction forces, inverted pendulum equilibrium and step-clearance trajectories to stabilize the torso platform directly, optimize foot-clearance envelopes over stairs and irregular rubble or trigger dynamic balance recovery when sudden surface slips or disturbances occur. Walking starts autonomously or via teleoperation, adjusting gait kinematics dynamically to maintain level torso orientation across steep steps, narrow catwalks and broken terrain. Torso-mounted environmental and vision sensors further support an industrial-specific telepresence pipeline that converts high-frequency SLAM and neural spatial telemetry into continuous 3D Gaussian Splats, providing an immediate tactical immersion signal to stream a collision-ready, photorealistic virtual environment directly into remote Virtual Reality headsets and cloud dashboards for real-time inspection without exposing human personnel to hazardous catastrophe sites.",
    href: "https://sketchfab.com/3d-models/vyuha-bipedal-robot-for-vr-digital-twins-b02625b206b741f29352e40369b1438a",
    logo: "/assets/projects/vyuha-logo.png",
    titleLogo: "/assets/projects/vyuha-logo.png",
    image: "/assets/projects/vyuha-overview.jpeg",
    images: [
      "/assets/projects/vyuha-overview.jpeg",
      "/assets/projects/vyuha-rear-view.jpeg",
      "/assets/projects/vyuha-vr-headset.jpeg",
      "/assets/projects/vyuha-vr-controllers.jpeg",
       "/assets/projects/vyuha-robot-detail.jpeg",
      "/assets/projects/vyuha-actuator-layout.jpeg",
    ],
    tags: [
      {
        id: 1,
        name: "Robotics & VR",
        path: "/assets/projects/vyuha-logo.png",
      },
    ],
  },
  {
    id: 3,
    title: "NEERVA: Smart Water Purification and Quality Monitoring System",
    description:
      "Designed and developed a portable smart water purification system for mining-affected regions, integrating pH, TDS, turbidity, and temperature sensors with multi-stage purification and sensor-driven adaptive treatment.",
    subDescription: [
      "Implemented dual-stage water-quality verification to analyze raw and treated water, automatically activate required purification stages based on contamination levels, and detect unsafe output conditions.",
      "Integrated a centralized IoT dashboard and Digital Water Passport to track water quality, treatment history, purification efficiency, filter health, and pollution events for remote monitoring.",
      "Implemented predictive filter-life intelligence and smart leak-detection alerts to monitor filter performance, estimate maintenance requirements, identify potential failures, and support timely intervention.",
    ],
    href: "https://skfb.ly/pOZEy",
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
      "Implemented MCP for device communication and task execution, demonstrating how conversational AI can simplify interaction with embedded systems without requiring users to manually write code.",
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
    id: 2,
    title: "Gepard Racing: Go-Kart Design and Fabrication",
    description:
      "Designed and developed a high-performance go-kart vehicle focused on competitive racing, recreational use, and reliable overall performance.",
    subDescription: [
      "Worked on the mechanical design and development of the vehicle, including the AISI 4130 alloy steel chassis, stainless-steel shafts, steering system, and braking components.",
      "Integrated a 149 cc R15V1S engine producing 16.58 HP and 14 N·m torque, along with a 6-speed transmission and hydraulic disc braking system.",
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
    id: 5,
    title: "Sthiraprana: Safe-Flow Intelligent Dialysis System",
    description:
      "Developed an Intelligent Dialysis System designed to ensure patient safety and treatment continuity during earthquake emergencies.",
    subDescription: [
      "Integrated earthquake, pressure, and air-bubble sensors to continuously monitor critical conditions in the dialysis bloodline.",
      "Designed an automatic emergency blood-flow switching mechanism that reroutes or stops blood flow when abnormal conditions are detected.",
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
    href: "https://github.com/abdul-karim-kamal-s",
    icon: "/assets/logos/github.png",
  },
  {
    name: "Email",
    href: "mailto:abdulkarimkamal@gmail.com",
    icon: "/assets/socials/email.jpg",
  },
];

export const experiences = [
  {
    title: "B.E. Mechanical Engineering Student",
    job: "Sri Krishna College of Engineering and Technology (SKCET)",
    date: "Aug 2023 – Present",
    contents: [
      "Studying core mechanical engineering concepts including Thermodynamics, Fluid Mechanics and Kinematics while exploring robotics, embedded systems and automation.",
      "Developed hands-on engineering projects that combine mechanical design, electronics, embedded control and intelligent systems.",
      "Working with tools and technologies including Arduino, ESP-32, Embedded C, CAD, robotics, and AI/ML.",
    ],
  },
  {
    title: "Robotics & Embedded Systems",
    job: "",
    date: "2025 – Present",
    contents: [
      "Designed and developed interdisciplinary prototypes that integrate mechanical components with embedded electronics and intelligent control.",
      "Exploring practical applications of robotics, automation, renewable energy and AI-driven engineering systems.",
      "Converting engineering concepts into functional prototypes through iterative design, fabrication, programming and testing.",
    ],
  },
  {
    title: "Independent Engineering Projects",
    job: "",
    date: "2026 – Present",
    contents: [
      "Developed advanced prototypes focused on robotics, embedded intelligence, automation and mechanical system integration.",
      "Developed a Hybrid Solar–Wind Energy Harvesting, Intelligent Solar Maintenance Rover and Smart Charging Station for remote desert and arid environments.",
    ],
  },
];
export const reviews = [
  {
    name: "Mathesh",
    username: "@mathesh_mech",
    body: "Holding a Siemens Solid Edge certification, Mathesh brought exceptional precision to our mechanical design workflows and structural component assemblies.",
    img: "https://robohash.org/mathesh_review",
  },
  {
    name: "Arjun V.",
    username: "@arjun_cad",
    body: "During our Go-Kart design and fabrication project, Arjun applied mechanical design principles expertly to build a functional chassis, braking, and transmission system.",
    img: "https://robohash.org/arjun_review",
  },
  {
    name: "Vishesh",
    username: "@vishesh_robotics",
    body: "While working on the smart water purification system, Vishesh's ESP32 sensor integration successfully tracked pH, TDS, turbidity, and temperature in real-time.",
    img: "https://robohash.org/vishesh_review",
  },
  {
    name: "Roshan",
    username: "@roshan_dev",
    body: "Collaborating on our web portfolio interface was seamless, matching the high standards of his technical skill set and development workflow.",
    img: "https://robohash.org/roshan_review",
  },
  {
    name: "Karan Mehta",
    username: "@karan_iot",
    body: "His work designing the earthquake-resilient Safe-Flow intelligent dialysis system provided a portable, IoT-enabled healthcare solution with automated safety controls.",
    img: "https://robohash.org/karan_review",
  },
  {
    name: "Siddharth Rao",
    username: "@siddharth_embedded",
    body: "Integrating Large Language Models with physical microcontrollers for our embodied AI project enabled intuitive natural language communication and autonomous responses.",
    img: "https://robohash.org/siddharth_review",
  },
  {
    name: "Naveen Kumar",
    username: "@naveen_manufacturing",
    body: "Drawing from his industrial exposure at Titan, Ashok Leyland, and Kannan Tools & Dies, his approach to precision machining and component inspection was exceptional.",
    img: "https://robohash.org/naveen_review",
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