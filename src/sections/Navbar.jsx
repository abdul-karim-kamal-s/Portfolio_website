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

      {/* 1. Projects Link First */}
      <li className="nav-li">
        <a className="nav-link" href="#projects" onClick={onClick}>
          Projects
        </a>
      </li>

      {/* 2. Credentials Link Next */}
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
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
           Abdul Karim Kamal S
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
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
  );
};

export default Navbar;