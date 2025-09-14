import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// icons
import { FaFigma } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { SiCanva, SiAdobepremierepro } from "react-icons/si";
import { FaFlutter, FaDartLang } from "react-icons/fa6";

function Other() {
  const { t } = useTranslation();

  // map icon ตาม key
  const iconsMap = {
    Figma: <FaFigma size={24} />,
    Photoshop: <DiPhotoshop size={24} />,
    Canva: <SiCanva size={24} />,
    Flutter: <FaFlutter size={24} />,
    Dart: <FaDartLang size={24} />,
    "Premiere Pro": <SiAdobepremierepro size={24} />,
  };

  const items = Object.keys(t("skills.other.items", { returnObjects: true }));

  return (
    <section className="bg-black text-white py-16" id="other">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-orange-500 mb-10 text-center">
          {t("skills.other.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
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
                {t(`skills.other.items.${key}.title`)}
              </h3>
              <h3 className="text-lg">
                {t(`skills.other.items.${key}.level`)}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Other;
