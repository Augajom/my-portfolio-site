import React from "react";
import { motion } from "framer-motion";

// icon
import { FaGithub, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { IoLocation } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";

// i18n
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  const contact = [
    {
      icon: <IoLocation size={60} />,
      title: t("contact.items.address.title"),
      desc: t("contact.items.address.desc"),
    },
    {
      icon: <HiOutlineMailOpen size={60} />,
      title: t("contact.items.email.title"),
      desc: t("contact.items.email.desc"),
    },
    {
      icon: <LuPhoneCall size={60} />,
      title: t("contact.items.phone.title"),
      desc: t("contact.items.phone.desc"),
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center bg-black p-4 scroll-mt-24"
    >
      <div className="container max-w-6xl w-full h-full bg-black text-white text-center">
        {/* Header */}
        <motion.div className="pt-10 inline-block">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-8xl font-extrabold h-26
                      bg-gradient-to-r from-orange-500 via-yellow-400 to-red-600 
                      bg-clip-text text-transparent 
                      drop-shadow-[0_0_15px_rgba(255,140,0,0.6)]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {t("contact.header")}
          </motion.h1>

          <motion.div
            className="h-1 bg-orange-500 mt-2 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 mt-20 sm:grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {contact.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 border border-orange-500 rounded-xl p-8 flex flex-col items-center hover:scale-105 transform transition-all duration-300"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              viewport={{ once: true }}
            >
              <div className="text-orange-500 mb-8">{item.icon}</div>
              <h3 className="text-4xl font-bold mb-8">{item.title}</h3>
              <h3 className="text-lg" style={{ whiteSpace: "pre-line" }}>
                {item.desc}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="contact flex justify-center gap-10 mt-10">
          <a
            href="https://github.com/Augajom"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-orange-500 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex justify-center items-center hover:bg-orange-500 hover:w-22 hover:h-22 cursor-pointer transition-all duration-300"
          >
            <FaGithub className="size-4 sm:size-8 md:size-12 text-orange-500 group-hover:text-black transition-all duration-300" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=suphamethee.au@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-orange-500 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex justify-center items-center hover:bg-orange-500 hover:w-22 hover:h-22 cursor-pointer transition-all duration-300"
          >
            <SiGmail className="size-4 m:size-8 md:size-12 text-orange-500 group-hover:text-black transition-all duration-300" />
          </a>
          <a
            href="https://www.facebook.com/suphamethee.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-orange-500 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex justify-center items-center hover:bg-orange-500 hover:w-22 hover:h-22 cursor-pointer transition-all duration-300"
          >
            <FaFacebook className="size-4 sm:size-8 md:size-12 text-orange-500 group-hover:text-black transition-all duration-300" />
          </a>
          <a
            href="https://www.instagram.com/sp_rea1s/"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-orange-500 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex justify-center items-center hover:bg-orange-500 hover:w-22 hover:h-22 cursor-pointer transition-all duration-300"
          >
            <RiInstagramFill className="size-4 sm:size-8 md:size-12 text-orange-500 group-hover:text-black transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
