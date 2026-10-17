import { useState } from "react";
import { motion } from "motion/react";

function Navigation({ onClick }) {
  return (
    <ul className="nav-ul flex items-center gap-8">
      <li className="nav-li">
        <a className="nav-link text-sm font-medium tracking-wide text-neutral-300 transition-colors hover:text-white" href="#home" onClick={onClick}>
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-sm font-medium tracking-wide text-neutral-300 transition-colors hover:text-white" href="#about" onClick={onClick}>
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-sm font-medium tracking-wide text-neutral-300 transition-colors hover:text-white" href="#projects" onClick={onClick}>
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-sm font-medium tracking-wide text-neutral-300 transition-colors hover:text-white" href="#contact" onClick={onClick}>
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-[#232323] transition-all duration-300">
      <div className="mx-auto max-w-7xl c-space">
        <div className="flex items-center justify-between py-5">
          <a
            href="#home"
            className="flex items-center gap-2 font-mono text-base font-semibold tracking-wider text-white transition-colors hover:text-neutral-300"
          >
            ABDUL KARIM KAMAL S
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/30 backdrop-blur-md text-neutral-400 transition-colors hover:border-white/20 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="h-5 w-5 invert"
              alt="toggle menu"
            />
          </button>

          <nav className="hidden sm:flex">
            <Navigation onClick={closeMenu} />
          </nav>
        </div>

        {isOpen && (
          <motion.div
            className="block overflow-hidden rounded-2xl border border-white/10 bg-[#232323] px-6 py-6 text-center backdrop-blur-xl sm:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="pb-2">
              <Navigation onClick={closeMenu} />
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;