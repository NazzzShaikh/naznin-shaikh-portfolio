"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "./SocialIcons";

const projects = [
  {
    id: 1,
    index: "01",
    title: "Smart Student Career Path Recommender",
    description: "An intelligent career recommendation platform that helps students identify suitable career paths based on their interests, skills, and academic performance using machine learning algorithms.",
    tech: "Django, Python, Machine Learning, HTML, CSS, JS",
    category: "AI/ML",
    image: "/images/hero-bg.png",
    link: "#"
  },
  {
    id: 2,
    index: "02",
    title: "Smart Bakery Ordering System",
    description: "A complete bakery management and ordering platform with authentication, product management, cart functionality, and order tracking.",
    tech: "React.js, Node.js, Express.js, MongoDB",
    category: "Full Stack",
    image: "/images/hero-bg.png",
    link: "#"
  },
  {
    id: 3,
    index: "03",
    title: "CareerLink",
    description: "A recruitment and talent management platform designed to simplify job postings, applications, and candidate management.",
    tech: "Java, JDBC, DBMS",
    category: "Software",
    image: "/images/career-link.png",
    link: "#",
    githubLink: "https://github.com/NazzzShaikh/CareerLink"
  },
  {
    id: 4,
    index: "04",
    title: "Trackdemic",
    description: "A comprehensive e-learning platform containing Student, Faculty, and Admin panels with modern learning management capabilities.",
    tech: "Django, React, Python, Tailwind, Scikit-learn, OpenAI API",
    category: "AI Web",
    image: "/images/hero-bg.png",
    link: "#",
    githubLink: "https://github.com/NazzzShaikh/Trackdemic"
  },
  {
    id: 5,
    index: "05",
    title: "Fiction Fusion",
    description: "A console-based application for efficient book and user account management.",
    tech: "Python, DBMS",
    category: "Console",
    image: "/images/hero-bg.png",
    link: "#"
  },
  {
    id: 6,
    index: "06",
    title: "The Saaz",
    description: "A responsive bakery website showcasing bakery products and services with an attractive user experience.",
    tech: "HTML, CSS, JavaScript, Bootstrap",
    category: "Frontend",
    image: "/images/the-saaz.png",
    link: "#",
    liveLink: "https://the-saaz.vercel.app/",
    githubLink: "https://github.com/NazzzShaikh/The-Saaz"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-dark-main">
      <div className="container mx-auto max-w-6xl md:pl-32 lg:pl-40 md:pr-8">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-20 text-left"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Projects
            <div className="w-20 h-1 bg-cyan-primary mt-4" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative group flex flex-col bg-dark-card/40 backdrop-blur-xl border border-white/5 rounded-[32px] p-6 md:p-8 hover:border-cyan-primary/30 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] h-full"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-primary/5 rounded-full blur-[80px] -m-20 group-hover:bg-cyan-primary/15 transition-all duration-700 pointer-events-none" />
              
              {/* Screenshot */}
              <div className="w-full aspect-video relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-cyan-primary/20 transition-all duration-500 shadow-md mb-8">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Category Tag */}
                <div className="absolute top-4 right-4 bg-dark-main/90 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full z-10 shadow-lg">
                  <span className="text-cyan-primary font-bold text-xs tracking-widest uppercase">{project.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col text-left relative z-10">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-black text-white group-hover:text-cyan-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <span className="text-4xl font-black text-white/5 select-none leading-none group-hover:text-white/10 transition-colors">
                    {project.index}
                  </span>
                </div>
                
                <p className="text-white/70 text-sm md:text-base mb-8 leading-relaxed flex-1 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-white/5">
                  <p className="text-cyan-primary font-bold tracking-widest uppercase text-[10px] mb-2 opacity-80">Technologies Used</p>
                  <p className="text-white/60 text-sm font-light italic mb-4">
                    {project.tech}
                  </p>
                  
                  {(project.liveLink || project.githubLink) && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {project.liveLink && (
                        <a 
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-cyan-primary/10 hover:bg-cyan-primary text-cyan-primary hover:text-dark-main border border-cyan-primary/30 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.1)] hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                        >
                          <ExternalLink size={14} /> Live Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a 
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white text-white hover:text-dark-main border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300"
                        >
                          <GithubIcon size={14} /> Source
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
