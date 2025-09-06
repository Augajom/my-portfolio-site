import { React, useState, useEffect } from 'react';
import { HiMenu, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { t, i18n } = useTranslation();

  const menu = ["home", "about", "skills", "projects", "experience", "contact"];

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const navbarHeight = 120;
    const targetPosition = element.offsetTop - navbarHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      
      const easing = percentage < 0.5 
        ? 2 * percentage * percentage 
        : 1 - Math.pow(-2 * percentage + 2, 2) / 2;

      window.scrollTo(0, startPosition + distance * easing);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const handleMenuClick = (section, e) => {
    e.preventDefault();
    setOpen(false);
    
    const delay = open ? 200 : 0;
    
    setTimeout(() => {
      smoothScrollTo(section);
    }, delay);
  };

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
      { 
        root: null, 
        rootMargin: "-50% 0px -50% 0px", 
        threshold: 0 
      }
    );
    sections.forEach((section) => section && observer.observe(section));
    return () => sections.forEach((section) => section && observer.unobserve(section));
  }, [menu]);

  return (
    <motion.nav 
      className="fixed w-full bg-black z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center text-white max-w-6xl mx-auto px-6 py-8">
        
        {/* Logo */}
        <div className="flex space-x-2 text-xl font-bold">
          <h1 className="tracking-wide">
            {"SUPHAMETHEE".split("").map((ch, i) => (
              <motion.span
                key={i}
                className="inline-block text-orange-500 hover:text-white transition-colors duration-200 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {ch}
              </motion.span>
            ))}
          </h1>

          <h1 className="tracking-wide">
            {"INTHARALIB".split("").map((ch, i) => (
              <motion.span
                key={i}
                className="inline-block text-orange-500 hover:text-white transition-colors duration-200 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {ch}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Menu */}
        <ul className="hidden lg:flex gap-8 text-xl">
          {menu.map((section) => (
            <motion.li 
              key={section}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                type="button"
                onClick={(e) => handleMenuClick(section, e)}
                className={`duration-300 cursor-pointer bg-transparent border-none ${
                  active === section
                    ? "text-orange-500 underline border-b-2 border-orange-500"
                    : "text-white hover:text-orange-500"
                }`}
              >
                {t(`menu.${section}`)}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Language Switch */}
        <div className="hidden lg:flex gap-2">
          <motion.button
            onClick={() => i18n.changeLanguage("en")}
            className={`px-2 py-1 border rounded transition-colors cursor-pointer ${
              i18n.language === "en"
                ? "bg-orange-500 text-black border-orange-500"
                : "text-white hover:bg-orange-500 hover:text-black"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            EN
          </motion.button>
          <motion.button
            onClick={() => i18n.changeLanguage("th")}
            className={`px-2 py-1 border rounded transition-colors cursor-pointer ${
              i18n.language === "th"
                ? "bg-orange-500 text-black border-orange-500"
                : "text-white hover:bg-orange-500 hover:text-black"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            TH
          </motion.button>
        </div>

        {/* Hamburger */}
        <motion.div 
          className="lg:hidden cursor-pointer" 
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
        >
          {open ? <HiX size={30} /> : <HiMenu size={30} />}
        </motion.div>
      </div>

      {/* Dropdown */}
      {open && (
        <motion.div
          className="lg:hidden bg-black text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-center gap-2 py-4">
            <motion.button
              onClick={() => i18n.changeLanguage("en")}
              className={`px-2 py-1 border rounded transition-colors cursor-pointer ${
                i18n.language === "en"
                  ? "bg-orange-500 text-black border-orange-500"
                  : "text-white hover:bg-orange-500 hover:text-black"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EN
            </motion.button>
            <motion.button
              onClick={() => i18n.changeLanguage("th")}
              className={`px-2 py-1 border rounded transition-colors cursor-pointer ${
                i18n.language === "th"
                  ? "bg-orange-500 text-black border-orange-500"
                  : "text-white hover:bg-orange-500 hover:text-black"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              TH
            </motion.button>
          </div>
          
          <ul className="flex flex-col items-center gap-6 text-xl pb-6">
            {menu.map((section) => (
              <motion.li 
                key={section}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  type="button"
                  className="hover:text-yellow-500 duration-300 cursor-pointer bg-transparent border-none"
                  onClick={(e) => handleMenuClick(section, e)}
                >
                  {t(`menu.${section}`)}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;