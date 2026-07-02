"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const educationData = [
  {
    id: 1,
    institution: "L.J. Institute of Engineering and Technology",
    degree: "Bachelor of Engineering (Computer Engineering)",
    duration: "September 2023 – Present",
    score: "CGPA: 8.17",
    icon: GraduationCap,
  },
  {
    id: 2,
    institution: "Sheth Chimanlal Nagindas Vidyavihar",
    degree: "Higher Secondary Certificate (HSC)",
    duration: "Year of Passing: 2023",
    score: "HSC: 78.64 PR | GUJCET: 88.53 PR | JEE: 80.39 PR",
    icon: BookOpen,
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 bg-dark-main relative overflow-hidden">
      <div className="container mx-auto max-w-5xl md:pl-32 lg:pl-40 md:pr-8">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-20 text-left"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Education
            <div className="w-20 h-1 bg-cyan-primary mt-4" />
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-primary via-cyan-secondary to-transparent rounded-full transform md:-translate-x-1/2 opacity-20" />

          <div className="space-y-12">
            {educationData.map((edu, idx) => {
              const Icon = edu.icon;
              return (
                <div key={edu.id} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* Timeline Dot & Icon */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-dark-card border-4 border-cyan-primary rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                    <Icon size={20} className="text-cyan-primary" />
                  </div>

                  {/* Empty space for alternative sides on Desktop */}
                  <div className="hidden md:block w-5/12" />

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full md:w-5/12 pl-20 md:pl-0"
                  >
                    <div className="bg-dark-card/40 backdrop-blur-md border border-white/5 hover:border-cyan-primary/30 rounded-3xl p-8 transition-all duration-300 group shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:-translate-y-2">
                      <div className="text-cyan-primary font-bold text-sm tracking-widest uppercase mb-2">
                        {edu.duration}
                      </div>
                      <h3 className="text-2xl font-black text-white mb-2 group-hover:text-cyan-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg font-medium text-white/70 mb-4">
                        {edu.institution}
                      </h4>
                      <div className="inline-block px-4 py-2 bg-cyan-primary/10 rounded-full text-cyan-secondary font-bold text-sm tracking-wide">
                        {edu.score}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
