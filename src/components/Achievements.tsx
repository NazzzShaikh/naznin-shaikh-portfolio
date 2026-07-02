"use client";

import { motion } from "framer-motion";
import { Award, Star, ExternalLink } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "HackerRank Gold Badge",
    category: "Java",
    color: "from-yellow-400 to-yellow-600",
    iconColor: "text-yellow-500",
    glow: "hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]",
    borderColor: "hover:border-yellow-500/50",
    iconGlow: "group-hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]",
  },
  {
    id: 2,
    title: "HackerRank Gold Badge",
    category: "SQL",
    color: "from-yellow-400 to-yellow-600",
    iconColor: "text-yellow-500",
    glow: "hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]",
    borderColor: "hover:border-yellow-500/50",
    iconGlow: "group-hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]",
  },
  {
    id: 3,
    title: "HackerRank Silver Badge",
    category: "Python",
    color: "from-gray-300 to-gray-500",
    iconColor: "text-gray-400",
    glow: "hover:shadow-[0_0_30px_rgba(156,163,175,0.15)]",
    borderColor: "hover:border-gray-400/50",
    iconGlow: "group-hover:shadow-[0_0_20px_rgba(156,163,175,0.4)]",
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 bg-dark-main relative overflow-hidden">
      <div className="container mx-auto max-w-6xl md:pl-32 lg:pl-40 md:pr-8 relative z-10">
        
        {/* Header Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="text-left"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Achievements
              <div className="w-20 h-1 bg-cyan-primary mt-4" />
            </h2>
            <p className="text-white/50 text-base md:text-lg font-light tracking-wide mt-6">
              Gold badges in Java & SQL, Silver badge in Python.
            </p>
          </motion.div>

          <motion.a
            href="https://www.hackerrank.com/profile/shaikhnaz5290"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-cyan-primary/10 border border-cyan-primary text-cyan-primary font-bold tracking-widest uppercase text-sm hover:bg-cyan-primary hover:text-dark-main transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] w-full md:w-auto shrink-0"
          >
            View HackerRank Profile <ExternalLink size={18} />
          </motion.a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className={`relative group bg-[#0B0E14]/80 backdrop-blur-xl border border-white/5 ${achievement.borderColor} rounded-[24px] p-8 transition-all duration-300 flex flex-col items-center text-center shadow-lg ${achievement.glow} overflow-hidden h-full flex-1`}
            >
              {/* Background Glow */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${achievement.color} rounded-full blur-[50px] opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`} />

              <div className={`relative z-10 mb-6 w-20 h-20 rounded-full bg-dark-main/50 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-all duration-500 ${achievement.iconGlow}`}>
                <Award size={40} className={achievement.iconColor} />
                <Star size={16} className={`absolute bottom-0 right-0 ${achievement.iconColor} drop-shadow-[0_0_5px_currentColor]`} />
              </div>

              <h3 className="text-xl md:text-2xl font-black text-white mb-4 group-hover:text-cyan-primary transition-colors relative z-10 line-clamp-2">
                {achievement.title}
              </h3>
              
              <div className="mt-auto pt-2 relative z-10 w-full">
                <div className="inline-block px-5 py-2 bg-white/5 border border-white/10 rounded-full group-hover:border-cyan-primary/30 transition-colors w-full">
                  <span className="text-cyan-primary font-bold text-sm tracking-widest uppercase">
                    {achievement.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
