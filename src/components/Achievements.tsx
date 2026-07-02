"use client";

import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "HackerRank Gold Badge",
    category: "Java",
    color: "from-yellow-400 to-yellow-600",
    iconColor: "text-yellow-500",
  },
  {
    id: 2,
    title: "HackerRank Gold Badge",
    category: "SQL",
    color: "from-yellow-400 to-yellow-600",
    iconColor: "text-yellow-500",
  },
  {
    id: 3,
    title: "HackerRank Silver Badge",
    category: "Python",
    color: "from-gray-300 to-gray-500",
    iconColor: "text-gray-400",
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 bg-dark-main relative overflow-hidden">
      <div className="container mx-auto max-w-6xl md:pl-32 lg:pl-40 md:pr-8">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-20 text-left"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Achievements
            <div className="w-20 h-1 bg-cyan-primary mt-4" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group bg-dark-card/40 backdrop-blur-xl border border-white/5 hover:border-cyan-primary/30 rounded-3xl p-8 transition-all duration-500 flex flex-col items-center text-center shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${achievement.color} rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

              <div className="relative z-10 mb-6 w-20 h-20 rounded-full bg-dark-main/50 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Award size={40} className={achievement.iconColor} />
                <Star size={16} className={`absolute bottom-0 right-0 ${achievement.iconColor} drop-shadow-[0_0_5px_currentColor]`} />
              </div>

              <h3 className="text-2xl font-black text-white mb-2 group-hover:text-cyan-primary transition-colors relative z-10">
                {achievement.title}
              </h3>
              
              <div className="inline-block px-4 py-1.5 mt-4 bg-white/5 border border-white/10 rounded-full relative z-10 group-hover:border-cyan-primary/30 transition-colors">
                <span className="text-cyan-primary font-bold text-sm tracking-widest uppercase">
                  {achievement.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
