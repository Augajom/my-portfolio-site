import React from 'react'
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";

// icons
import { FaCss3Alt, FaReact, FaBootstrap, FaHtml5 } from "react-icons/fa";
import { IoLogoVue, IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs, TbBrandFramerMotion } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

function Frontend() {
  const { t } = useTranslation();

  // Skills data
  const frontend = {
    framework: [
      { icon: <IoLogoVue size={24} />, key: "Vue.js" },
      { icon: <FaReact size={24} />, key: "React.js" },
      { icon: <TbBrandNextjs size={24} />, key: "Next.js" },
    ],
    styling: [
      { icon: <FaCss3Alt size={24} />, key: "CSS" },
      { icon: <FaBootstrap size={24} />, key: "Bootstrap" },
      { icon: <RiTailwindCssFill size={24} />, key: "Tailwind" },
    ],
    html: [
      { icon: <FaHtml5 size={24} />, key: "HTML5" },
      { icon: <FaCss3Alt size={24} />, key: "CSS3" },
      { icon: <IoLogoJavascript size={24} />, key: "JavaScript" },
      { icon: <SiTypescript size={24} />, key: "TypeScript" },
    ],
    animation: [
      { icon: <TbBrandFramerMotion size={24} />, key: "Framer Motion" },
    ],
  };

  const renderSkill = (item, idx) => (
    <motion.div
      key={idx}
      className="bg-gray-900 border border-orange-500 rounded-xl p-6 flex flex-col items-center hover:scale-105 transform transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="text-orange-500 mb-4">{item.icon}</div>
      <h3 className="text-xl font-bold">{t(`skills.frontend.items.${item.key}.title`)}</h3>
      <h3 className="text-lg">{t(`skills.frontend.items.${item.key}.level`)}</h3>
    </motion.div>
  );

  return (
    <section className="bg-black text-white py-16" id="frontend">
      <div className="container max-w-6xl mx-auto px-4">

        <h2 className="text-5xl font-extrabold text-orange-500 mb-10 text-center">
          {t("skills.frontend.title")}
        </h2>

        <h3 className="text-3xl font-extrabold text-orange-500 mb-10 mt-15 text-center">
          {t("skills.frontend.framework")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
          {frontend.framework.map(renderSkill)}
        </div>

        <h3 className="text-3xl font-extrabold text-orange-500 mb-10 mt-15 text-center">
          {t("skills.frontend.styling")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
          {frontend.styling.map(renderSkill)}
        </div>

        <h3 className="text-3xl font-extrabold text-orange-500 mb-10 mt-15 text-center">
          {t("skills.frontend.html")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {frontend.html.map(renderSkill)}
        </div>

        <h3 className="text-3xl font-extrabold text-orange-500 mb-10 mt-15 text-center">
          {t("skills.frontend.animation")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 mb-12">
          {frontend.animation.map(renderSkill)}
        </div>

      </div>
    </section>
  );
}

export default Frontend;
