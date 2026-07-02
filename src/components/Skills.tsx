"use client";

import { motion } from "framer-motion";
import { CodeXml, Coffee, Brain } from "lucide-react";
import { 
  siPython, siJavascript, siHtml5, siReact, siTailwindcss, siBootstrap, 
  siDjango, siNodedotjs, siMysql, siMongodb, siPandas, siScikitlearn, 
  siStreamlit, siGithub 
} from 'simple-icons';

const SimpleIcon = ({ path, color = "currentColor", size = 22, className = "" }: { path: string, color?: string, size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d={path} />
  </svg>
);

const BsIcon = () => (
  <div className="w-5 h-5 bg-cyan-primary text-dark-main font-black text-[12px] flex items-center justify-center rounded-[4px] tracking-tighter">
    bs
  </div>
);

const skillCategories = [
  {
    title: "PROGRAMMING",
    skills: [
      { name: "Python", icon: <SimpleIcon path={siPython.path} /> },
      { name: "Java", icon: <Coffee size={24} /> },
      { name: "JavaScript", icon: <SimpleIcon path={siJavascript.path} /> },
    ]
  },
  {
    title: "FRONTEND",
    skills: [
      { name: "HTML & CSS", icon: <SimpleIcon path={siHtml5.path} /> },
      { name: "React.js", icon: <SimpleIcon path={siReact.path} /> },
      { name: "Tailwind CSS", icon: <SimpleIcon path={siTailwindcss.path} /> },
      { name: "Bootstrap", icon: <SimpleIcon path={siBootstrap.path} /> },
    ]
  },
  {
    title: "BACKEND & DB",
    skills: [
      { name: "Django", icon: <SimpleIcon path={siDjango.path} /> },
      { name: "Node.js & Express", icon: <SimpleIcon path={siNodedotjs.path} /> },
      { name: "MySQL", icon: <SimpleIcon path={siMysql.path} /> },
      { name: "MongoDB", icon: <SimpleIcon path={siMongodb.path} /> },
    ]
  },
  {
    title: "ML & DATA SCIENCE",
    skills: [
      { name: "Pandas & NumPy", icon: <SimpleIcon path={siPandas.path} /> },
      { name: "Scikit-learn", icon: <SimpleIcon path={siScikitlearn.path} /> },
      { name: "Deep Learning", icon: <Brain size={24} /> },
    ]
  },
  {
    title: "TOOLS & LIBRARIES",
    skills: [
      { name: "Streamlit", icon: <SimpleIcon path={siStreamlit.path} /> },
      { name: "BeautifulSoup", icon: <BsIcon /> },
      { name: "Git & GitHub", icon: <SimpleIcon path={siGithub.path} /> },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-dark-main relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 md:pl-32 lg:pl-40 relative z-10 max-w-7xl">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-left mb-16 flex flex-col sm:flex-row sm:items-center gap-6"
        >
          <div className="w-14 h-14 bg-dark-card/50 border border-white/5 rounded-xl flex items-center justify-center shadow-lg">
            <CodeXml size={28} className="text-cyan-primary" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-wide mb-1">
              Skills
            </h2>
            <p className="text-white/50 text-base font-light tracking-wide">
              Technologies and tools I work with
            </p>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div 
              key={catIdx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0B0E14] border border-white/5 rounded-[20px] p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] transition-all duration-300 group shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:-translate-y-2 hover:border-cyan-primary/30"
            >
              <h3 className="text-sm font-bold text-cyan-primary mb-6 tracking-widest uppercase">
                {category.title}
              </h3>
              <div className="flex flex-col gap-5">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-5 group/item cursor-default"
                  >
                    <div className="w-6 h-6 flex items-center justify-center text-cyan-primary transition-transform duration-300 group-hover/item:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-white/80 font-medium text-lg tracking-wide transition-colors duration-300 group-hover/item:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
