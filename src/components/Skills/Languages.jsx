import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// icons
import { RiEnglishInput } from "react-icons/ri";
import { TbAlphabetThai } from "react-icons/tb";

function Languages() {
  const { t } = useTranslation();

  // map icon ตาม key
  const iconsMap = {
    English: <RiEnglishInput size={24} />,
    Thai: <TbAlphabetThai size={24} />,
  };

  const items = Object.keys(
    t("skills.languages.items", { returnObjects: true })
  );

  return (
    <section className="bg-black text-white py-16" id="languages">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-orange-500 mb-10 text-center">
          {t("skills.languages.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {items.map((key, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 border border-orange-500 rounded-xl p-6 flex flex-col items-center hover:scale-105 transform transition-all duration-300"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 50,
                delay: idx * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div className="text-orange-500 mb-4">{iconsMap[key]}</div>
              <h3 className="text-xl font-bold">
                {t(`skills.languages.items.${key}.title`)}
              </h3>
              <h3 className="text-lg" style={{ whiteSpace: "pre-line" }}>
                {t(`skills.languages.items.${key}.level`)}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Languages;
