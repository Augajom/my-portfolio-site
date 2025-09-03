import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from "react-i18next";

import AboutIntro from '../components/About/AboutIntro'
import EducationTimeline from '../components/About/EducationTimeline'
import Interests from '../components/About/Interests'

function About() {

  const { t } = useTranslation();

  return (
    <section id='about' className='min-h-screen flex justify-center bg-black p-4 scroll-mt-24'>
        <div className="container max-w-6xl w-full h-full bg-black text-white text-center">

            <motion.div className="pt-10 inline-block">

              <motion.h1
                className="text-8xl text-orange-500 font-extrabold text-shadow-sm text-shadow-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                {t("about.title")}
              </motion.h1>

              <motion.div
                className="h-1 bg-orange-500 mt-2 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
                viewport={{ once: true }}
              />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-1 h-full gap-6 mt-10">
                <AboutIntro />
                <EducationTimeline />
                <Interests />
            </div>
        </div>
    </section>
  )
}

export default About