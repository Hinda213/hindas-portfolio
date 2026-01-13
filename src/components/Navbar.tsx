import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-purple-800 shadow-md z-50 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-primary">Hinda</h1>
        <ul className="hidden md:flex gap-7">
          <li>
            <a href="#hero" className="hover:text-indigo-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-indigo-600 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-indigo-600 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-600 transition">
              Contact
            </a>
          </li>
        </ul>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <ul className="flex flex-col gap-4 md:hidden bg-white text-slate-800 p-4 shadow-md">
          <li>
            <a href="#hero" onClick={() => setOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
