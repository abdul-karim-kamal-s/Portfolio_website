import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Credentials from "./sections/Credentials";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />

      <Hero />
      <About />

      {/* 1. Projects Section MUST BE FIRST */}
      <Projects />

      <Credentials />

      <section id="work">
        <Experiences />
      </section>

      <Testimonial />

      <Contact />

      <Footer />

      {/* ADD THESE TWO LINES RIGHT HERE */}
      <SpeedInsights />
      <Analytics />
    </div>
  );
};

export default App;