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
                className="text-6xl md:text-8xl font-extrabold h-26
                          bg-gradient-to-r from-orange-500 via-yellow-400 to-red-600 
                          bg-clip-text text-transparent 
                          drop-shadow-[0_0_15px_rgba(255,140,0,0.6)]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                {t("about.header")}
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
                <div className="btn">
                  <button><a href="/my-portfolio-site/resume_suphamethee.pdf" target='_blank' rel="noopener noreferrer"
                  download
                  className="
                  border border-orange-500 p-4 bg-orange-500 text-white font-extrabold text-2xl rounded-full flex justify-center items-center 
                  hover:bg-white hover:text-orange-500 hover:scale-110 cursor-pointer transition-all duration-300">
                      {t("about.resume")}
                  </a></button>
                </div>
                <EducationTimeline />
                <Interests />
            </div>
        </div>
    </section>
  )
}

export default About