import { useState, useEffect } from "react";
import { myProjects } from "../constants/index.js";

const ProjectItemRow = ({ project, onHover, onLeave, onSelect }) => {
  return (
    <div className="group relative flex flex-col md:flex-row md:items-center justify-between py-7 px-6 md:px-12 border-b border-neutral-900 hover:border-neutral-700/80 hover:bg-neutral-900/10 transition-colors duration-200 w-full">
      <div className="flex flex-col gap-1.5 z-10 max-w-3xl">
        <h3
          onMouseEnter={() => onHover(project)}
          onMouseLeave={onLeave}
          className="w-fit cursor-pointer text-xl md:text-2xl font-semibold text-sky-200 transition-colors duration-200 group-hover:text-white"
        >
          {project.title}
        </h3>
        {project.titleLogo && (
          <img
            src={project.titleLogo}
            alt={`${project.title} logo`}
            className="h-20 w-40 rounded bg-white object-cover object-center"
          />
        )}
        <p className="text-sm font-medium text-amber-500/90 tracking-wide">
          {project.tags?.[0]?.name || project.category || "Engineering Project"}
        </p>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onSelect(project);
        }}
        className="flex items-center gap-2 mt-4 md:mt-0 text-sm font-medium text-white group-hover:text-neutral-300 transition-colors duration-200 z-10 shrink-0"
      >
        <span>Read More</span>
        <span className="transform transition-transform duration-200 group-hover:translate-x-1.5">
          →
        </span>
      </button>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const [imageError, setImageError] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const images =
    project?.images?.length > 0
      ? project.images
      : project?.image
        ? [project.image]
        : [];
  const currentImage = images[imageIndex];

  useEffect(() => {
    setImageIndex(0);
  }, [project?.id]);

  useEffect(() => {
    setImageError(false);
  }, [currentImage]);

  if (!project) return null;

  const showPreviousImage = () => {
    setImageIndex((index) => (index - 1 + images.length) % images.length);
  };
  const showNextImage = () => {
    setImageIndex((index) => (index + 1) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-neutral-800 bg-[#0c0f1d] shadow-2xl flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex h-[min(60vh,560px)] w-full shrink-0 items-center justify-center overflow-hidden bg-neutral-300">
          <button
            onClick={onClose}
            type="button"
            className="absolute top-5 right-5 z-20 flex h-9 w-9 items-center justify-center rounded-xl bg-[#0b0e14] text-white transition-all hover:bg-black hover:scale-105 shadow-md"
            aria-label="Close"
          >
            ✕
          </button>

          {currentImage && !imageError ? (
            <img
              src={currentImage}
              alt={project.title}
              className="h-full w-full object-contain"
              loading="eager"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="font-mono text-sm tracking-wide text-neutral-700">
              [Image File Path Not Found]
            </div>
          )}

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPreviousImage}
                aria-label="Show previous project image"
                className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/75 text-2xl text-white shadow-lg transition hover:bg-black"
              >
                ←
              </button>
              <button
                type="button"
                onClick={showNextImage}
                aria-label="Show next project image"
                className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/75 text-2xl text-white shadow-lg transition hover:bg-black"
              >
                →
              </button>
              <span className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/75 px-3 py-1 text-xs font-medium text-white">
                {imageIndex + 1} / {images.length}
              </span>
            </>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 md:p-10 flex flex-col gap-5">
          <h3 className="text-2xl sm:text-3xl font-bold text-sky-200 tracking-tight leading-snug">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
            {project.description}
          </p>

          {project.subDescription && (
            <div className="space-y-2.5 mt-1">
              {project.subDescription.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="text-sky-200 font-bold mt-0.5">•</span>
                  <p className="text-xs sm:text-sm leading-relaxed text-neutral-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 flex flex-col items-start gap-4 border-t border-neutral-800 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              {project.titleLogo ? (
                <img
                  src={project.titleLogo}
                  alt={`${project.title} logo`}
                  className="h-20 w-40 rounded-lg bg-white object-cover object-center"
                />
              ) : project.tags?.[0]?.path ? (
                <img
                  src={project.tags[0].path}
                  alt={project.tags[0].name || "icon"}
                  className="w-7 h-7 object-contain"
                />
              ) : null}
              <span className="break-words text-xs font-mono text-sky-200">
                {project.tags?.[0]?.name || project.category}
              </span>
            </div>

            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-200 hover:text-sky-100 transition-colors"
              >
                <span>View Project</span>
                <span className="text-xs">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsList = Array.isArray(myProjects) ? myProjects : [];

  const finalYearProject = projectsList.find((p) => p.id === 1);
  const selectedProjects = projectsList.filter((p) => p.id !== 1);

  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProjectForModal, setSelectedProjectForModal] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProjectForModal(null);
    };

    if (selectedProjectForModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedProjectForModal]);

  return (
    <section className="relative w-full py-16 text-white scroll-mt-20 sm:scroll-mt-24" id="projects">
      {/* 1. Final Year Project */}
      <div className="w-full mb-8">
        <div className="px-6 md:px-12 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Final Year Project
          </h2>
        </div>

        <div className="w-full border-t border-neutral-900">
          {finalYearProject && (
            <ProjectItemRow
              project={finalYearProject}
              onHover={setHoveredProject}
              onLeave={() => setHoveredProject(null)}
              onSelect={setSelectedProjectForModal}
            />
          )}
        </div>
      </div>

      {/* 2. Selected Projects */}
      <div className="w-full">
        <div className="px-6 md:px-12 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Selected Projects
          </h2>
        </div>

        <div className="w-full border-t border-neutral-900">
          {selectedProjects.map((project) => (
            <ProjectItemRow
              key={project.id}
              project={project}
              onHover={setHoveredProject}
              onLeave={() => setHoveredProject(null)}
              onSelect={setSelectedProjectForModal}
            />
          ))}
        </div>
      </div>

      {/* Hover Floating Preview Image */}
      {!selectedProjectForModal && hoveredProject && hoveredProject.image && (
        <div
          className="pointer-events-none fixed z-40 hidden md:block overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl transition-all duration-75 ease-out"
          style={{
            left: `${cursorPos.x + 30}px`,
            top: `${cursorPos.y - 110}px`,
            width: "320px",
            height: "200px",
            transform: "translate3d(0, 0, 0)",
          }}
        >
          <img
            src={hoveredProject.image}
            alt={hoveredProject.title}
            className={`w-full h-full rounded-2xl ${
              hoveredProject.id === 2
                ? "bg-neutral-900 object-contain"
                : "object-cover"
            }`}
          />
        </div>
      )}

      {/* Details Popup Modal */}
      {selectedProjectForModal && (
        <ProjectModal
          project={selectedProjectForModal}
          onClose={() => setSelectedProjectForModal(null)}
        />
      )}
    </section>
  );
};

export default Projects;