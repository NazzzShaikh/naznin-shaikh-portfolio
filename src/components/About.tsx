"use client";

import { motion } from "framer-motion";


export default function About() {
  return (
    <section id="about" className="relative min-h-screen w-full flex items-center bg-dark-main overflow-hidden py-24">
      <div className="container mx-auto px-8 md:pl-32 lg:pl-40 md:pr-16 flex flex-col lg:flex-row items-center relative z-10">
        
        {/* Left Column: Content */}
        <div className="flex-1 lg:max-w-3xl text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-2">
                About
                <div className="w-16 h-1 bg-cyan-primary mt-2" />
              </h2>
              <a href="mailto:nazshaikh2529@gmail.com" className="text-cyan-primary font-medium hover:underline tracking-widest text-lg">
                nazshaikh2529@gmail.com
              </a>
            </div>

            <div className="space-y-6 text-lg md:text-xl text-white/70 leading-relaxed font-light">
              <p>
                I am a <span className="text-white font-medium italic">Computer Engineering student</span> passionate about 
                <span className="text-white font-medium italic"> Software Development</span>, 
                <span className="text-white font-medium italic"> Machine Learning</span>, and 
                <span className="text-white font-medium italic"> Backend Development</span>.
              </p>
              <p>
                I enjoy building practical applications that solve real-world problems and continuously learning new technologies. My interests include Artificial Intelligence, Deep Learning, Backend Development, and Web Application Development.
              </p>
              <p>
                I am always eager to improve my technical skills and work on impactful projects that push the boundaries of what&apos;s possible.
              </p>
            </div>

            <div className="mt-20 pt-10 flex flex-col items-start border-t border-white/5 opacity-60">
               <p className="text-sm tracking-[0.4em] uppercase text-white/50 mb-4">Ahmedabad, Gujarat, India</p>
               <div className="flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-cyan-primary" />
                  <p className="text-xs tracking-[0.2em] uppercase text-white/80 font-medium">Naznin Shaikh</p>
                  <span className="w-8 h-[1px] bg-cyan-primary" />
               </div>
            </div>
          </motion.div>
        </div>



      </div>
    </section>
  );
}
