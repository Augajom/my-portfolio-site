import React from 'react'
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//icon
import { HiArrowDown } from "react-icons/hi";

//image
import highschool from "../../assets/highschool.png";
import university from "../../assets/university.jpg";

function EducationTimeline() {

  const { t } = useTranslation();

  const timelineData = [
    {
      firstyear: "2018",
      lastyear: "2020",
      edu_institution : t("about.edu.highschool"),
      description: t("about.edu.highschool_desc"),
      img: highschool
    },
    {
      firstyear: "2021",
      lastyear: t("about.edu.present"),
      edu_institution : t("about.edu.university"),
      description: t("about.edu.university_desc"),
      img: university
    },
  ];

  return (
    <div id="Education" className="mt-10">
      <h1 className="text-5xl font-bold text-orange-500 mb-6">{t("about.edu.header")}</h1>
      <section className="bg-black w-full">
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-center py-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            {item.firstyear} - {item.lastyear}
          </h2>
          <img
            src={item.img}
            alt={item.grade}
            className="w-128 h-96 object-cover rounded-lg mb-4"
          />
          <p className="text-orange-500 text-xl font-bold max-w-xl">{item.edu_institution}</p>
          <p className="text-white text-lg max-w-xl">{item.description}</p>
          <HiArrowDown size={40} className="text-white mt-8 animate-bounce" />
        </motion.div>
      ))}
    </section>
    </div>
  )
}

export default EducationTimeline