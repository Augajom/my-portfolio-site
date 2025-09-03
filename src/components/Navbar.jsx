import { React, useState, useEffect } from 'react';
import { HiMenu, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { t, i18n } = useTranslation();

  const menu = ["home", "about", "skills", "projects", "experience", "contact"];

  useEffect(() => {
    const sections = menu.map((id) => document.getElementById(id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => section && observer.observe(section));
    return () => sections.forEach((section) => section && observer.unobserve(section));
  }, []);

  return (
    <nav className="fixed w-full bg-black z-50">
      <div className="flex justify-between items-center text-white max-w-6xl mx-auto px-6 py-8">
        
        {/* Logo */}
        <div className="flex space-x-2 text-xl font-bold">
          <h1 className="tracking-wide">
            {"SUPHAMTHEE".split("").map((ch, i) => (
              <span
                key={i}
                className="inline-block text-orange-500 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {ch}
              </span>
            ))}
          </h1>

          <h1 className="tracking-wide">
            {"INTHARALIB".split("").map((ch, i) => (
              <span
                key={i}
                className="inline-block text-orange-500 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {ch}
              </span>
            ))}
          </h1>
        </div>

        {/* Menu */}
        <ul className="hidden lg:flex gap-8 text-xl">
          {menu.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`duration-300 ${
                  active === section
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-white hover:text-orange-500"
                }`}
              >
                {t(`menu.${section}`)}
              </a>
            </li>
          ))}
        </ul>

        {/* Language Switch */}
        <div className="hidden lg:flex gap-2">
          <button
            onClick={() => i18n.changeLanguage("en")}
            className={`px-2 py-1 border rounded transition-colors cursor-pointer ${
              i18n.language === "en"
                ? "bg-orange-500 text-black border-orange-500"
                : "text-white hover:bg-orange-500 hover:text-black"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => i18n.changeLanguage("th")}
            className={`px-2 py-1 border rounded transition-colors cursor-pointer ${
              i18n.language === "th"
                ? "bg-orange-500 text-black border-orange-500"
                : "text-white hover:bg-orange-500 hover:text-black"
            }`}
          >
            TH
          </button>
        </div>

        {/* Hamburger */}
        <div className="lg:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <HiX size={30} /> : <HiMenu size={30} />}
        </div>
      </div>

      {/* Dropdown */}
      {open && (
        <ul className="flex flex-col items-center gap-6 bg-black text-xl text-white pb-6 lg:hidden">

          <div className="flex gap-2">
          <button
            onClick={() => i18n.changeLanguage("en")}
            className={`px-2 py-1 border rounded transition-colors cursor-pointer ${
              i18n.language === "en"
                ? "bg-orange-500 text-black border-orange-500"
                : "text-white hover:bg-orange-500 hover:text-black"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => i18n.changeLanguage("th")}
            className={`px-2 py-1 border rounded transition-colors cursor-pointer ${
              i18n.language === "th"
                ? "bg-orange-500 text-black border-orange-500"
                : "text-white hover:bg-orange-500 hover:text-black"
            }`}
          >
            TH
          </button>
        </div>
          
          {menu.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="hover:text-yellow-500 duration-300"
                onClick={() => setOpen(false)}
              >
                {t(`menu.${section}`)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
