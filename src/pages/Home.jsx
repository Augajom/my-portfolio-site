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
    <section id='home' className='flex justify-center bg-black p-4 mt-23 scroll-mt-23'>
      <div className="container max-w-6xl w-full bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-20">
          
          {/* Profile */}
          <motion.div 
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src={profile} alt="" className="w-120 h-120 md:w-140 md:h-140 rounded-full object-cover"/>
          </motion.div>

          {/* Text */}
          <motion.div 
            className="text-white my-auto mr-4 flex flex-col items-center text-center lg:block lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex">
              <p className='text-5xl mb-4 font-bold md:text-6xl'>{t("home.hi")}</p>
              <p className='text-5xl text-orange-500 mb-4 ml-2 font-bold md:text-6xl'>{t("home.name")}</p>
            </div>
            <div className="flex text-3xl mb-4 font-bold lg:text-4xl">
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
            <p className='text-sm mb-4 font-bold'>{t("home.desc")}</p>
            
            <div className="contact flex gap-2">
              <a href="https://github.com/Augajom" target='_blank' rel="noopener noreferrer" className="group border border-orange-500 w-14 h-14 rounded-full flex justify-center items-center hover:bg-orange-500 hover:w-16 hover:h-16 cursor-pointer transition-all duration-300">
                  <FaGithub className="size-6 text-orange-500 group-hover:text-black transition-all duration-300" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=suphamethee.au@gmail.com" target='_blank' rel="noopener noreferrer" className="group border border-orange-500 w-14 h-14 rounded-full flex justify-center items-center hover:bg-orange-500 hover:w-16 hover:h-16 cursor-pointer transition-all duration-300">
                  <SiGmail className="size-6 text-orange-500 group-hover:text-black transition-all duration-300" />
              </a>
              <a href="https://www.facebook.com/suphamethee.au/" target='_blank' rel="noopener noreferrer" className="group border border-orange-500 w-14 h-14 rounded-full flex justify-center items-center hover:bg-orange-500 hover:w-16 hover:h-16 cursor-pointer transition-all duration-300">
                  <FaFacebook className="size-6 text-orange-500 group-hover:text-black transition-all duration-300" />
              </a>
              <a href="https://www.instagram.com/sp_rea1s/" target='_blank' rel="noopener noreferrer" className="group border border-orange-500 w-14 h-14 rounded-full flex justify-center items-center hover:bg-orange-500 hover:w-16 hover:h-16 cursor-pointer transition-all duration-300">
                  <RiInstagramFill className="size-6 text-orange-500 group-hover:text-black transition-all duration-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Home
