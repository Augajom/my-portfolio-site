import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from "react-i18next";
import { FaYoutube } from "react-icons/fa";

function Projects() {
  const { t } = useTranslation();

  // ดึง project จาก i18n
  const projects = t("projects.items", { returnObjects: true });

  // map key => object
  const projectKeys = Object.keys(projects);

  // img & video เก็บไว้ใน mapping (เพราะไม่ต้องแปล)
  const media = {
    p1: { img: "/src/assets/projects/1.png", video: "https://youtu.be/H5nEBMcURt0" },
    p2: { img: "/src/assets/projects/2.png", video: "https://youtu.be/RtTKnKYdfDw?si=VG6XTcAPnn3TVfKH" },
    p3: { img: "/src/assets/projects/3.png", video: "https://youtu.be/FTlZHSAH0-Q?si=t_6kKYPGXuSp1Wtl" },
    p4: { img: "/src/assets/projects/4.png", video: "https://youtu.be/bLke_rMmeRM?si=snq4zvZ0KJCsCGbK" },
    p5: { img: "/src/assets/projects/5.png", video: "https://youtu.be/gZ8i-XTpJQ0?si=l-b-VTFPaiLVY9Wd" },
    p6: { img: "/src/assets/projects/6.png", video: "https://youtu.be/SJgobDJiIF4" },
    p7: { img: "/src/assets/projects/7.png", video: "https://youtu.be/SJgobDJiIF4" }
  };

  return (
    <section id='projects' className='min-h-screen flex justify-center bg-black p-4 scroll-mt-24'>
      <div className="container max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className='text-center mb-10'>
          <motion.div className="pt-10 inline-block">
            <motion.h1
              className="text-8xl text-orange-500 font-extrabold text-shadow-sm text-shadow-white"
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
