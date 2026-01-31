import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


export default function Footer(){
     const year = new Date().getFullYear();


    return (
      <footer className="w-full bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-400">
          <p>
            © {year}{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Hinda
            </span>{" "}
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/Hinda213"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-600 transition"
            >
              <FaGithub/>
            </a>

            <a href="https://linkedin.com/in/hinda-mohamoud"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-600 transition"
            >
            <FaLinkedin/>
            </a>

            <a
            href="#contact"
            className="hober:text-indigo-600 transition"
            >
              <FaEnvelope/>
            </a>

          </div>
        </div>
      </footer>
    );
}