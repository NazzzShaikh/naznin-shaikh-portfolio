"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { 
  GithubIcon, 
  LinkedinIcon, 
  BehanceIcon, 
  FacebookIcon, 
  InstagramIcon, 
  PinterestIcon, 
  XIcon, 
  WhatsappIcon,
  MailIcon
} from "./SocialIcons";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Backend Developer", "Machine Learning Enthusiast", "Computer Engineering Student"];

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(80);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      } else {
        timer = setTimeout(handleTyping, typingSpeed);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="hero" className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Workspace Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-8 md:pl-32 lg:pl-40 md:pr-16 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-widest text-white/90 mb-2 uppercase">
              Shaikh
            </h2>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-cyan-primary mb-4 uppercase leading-none">
              Naznin
            </h1>
            
            <div className="min-h-[40px]">
              <p className="text-xl md:text-2xl font-light tracking-[0.3em] text-white/70 uppercase italic flex items-center gap-1">
                {text}
                <span className="inline-block w-[2px] h-[30px] bg-cyan-primary animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-12">
              <motion.a
                href="/Naznin_Shaikh_Resume.pdf"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-3 border-2 border-cyan-primary rounded-full text-cyan-primary font-bold hover:bg-cyan-primary hover:text-dark-main transition-all duration-300 min-w-[160px] text-center shadow-[0_0_15px_rgba(6,182,212,0.2)]"
              >
                Resume
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-3 border-2 border-white rounded-full text-white font-bold hover:bg-white hover:text-black transition-all duration-300 min-w-[160px] text-center shadow-lg"
              >
                Portfolio
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Icons at Right Side */}
      <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
        <motion.div 
          className="flex flex-col items-center gap-8 text-white/40"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a href="https://github.com/NazzzShaikh" target="_blank" className="hover:text-cyan-primary transition-all hover:scale-125"><GithubIcon size={22} /></a>
          <a href="https://www.linkedin.com/in/naznin-shaikh-910b012a6/" target="_blank" className="hover:text-cyan-primary transition-all hover:scale-125"><LinkedinIcon size={22} /></a>
          <a href="mailto:nazshaikh2529@gmail.com" className="hover:text-cyan-primary transition-all hover:scale-125"><MailIcon size={22} /></a>
          <div className="w-[1px] h-24 bg-gradient-to-b from-cyan-primary/60 to-transparent mt-4" />
        </motion.div>
      </div>

    </section>
  );
}
