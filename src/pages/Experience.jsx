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
      "/src/assets/experiences/1.png",
      "/src/assets/experiences/2.png",
      "/src/assets/experiences/3.png",
      "/src/assets/experiences/4.png",
      "/src/assets/experiences/5.png",
      "/src/assets/experiences/6.png",
      "/src/assets/experiences/7.png",
      "/src/assets/experiences/8.png",
      "/src/assets/experiences/9.jpg",
      "/src/assets/experiences/10.jpg",
      "/src/assets/experiences/11.jpg",
      "/src/assets/experiences/12.jpg",
      "/src/assets/experiences/13.jpg"
    ]
  };

  return (
    <section id='experience' className='min-h-screen flex justify-center bg-black p-4 scroll-mt-24'>
      <div className="container max-w-6xl w-full h-full bg-black text-white text-center">

        {/* Header */}
        <motion.div className="pt-10 inline-block">
          <motion.h1
            className="text-8xl text-orange-500 font-extrabold text-shadow-sm text-shadow-white"
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
        <div className="flex flex-col gap-16 mt-20">
          {expKeys.map((key, idx) => {
            const exp = experiences[key];
            const images = media[key] || [];

            return (
              <div key={idx} className="bg-gray-900 p-6 rounded-xl flex flex-col gap-6">

                {/* Slider */}
                <div className="w-full cursor-pointer">
                  <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true }}
                    navigation
                    loop
                    className='custom-swiper'
                  >
                    {images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={img}
                          alt={`${exp.title} ${i}`}
                          className="rounded-lg w-full h-128 object-cover"
                          onClick={() => { setCurrentIndex(i); setLightboxOpen(true) }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Description */}
                <div className="w-full text-white flex flex-col justify-center gap-4">
                  <h2 className="text-3xl font-bold" style={{ whiteSpace: "pre-line" }}>{exp.title}</h2>
                  <h3 className="text-xl text-orange-500">{exp.company} | {exp.period}</h3>
                  <p className="text-gray-200" style={{whiteSpace: "pre-line"}}>{exp.description}</p>
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
