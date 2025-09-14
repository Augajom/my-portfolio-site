import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// icons
import { SiMysql, SiMongodb } from "react-icons/si";

function Database() {
  const { t } = useTranslation();

  const database = {
    SQL: [{ icon: <SiMysql size={24} />, key: "MySQL" }],
    NoSQL: [{ icon: <SiMongodb size={24} />, key: "MongoDB" }],
  };

  const renderSkill = (item, idx) => (
    <motion.div
      key={idx}
      className="bg-gray-900 border border-orange-500 rounded-xl p-6 flex flex-col items-center hover:scale-105 transform transition-all duration-300"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: idx * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="text-orange-500 mb-4">{item.icon}</div>
      <h3 className="text-xl font-bold">
        {t(`skills.database.items.${item.key}.title`)}
      </h3>
      <h3 className="text-lg">
        {t(`skills.database.items.${item.key}.level`)}
      </h3>
    </motion.div>
  );

  return (
    <section className="bg-black text-white py-16" id="database">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-orange-500 mb-10 text-center">
          {t("skills.database.title")}
        </h2>

        {/* SQL */}
        <h3 className="text-3xl font-extrabold text-orange-500 mb-10 mt-15 text-center">
          {t("skills.database.sql")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 mb-12">
          {database.SQL.map(renderSkill)}
        </div>

        {/* NoSQL */}
        <h3 className="text-3xl font-extrabold text-orange-500 mb-10 mt-15 text-center">
          {t("skills.database.nosql")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 mb-12">
          {database.NoSQL.map(renderSkill)}
        </div>
      </div>
    </section>
  );
}

export default Database;
