const Credentials = () => {
  const certificates = [
    { title: "DBMS Online Course", src: "/assets/certificates/dbms-online-course.pdf", preview: "/assets/certificates/previews/dbms-online-course.jpg" },
    { title: "Organizational Behaviour", src: "/assets/certificates/organizational-behaviour.pdf", preview: "/assets/certificates/previews/organizational-behaviour.jpg" },
    { title: "Outskill Course", src: "/assets/certificates/outskill-course.pdf", preview: "/assets/certificates/previews/outskill-course.jpg" },
    { title: "Enhancing Soft Skills and Personality", src: "/assets/certificates/enhancing-soft-skills-and-personality.pdf", preview: "/assets/certificates/previews/enhancing-soft-skills-and-personality.jpg" },
    { title: "Stress Management", src: "/assets/certificates/stress-management.pdf", preview: "/assets/certificates/previews/stress-management.jpg" },
    { title: "Infosys Data Structures", src: "/assets/certificates/infosys-data-structures.pdf", preview: "/assets/certificates/previews/infosys-data-structures.jpg" },
    { title: "Infosys Programming with Java", src: "/assets/certificates/infosys-programming-java.pdf", preview: "/assets/certificates/previews/infosys-programming-java.jpg" },
    { title: "Skillathon Course", src: "/assets/certificates/skillathon-course.pdf", preview: "/assets/certificates/previews/skillathon-course.jpg" },
    { title: "Infosys TechA Python", src: "/assets/certificates/infosys-techa-python.pdf", preview: "/assets/certificates/previews/infosys-techa-python.jpg" },
    { title: "Infosys Python Basics", src: "/assets/certificates/infosys-python-basics.pdf", preview: "/assets/certificates/previews/infosys-python-basics.jpg" },
    { title: "Cisso Cyber-Security", src: "/assets/certificates/cisso-cyber-security.pdf", preview: "/assets/certificates/previews/cisso-cyber-security.jpg" },
    { title: "Infosys C++ Course", src: "/assets/certificates/infosys-cpp-course.pdf", preview: "/assets/certificates/previews/infosys-cpp-course.jpg" },
    { title: "Nestlé Resilience Course (date unavailable)", src: "/assets/certificates/nestle-resilience-course.pdf", preview: "/assets/certificates/previews/nestle-resilience-course.jpg" },
  ];

  const achievements = [
    "/assets/projects/innovate your community.jpeg",   
    "/assets/projects/drone hunt.jpeg",
    "/assets/projects/Yukta_2026.jpg",
  ];

  const internships = [
    "/assets/projects/intern certifificate.jpeg",
  ];

  // Reusable grid layout for the sections
  const renderImageGrid = (title, images) => (
    <div className="mb-20">
      <h2 className="text-white font-bold text-3xl text-center mb-10 tracking-wide">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-xl border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)] bg-black-200 group cursor-pointer"
          >
            <img 
              src={src} 
              alt={`${title} document ${index + 1}`} 
              className="w-full h-auto object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );

  const renderCertificateGrid = (certificates) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4">
      {certificates.map((certificate) => (
        <a
          key={certificate.src}
          href={certificate.src}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${certificate.title} certificate PDF`}
          className="block overflow-hidden rounded-xl border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)] bg-black-200 group"
        >
          <img
            src={certificate.preview}
            alt={certificate.title}
            loading="lazy"
            className={`aspect-[4/3] w-full ${
              certificate.title === "Cisso Cyber-Security" ? "object-cover" : "object-contain"
            } transition-transform duration-500 ease-in-out group-hover:scale-105`}
          />
        </a>
      ))}
    </div>
  );

  return (
    <section className="w-full py-20" id="credentials">
      <div className="mb-20">
        <h2 className="text-white font-bold text-3xl text-center mb-10 tracking-wide">
          Certifications
        </h2>
        {renderCertificateGrid(certificates)}
      </div>
      {renderImageGrid("Achievements", achievements)}
      {renderImageGrid("Internship Experience", internships)}
    </section>
  );
};

export default Credentials;