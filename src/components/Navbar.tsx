import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggleDarkMode = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDark(!dark);
  };

  return (
    <nav className="fixed w-full  bg-purple-800 dark:bg-slate-900 shadow-md z-50 text-white transition-colors">
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

          <li>
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-md bg-white/20
              hover:bg-white/30  dark:bg-white/10 dark:hover:bg-white/20 transition"
            >
              {dark ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <ul className="flex flex-col gap-4 md:hidden bg-white dark:bg-slate-900 text-slate-800  dark:text-slate-100p-4 shadow-md transition-colors">
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
          <li>
            <button
              onClick={() => {
                toggleDarkMode();
                setOpen(false);
              }}
              className="
            mt-2 p-2 rounded-md w-fit bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover-white/20 transition"
            >
              {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
