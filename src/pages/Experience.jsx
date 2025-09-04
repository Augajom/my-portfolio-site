import React, { useState } from 'react'

// library
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// i18n
import { useTranslation } from "react-i18next";

//image
import img1 from "../assets/experiences/1.png"
import img2 from "../assets/experiences/2.png"
import img3 from "../assets/experiences/3.png"
import img4 from "../assets/experiences/4.png"
import img5 from "../assets/experiences/5.png"
import img6 from "../assets/experiences/6.png"
import img7 from "../assets/experiences/7.png"
import img8 from "../assets/experiences/8.png"
import img9 from "../assets/experiences/9.jpg"
import img10 from "../assets/experiences/10.jpg"
import img11 from "../assets/experiences/11.jpg"
import img12 from "../assets/experiences/12.jpg"
import img13 from "../assets/experiences/13.jpg"

function Experience() {
  const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  

  // ดึงข้อมูลจาก i18n
  const experiences = t("experience.items", { returnObjects: true });
  const expKeys = Object.keys(experiences);

  // รูปภาพ (ไม่ต้องแปล)
  const media = {
    exp1: [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
      img13,
    ]
  };

  return (
    <section id='experience' className='min-h-screen flex justify-center bg-black px-4 py-8 scroll-mt-24'>
      <div className="container max-w-6xl w-full h-full bg-black text-white text-center">

        {/* Header */}
        <motion.div className="pt-10 inline-block">
          <motion.h1
                      className="text-6xl md:text-8xl font-extrabold 
                                bg-gradient-to-r from-orange-500 via-yellow-400 to-red-600 
                                bg-clip-text text-transparent 
                                drop-shadow-[0_0_15px_rgba(255,140,0,0.6)]"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                    >
                      {t("experience.header")}
                    </motion.h1>

          <motion.div
            className="h-1 bg-orange-500 mt-2 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Experiences */}
        <div className="flex flex-col gap-8 md:gap-16 mt-10 md:mt-20">
          {expKeys.map((key, idx) => {
            const exp = experiences[key];
            const images = media[key] || [];

            return (
              <div key={idx} className="bg-gray-900 p-4 md:p-6 rounded-xl flex flex-col gap-4 md:gap-6">

                {/* Slider */}
                <div className="w-full cursor-pointer">
                  <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{ delay: 5000 }}
                    pagination={{ 
                      clickable: true,
                      dynamicBullets: true
                    }}
                    navigation={{
                      enabled: true,
                    }}
                    loop
                    className='custom-swiper w-full'
                    style={{
                      '--swiper-navigation-color': '#f97316',
                      '--swiper-pagination-color': '#f97316',
                    }}
                  >
                    {images.map((img, i) => (
                      <SwiperSlide key={i}>
                          <div className="relative group">
                            <img
                              src={img}
                              alt={`${exp.title} ${i}`}
                              className="rounded-lg w-full h-64 sm:h-80 md:h-96 lg:h-128 object-cover transition-transform duration-300 group-hover:scale-105"
                              onClick={() => {
                                if (window.innerWidth >= 768) {
                                  setCurrentIndex(i)
                                  setLightboxOpen(true)
                                }
                              }}
                              loading="lazy"
                            />

                            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                              <div className="bg-white bg-opacity-90 px-3 py-2 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                <span className="text-black text-sm font-medium">🔍 ดูเต็มจอ</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Description */}
                <div className="w-full text-white flex flex-col justify-center gap-2 md:gap-4 text-center">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed" style={{ whiteSpace: "pre-line" }}>
                    {exp.title}
                  </h2>
                  <h3 className="text-sm sm:text-lg md:text-xl text-orange-500 font-medium">
                    {exp.company} | {exp.period}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed" style={{whiteSpace: "pre-line"}}>
                    {exp.description}
                  </p>
                </div>

              </div>
            )
          })}
        </div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={media.exp1.map((src) => ({ src }))}
          index={currentIndex}
          controller={{ closeOnBackdropClick: true }}
        />
      </div>
    </section>
  )
}

export default Experience