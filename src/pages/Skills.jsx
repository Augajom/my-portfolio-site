import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//components
import Frontend from "../components/Skills/Frontend";
import Backend from "../components/Skills/Backend";
import Database from "../components/Skills/Database";
import Tools from "../components/Skills/Tools";
import Other from "../components/Skills/Other";
import Languages from "../components/Skills/Languages";

function Skills() {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="min-h-screen flex justify-center bg-black p-4 scroll-mt-24"
    >
      <div className="container max-w-6xl w-full h-full bg-black text-white text-center">
        <motion.div className="pt-10 inline-block">
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold h-26
                                    bg-gradient-to-r from-orange-500 via-yellow-400 to-red-600 
                                    bg-clip-text text-transparent 
                                    drop-shadow-[0_0_15px_rgba(255,140,0,0.6)]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {t("skills.header")}
          </motion.h1>

          <motion.div
            className="h-1 bg-orange-500 mt-2 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div id="components">
          <Frontend />
          <Backend />
          <Database />
          <Tools />
          <Other />
          <Languages />
        </div>
      </div>
    </section>
  );
}

export default Skills;
