import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>

      {/* 1. Projects Link First */}
      <li className="nav-li">
        <a className="nav-link" href="#projects">
          Projects
        </a>
      </li>

      {/* 2. Credentials Link Next */}
      <li className="nav-li">
        <a className="nav-link" href="#credentials">
          Credentials
        </a>
      </li>

      <li className="nav-li">
        <a className="nav-link" href="#contact">
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
    <header className="fixed inset-x-0 z-50 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="#home"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
            onClick={closeMenu}
          >
            Abdul Karim Kamal S
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:hidden"
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
          <nav aria-label="Main navigation" className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          id="mobile-navigation"
          className="block overflow-hidden border-t border-white/10 bg-primary/95 text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.3 }}
        >
          <nav
            aria-label="Mobile navigation"
            className="pb-5"
            onClick={closeMenu}
          >
            <Navigation />
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;