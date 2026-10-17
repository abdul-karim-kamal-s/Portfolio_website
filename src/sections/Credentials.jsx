const Credentials = () => {
  const certificateCategories = [
    {
      title: "Infosys Springboard",
      certificates: [
        {
          title: "Data Structures and Algorithms using Java",
          src: "/assets/certificates/infosys-data-structures.pdf",
          preview: "/assets/certificates/previews/infosys-data-structures.jpg",
        },
        {
          title: "Programming using Java",
          src: "/assets/certificates/infosys-programming-java.pdf",
          preview: "/assets/certificates/previews/infosys-programming-java.jpg",
        },
        {
          title: "Programming in C++ Course",
          src: "/assets/certificates/infosys-cpp-course.pdf",
          preview: "/assets/certificates/previews/infosys-cpp-course.jpg",
        },
        {
          title: "TechA Python Developer Certification",
          src: "/assets/certificates/infosys-techa-python.pdf",
          preview: "/assets/certificates/previews/infosys-techa-python.jpg",
        },
        {
          title: "Basics of Python",
          src: "/assets/certificates/infosys-python-basics.pdf",
          preview: "/assets/certificates/previews/infosys-python-basics.jpg",
        },
      ],
    },
    {
      title: "NPTEL Online Certifications",
      certificates: [
         {
          title: "Stress Management",
          src: "/assets/certificates/stress-management.pdf",
          preview: "/assets/certificates/previews/stress-management.jpg",
        },
         {
          title: "Enhancing Soft Skills and Personality",
          src: "/assets/certificates/enhancing-soft-skills-and-personality.pdf",
          preview: "/assets/certificates/previews/enhancing-soft-skills-and-personality.jpg",
        },
        {
          title: "Organizational Behaviour",
          src: "/assets/certificates/organizational-behaviour.pdf",
          preview: "/assets/certificates/previews/organizational-behaviour.jpg",
        },   
      ],
    },
    {
      title: "Technical & Skill Development",
      certificates: [
        {
          title: "Generative AI Mastermind",
          src: "/assets/certificates/outskill-course.pdf",
          preview: "/assets/certificates/previews/outskill-course.jpg",
        },
        {
          title: "Nestlé E-learning | Resilience",
          src: "/assets/certificates/nestle-resilience-course.pdf",
          preview: "/assets/certificates/previews/nestle-resilience-course.jpg",
        },
        {
          title: "MySQL DBMS",
          src: "/assets/certificates/dbms-online-course.pdf",
          preview: "/assets/certificates/previews/dbms-online-course.jpg",
        },
        {
          title: "UiPath Automation Explorer for Students",
          src: "/assets/certificates/skillathon-course.pdf",
          preview: "/assets/certificates/previews/skillathon-course.jpg",
        },
        {
          title: "Cybersecurity Course",
          details: "Cisco · 2024",
          src: "/assets/certificates/cisso-cyber-security.pdf",
          preview: "/assets/certificates/previews/cisso-cyber-security.jpg",
          imageFit: "cover",
        },
      ],
    },
    {
      title: "Other Certifications",
      certificates: [
        {
          title: "AI Impact Certificate",
          src: "/assets/certificates/ai-impact-intel.pdf",
          preview: "/assets/certificates/previews/ai-impact-intel.jpg",
        },
        {
          title: "RBI Quiz Certificate",
          src: "/assets/certificates/rbi-quiz.pdf",
          preview: "/assets/certificates/previews/rbi-quiz.jpg",
        },
        {
          title: "Yoga Induction Program",
          src: "/assets/certificates/yoga-induction-program.pdf",
          preview: "/assets/certificates/previews/yoga-induction-program.jpg",
        },
        {
          title: "Tiranga Pledge Certificate",
          src: "/assets/certificates/tiranga-pledge.pdf",
          preview: "/assets/certificates/previews/tiranga-pledge.jpg",
        },
        {
          title: "Google Quiz Competition",
          src: "/assets/certificates/google-quiz-competition.pdf",
          preview: "/assets/certificates/previews/google-quiz-competition.jpg",
        },
        {
          title: "ICAT Participation Certificate",
          src: "/assets/certificates/icat-participation.pdf",
          preview: "/assets/certificates/previews/icat-participation.jpg",
        },
        {
          title: "Indian Democracy Quiz Certificate",
          src: "/assets/certificates/indian-democracy-quiz.pdf",
          preview: "/assets/certificates/previews/indian-democracy-quiz.jpg",
        },
        {
          title: "Narcotics: Say No to Drugs Certificate",
          src: "/assets/certificates/narcotics-say-no-to-drugs.pdf",
          preview: "/assets/certificates/previews/narcotics-say-no-to-drugs.jpg",
        },
      ],
    },
  ];
  const displayedCertificateCategories = [
    certificateCategories[2],
    certificateCategories[0],
    certificateCategories[1],
    certificateCategories[3],
  ];

  const achievements = [
    "/assets/projects/innovate your community.jpeg",
    "/assets/projects/drone hunt.jpeg",
    "/assets/projects/Yukta_2026.jpg",
    {
      src: "/assets/projects/isnee-motorsports-certificate.pdf",
      title: "ISNEE Motorsports Certificate",
      type: "pdf",
    },
    {
      src: "/assets/projects/tnkc-certificate.pdf",
      title: "TNKC Certificate",
      type: "pdf",
    },
  ];

  const internships = [
    "/assets/projects/intern certifificate.jpeg",
  ];

  // Reusable grid layout for the sections
  const renderImageGrid = (title, images) => (
    <div className="mb-20">
      <h2 className="text-sky-200 font-bold text-3xl text-center mb-10 tracking-wide">
        {title}
      </h2>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start justify-items-center gap-8 px-3 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
        {images.map((item, index) => {
          const achievement =
            typeof item === "string"
              ? { src: item, title: `${title} document ${index + 1}`, type: "image" }
              : item;

          return (
            <a
              key={achievement.src}
              href={achievement.src}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${achievement.title}`}
              className="block w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-black-200 shadow-[0_0_15px_rgba(0,0,0,0.5)] group"
            >
              {achievement.type === "pdf" ? (
                <iframe
                  src={`${achievement.src}#view=Fit&toolbar=0&navpanes=0&scrollbar=0`}
                  title={achievement.title}
                  className="pointer-events-none aspect-[4/3] w-full border-0"
                />
              ) : (
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 scale-110 bg-cover bg-center opacity-80 blur-md"
                    style={{ backgroundImage: `url("${achievement.src}")` }}
                  />
                  <img
                    src={achievement.src}
                    alt={achievement.title}
                    loading="lazy"
                    className="relative h-full w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );

  const renderCertificateGrid = (certificates) => (
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-start justify-items-center gap-8 px-3 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
      {certificates.map((certificate) => (
        <a
          key={certificate.src}
          href={certificate.src}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${certificate.title} certificate PDF`}
          className="block w-full max-w-md overflow-hidden rounded-xl border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)] bg-black-200 group"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
            <div
              aria-hidden="true"
              className="absolute inset-0 scale-110 bg-cover bg-center opacity-80 blur-md"
              style={{ backgroundImage: `url("${certificate.preview}")` }}
            />
            <img
              src={certificate.preview}
              alt=""
              loading="lazy"
              className={`relative h-full w-full ${
                certificate.imageFit === "cover" ? "object-cover" : "object-contain"
              } transition-transform duration-500 ease-in-out ${
                certificate.zoom ? "scale-110 group-hover:scale-[1.15]" : "group-hover:scale-105"
              }`}
            />
          </div>
        </a>
      ))}
    </div>
  );

  return (
    <section className="w-full py-20" id="credentials">
      <div className="mb-20">
        <h2 className="text-sky-200 font-bold text-3xl text-center mb-10 tracking-wide">
          Certifications
        </h2>
        {displayedCertificateCategories.map((category) => (
          <div className="mb-16" key={category.title}>
            <h3 className="mb-8 px-4 text-center text-2xl font-bold tracking-wide text-sky-200 sm:text-3xl">
              {category.title}
            </h3>
            {renderCertificateGrid(category.certificates)}
          </div>
        ))}
      </div>
      {renderImageGrid("Achievements", achievements)}
      {renderImageGrid("Internship Experience", internships)}
    </section>
  );
};

export default Credentials;