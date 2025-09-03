import React from 'react'
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";

// icons
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";
import { FaKeycdn } from "react-icons/fa6";

function Backend() {
  const { t } = useTranslation();

  const backend = {
    backend: [
      { icon: <FaNodeJs size={24} />, key: "Node.js" },
      { icon: <SiExpress size={24} />, key: "Express.js" },
    ],
    authentication: [
      { icon: <TbBrandOauth size={24} />, key: "Google OAuth2" },
      { icon: <FaKeycdn size={24} />, key: "JWT" },
    ],
  };

  const renderSkill = (item, idx) => (
    <motion.div
      key={idx}
      className="bg-gray-900 border border-orange-500 rounded-xl p-6 flex flex-col items-center hover:scale-105 transform transition-all duration-300"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="text-orange-500 mb-4">{item.icon}</div>
      <h3 className="text-xl font-bold">{t(`skills.backend.items.${item.key}.title`)}</h3>
      <h3 className="text-lg">{t(`skills.backend.items.${item.key}.level`)}</h3>
    </motion.div>
  );

  return (
    <section className="bg-black text-white py-16" id="backend">
      <div className="container max-w-6xl mx-auto px-4">

        <h2 className="text-5xl font-extrabold text-orange-500 mb-10 text-center">
          {t("skills.backend.title")}
        </h2>

        {/* Backend */}
        <h3 className="text-3xl font-extrabold text-orange-500 mb-10 mt-15 text-center">
          {t("skills.backend.backend")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {backend.backend.map(renderSkill)}
        </div>

        {/* Authentication / Authorization */}
        <h3 className="text-3xl font-extrabold text-orange-500 mb-10 mt-15 text-center">
          {t("skills.backend.authentication")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {backend.authentication.map(renderSkill)}
        </div>

      </div>
    </section>
  );
}

export default Backend;
