import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from "react-i18next";
import { FaYoutube } from "react-icons/fa";

//image
import img1 from "../assets/projects/1.png"
import img2 from "../assets/projects/2.png"
import img3 from "../assets/projects/3.png"
import img4 from "../assets/projects/4.png"
import img5 from "../assets/projects/5.png"
import img6 from "../assets/projects/6.png"
import img7 from "../assets/projects/7.png"
import img8 from "../assets/projects/8.png"

function Projects() {
  const { t } = useTranslation();

  // ดึง project จาก i18n
  const projects = t("projects.items", { returnObjects: true });

  // map key => object
  const projectKeys = Object.keys(projects);

  // img & video
  const media = {
    p1: { img: img1, video: "https://youtu.be/H5nEBMcURt0" },
    p2: { img: img2, video: "https://youtu.be/RtTKnKYdfDw?si=VG6XTcAPnn3TVfKH" },
    p3: { img: img3, video: "https://youtu.be/FTlZHSAH0-Q?si=t_6kKYPGXuSp1Wtl" },
    p4: { img: img4, video: "https://youtu.be/bLke_rMmeRM?si=snq4zvZ0KJCsCGbK" },
    p5: { img: img5, video: "https://youtu.be/gZ8i-XTpJQ0?si=l-b-VTFPaiLVY9Wd" },
    p6: { img: img6 },
    p7: { img: img7, video: "https://youtu.be/GNsFOdBIhBg" },
    p8: { img: img8, video: "https://youtu.be/SJgobDJiIF4" }
  };

  return (
    <section id='projects' className='min-h-screen flex justify-center bg-black p-4 scroll-mt-24'>
      <div className="container max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className='text-center mb-10'>
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
                        {t("projects.header")}
                      </motion.h1>
                      
            <motion.div
              className="h-1 bg-orange-500 mt-2 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
          {projectKeys.map((key, idx) => {
            const project = projects[key];
            const { img, video } = media[key] || {};
            return (
              <motion.div
                key={idx}
                className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* Thumbnail */}
                <img src={img} alt={project.title} className="w-full h-64 object-cover" />

                {/* Content */}
                <div className="p-6 flex flex-col gap-4">
                  <h2 className="text-2xl font-bold text-white" style={{ whiteSpace: "pre-line" }}>
                    {project.title}
                  </h2>
                  <p className="text-gray-200">{project.description}</p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm">{tech}</span>
                    ))}
                  </div>

                  {/* YouTube Link */}
                  {video && (
                    <a
                      href={video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:text-red-600 flex items-center gap-2 font-bold"
                    >
                      <FaYoutube size={24} /> {t("projects.watchVideo", "Watch Video")}
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
