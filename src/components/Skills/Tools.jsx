import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";

// icons
import { FaGitAlt, FaGithub, FaDocker, FaAws, FaLinux, FaTerminal } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiWebstorm, SiPostman, SiGithubactions } from "react-icons/si";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsWindows } from "react-icons/bs";
import { DiNginx } from "react-icons/di";

function Tools() {
  const { t } = useTranslation();

  // กำหนด icon map ตามชื่อ key
  const iconsMap = {
    "Git": <FaGitAlt size={24} />,
    "GitHub": <FaGithub size={24} />,
    "Docker": <FaDocker size={24} />,
    "Docker Compose": <FaDocker size={24} />,
    "Linux": <FaLinux size={24} />,
    "Window": <BsWindows size={24} />,
    "SSH": <FaTerminal size={24} />,
    "GitHub Actions": <SiGithubactions size={24} />,
    "VSCode": <VscVscode size={24} />,
    "Webstorm": <SiWebstorm size={24} />,
    "Thunder Client": <AiFillThunderbolt size={24} />,
    "Postman": <SiPostman size={24} />,
    "AWS": <FaAws size={24} />,
    "Nginx": <DiNginx size={24} />,
  };

  const categories = ["vControl", "container", "ide", "api", "deploy"];

  const renderCategory = (category) => {
    const items = Object.keys(t(`skills.tools.items`, { returnObjects: true }))
      .filter(key => {
        if (category === "vControl") return ["Git","GitHub"].includes(key);
        if (category === "container") return ["Docker","Docker Compose","Linux","Window","SSH","GitHub Actions"].includes(key);
        if (category === "ide") return ["VSCode","Webstorm"].includes(key);
        if (category === "api") return ["Thunder Client","Postman"].includes(key);
        if (category === "deploy") return ["AWS","Nginx"].includes(key);
        return false;
      });

    return (
      <>
        <h3 className="text-3xl font-extrabold text-orange-500 mb-10 mt-15 text-center">
          {t(`skills.tools.${category}`)}
        </h3>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${category === "container" ? 3 : 2} gap-6 mb-12`}>
          {items.map((key, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 border border-orange-500 rounded-xl p-6 flex flex-col items-center hover:scale-105 transform transition-all duration-300"
              initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-orange-500 mb-4">{iconsMap[key]}</div>
              <h3 className="text-xl font-bold">{t(`skills.tools.items.${key}.title`)}</h3>
              <h3 className="text-lg">{t(`skills.tools.items.${key}.level`)}</h3>
            </motion.div>
          ))}
        </div>
      </>
    )
  }

  return (
    <section className="bg-black text-white py-16" id="tools">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-orange-500 mb-10 text-center">
          {t("skills.tools.title")}
        </h2>
        {categories.map(renderCategory)}
      </div>
    </section>
  );
}

export default Tools;
