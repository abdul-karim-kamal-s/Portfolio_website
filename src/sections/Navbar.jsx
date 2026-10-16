import { useState } from "react";
import { motion } from "motion/react";

function Navigation({ onClick }) {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home" onClick={onClick}>
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about" onClick={onClick}>
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#projects" onClick={onClick}>
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#credentials" onClick={onClick}>
          Credentials
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact" onClick={onClick}>
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
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-neutral-900 bg-black/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl c-space">
        <div className="flex items-center justify-between py-4">
          <a
            href="#home"
            className="flex items-center gap-2 font-mono text-base font-semibold tracking-wider text-white transition-colors hover:text-neutral-300"
          >
            ABDUL KARIM KAMAL S
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-400 transition-colors hover:border-neutral-700 hover:text-white focus:outline-none sm:hidden"
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
            className="block overflow-hidden text-center sm:hidden"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ maxHeight: "100vh" }}
            transition={{ duration: 0.3 }}
          >
            <nav className="pb-5">
              <Navigation onClick={closeMenu} />
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;