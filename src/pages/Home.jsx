import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from "react-simple-typewriter"
import { FaGithub, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { useTranslation } from "react-i18next";

//image
import profile from "../assets/profile.jpg"

function Home() {
  const { t } = useTranslation();

  return (
    <section id='home' className='min-h-screen flex justify-center bg-black p-4 mt-20 scroll-mt-23 w-full overflow-x-hidden'>
      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full md:gap-8 lg:gap-20">
          
          {/* Profile */}
          <motion.div 
            className="flex justify-center items-center order-1 lg:order-1 mb-6 lg:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src={profile}
              alt="Profile"
              className="
                w-60 h600
                sm:w-68 sm:h-68 
                md:w-80 md:h-80
                lg:w-100 lg:h-100
                rounded-full
                object-cover
                max-w-full
              "
            />
          </motion.div>

          {/* Text */}
          <motion.div 
            className="text-white flex flex-col items-center text-center lg:items-start lg:text-left lg:my-auto order-2 lg:order-2 space-y-4 lg:space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-wrap justify-center lg:justify-start">
              <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>{t("home.hi")}</p>
              <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-orange-500 ml-2 font-bold'>{t("home.name")}</p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start text-2xl sm:text-3xl lg:text-4xl font-bold">
              <p>{t("home.iam")}&nbsp;</p>
              <span className="text-orange-500">
                <Typewriter
                  words={t("home.roles", { returnObjects: true })}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </div>
            
            <p className='text-sm sm:text-base font-bold px-4 lg:px-0 max-w-md lg:max-w-none'>{t("home.desc")}</p>
            
            <div className="contact flex gap-3 flex-wrap justify-center lg:justify-start">
              <a href="https://github.com/Augajom" target='_blank' rel="noopener noreferrer" className="group border border-orange-500 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex justify-center items-center hover:bg-orange-500 hover:scale-110 cursor-pointer transition-all duration-300">
                  <FaGithub className="text-lg sm:text-xl text-orange-500 group-hover:text-black transition-all duration-300" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=suphamethee.au@gmail.com" target='_blank' rel="noopener noreferrer" className="group border border-orange-500 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex justify-center items-center hover:bg-orange-500 hover:scale-110 cursor-pointer transition-all duration-300">
                  <SiGmail className="text-lg sm:text-xl text-orange-500 group-hover:text-black transition-all duration-300" />
              </a>
              <a href="https://www.facebook.com/suphamethee.au/" target='_blank' rel="noopener noreferrer" className="group border border-orange-500 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex justify-center items-center hover:bg-orange-500 hover:scale-110 cursor-pointer transition-all duration-300">
                  <FaFacebook className="text-lg sm:text-xl text-orange-500 group-hover:text-black transition-all duration-300" />
              </a>
              <a href="https://www.instagram.com/sp_rea1s/" target='_blank' rel="noopener noreferrer" className="group border border-orange-500 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex justify-center items-center hover:bg-orange-500 hover:scale-110 cursor-pointer transition-all duration-300">
                  <RiInstagramFill className="text-lg sm:text-xl text-orange-500 group-hover:text-black transition-all duration-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Home