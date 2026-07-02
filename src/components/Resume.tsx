"use client";

import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Resume() {
  const resumeUrl = "/Naznin_Shaikh_Resume.pdf"; // Path to your resume in public folder

  return (
    <section id="resume" className="py-20 px-4 bg-dark-main relative overflow-hidden">
      <div className="container mx-auto max-w-6xl md:pl-32 lg:pl-40 md:pr-8">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-20 text-left"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Resume
            <div className="w-20 h-1 bg-cyan-primary mt-4" />
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Resume Preview Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-primary/50 to-cyan-secondary/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-30"></div>
            <div className="relative bg-dark-card/40 backdrop-blur-md border border-cyan-primary/30 rounded-3xl p-3 flex flex-col items-center justify-center aspect-[3/4] overflow-hidden">
               <div className="relative w-full h-full rounded-2xl overflow-hidden mb-4">
                  <Image 
                    src="/images/naznin-resume-preview-1.png" 
                    alt="Resume Preview" 
                    fill 
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-main/40 to-transparent"></div>
               </div>
              
              <div className="w-full h-1 bg-cyan-primary/20 rounded-full mb-8 relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="absolute top-0 left-0 h-full bg-cyan-primary"
                />
              </div>

              <div className="flex flex-col gap-4 w-full">
                <a 
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-cyan-primary text-dark-main font-extrabold rounded-2xl hover:bg-cyan-secondary transition-all hover:scale-[1.02]"
                >
                  <ExternalLink size={20} />
                  View Resume Online
                </a>
                <a 
                  href={resumeUrl}
                  download="Naznin_Shaikh_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-4 border-2 border-cyan-primary text-cyan-primary font-extrabold rounded-2xl hover:bg-cyan-primary/10 transition-all"
                >
                  <Download size={20} />
                  Download PDF
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Highlights */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-dark-card/40 backdrop-blur-md border border-cyan-primary/10 hover:border-cyan-primary/30 transition-all"
            >
              <h4 className="text-xl font-extrabold text-cyan-primary mb-2">Education</h4>
              <p className="text-gray-300 font-bold">Computer Engineering</p>
              <p className="text-sm text-gray-500">2023 - 2027</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-dark-card/40 backdrop-blur-md border border-cyan-primary/10 hover:border-cyan-primary/30 transition-all"
            >
              <h4 className="text-xl font-extrabold text-cyan-primary mb-4">Focus Areas</h4>
              <ul className="flex flex-wrap gap-2">
                {["Java & Spring Boot", "Backend Development", "Database Design", "API Integration"].map(tag => (
                  <li key={tag} className="px-3 py-1 bg-cyan-primary/10 text-cyan-primary rounded-full text-xs font-bold uppercase tracking-wider">
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-2xl bg-dark-card/40 backdrop-blur-md border border-cyan-primary/10 hover:border-cyan-primary/30 transition-all"
            >
              <h4 className="text-xl font-extrabold text-cyan-primary mb-4">Key Experience</h4>
              <p className="text-gray-300 font-bold italic">"Expertise in building scalable web applications with a focus on robust backend systems and seamless database management.
                <br></br><br></br> Currently working as a <span className="text-xl font-extrabold text-cyan-primary">Java Developer Intern </span> at <span className="text-xl font-extrabold text-cyan-primary">Keyanna Technology Pvt. Ltd.</span>"</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
