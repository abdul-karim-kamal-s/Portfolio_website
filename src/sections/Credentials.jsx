const Credentials = () => {

  const certificates = [

    "/assets/projects/soildwoks xdesign for educadion.jpeg",

    "/assets/projects/Coursera cfd.jpg",

    "/assets/projects/solidedge.jpeg",

    "/assets/projects/Soildworks foundation.jpeg",

    "/assets/projects/advanced skeching soildworks.jpeg",

    "/assets/projects/xdesign foundation.jpeg",

    "/assets/projects/x design assembley.jpeg",

    "/assets/projects/xdesign featues and patterns and sweeps.jpeg",

    "/assets/projects/xdesign refernce geomentry.jpeg",

    "/assets/projects/basics of Python.jpg",

    "/assets/projects/coursera.jpeg",

    "/assets/projects/nptel english language for competitive exams.jpeg",

    "/assets/projects/introduction to front-end development.png",

    "/assets/projects/responsivewebdesign.jpeg",

    "/assets/projects/scientificcomputingwithpython.jpeg",

    "/assets/projects/xdesign cut.png",

    "/assets/projects/Getting Started with Artificial Intelligence.jpeg",

    "/assets/projects/antidrag.jpeg",

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

  const ImageGrid = ({ title, images }) => (

    <div className="mb-20">

      <h2 className="text-white font-bold text-3xl text-center mb-10 tracking-wide">

        {title}

      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">

        {images.map((src, index) => (

          <div

            key={index}

            className="overflow-hidden rounded-xl border border-neutral-700 shadow-[0_0_15px_rgba(0,0,0,0.5)] bg-[#232323] group cursor-pointer"

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



  return (

    <section className="max-w-7xl mx-auto py-20" id="credentials">

      <ImageGrid title="Certifications" images={certificates} />

      <ImageGrid title="Achievements" images={achievements} />

      <ImageGrid title="Internship Experience" images={internships} />

    </section>

  );

};



export default Credentials;