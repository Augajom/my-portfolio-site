import React from 'react'

import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";

//icon
import { FaLaptopCode, FaUsers, FaLightbulb, FaRobot, FaCode } from "react-icons/fa";
import { RiOpenSourceFill } from "react-icons/ri";
import { SiFuturelearn } from "react-icons/si";

function Interests() {

  const { t } = useTranslation();

  const interests = [
    { icon: <FaLaptopCode size={24} />, title: t("about.interests.web") },
    { icon: <FaRobot size={24} />, title: t("about.interests.ai") },
    { icon: <FaLightbulb size={24} />, title: t("about.interests.opensource") },
    { icon: <FaCode size={24} />, title: t("about.interests.competition") },
  ];

  const softSkills = [
    { icon: <FaUsers size={24} />, title: t("about.skills.teamwork"), desc: t("about.skills.teamwork_desc") },
    { icon: <RiOpenSourceFill size={24} />, title: t("about.skills.problem"), desc: t("about.skills.problem_desc") },
    { icon: <FaUsers size={24} />, title: t("about.skills.communication"), desc: t("about.skills.communication_desc") },
    { icon: <SiFuturelearn size={24} />, title: t("about.skills.adapt"), desc: t("about.skills.adapt_desc") },
  ];

  return (
     <section className="bg-black text-white py-16" id="interest">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-10 text-center">
          {t("about.interests.header")}
        </h2>

        {/* Interests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 s-2 lg:grid-cols-4 gap-6 mb-12">
          {interests.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 border border-orange-500 rounded-xl p-6 flex flex-col items-center hover:scale-105 transform transition-all duration-300"
              initial={{ opacity: 0, rotateX: 90 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ transformPerspective: "1000px" }}
            >
              <div className="text-orange-500 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold" >{item.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkills.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 border border-orange-500 rounded-xl p-6 hover:scale-105 transform transition-all duration-300"
              initial={{ opacity: 0, rotateX: 90 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ transformPerspective: "1000px" }}
            >
              <div className="text-orange-500 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
              <p className="text-center text-gray-300 text-sm" style={{ whiteSpace: "pre-line" }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Interests