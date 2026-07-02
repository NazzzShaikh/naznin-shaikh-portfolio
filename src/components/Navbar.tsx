"use client";

import { motion } from "framer-motion";
import { Home, User, Layers, Briefcase, Award, Zap, FileText, Send, ScrollText } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
       const sections = ["hero", "about", "projects", "experience", "education", "achievements", "skills", "resume", "contact"];
       for (const section of sections) {
         const element = document.getElementById(section);
         if (element) {
           const rect = element.getBoundingClientRect();
           // Detect if the section's top is near the middle of the screen
           if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
             setActiveSection(section);
           }
         }
       }
    };
    
    // Set initial active state based on scroll
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hero", href: "#hero", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Layers },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Education", href: "#education", icon: FileText },
    { name: "Achievements", href: "#achievements", icon: Award },
    { name: "Skills", href: "#skills", icon: Zap },
    { name: "Resume", href: "#resume", icon: ScrollText },
    { name: "Contact", href: "#contact", icon: Send },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 2.8 }} // delay to allow intro animation
      className="fixed z-[100] flex items-center justify-center 
                 md:flex-col md:left-8 md:top-1/2 md:bottom-auto md:-translate-y-1/2 md:-translate-x-0 
                 flex-row bottom-6 left-1/2 -translate-x-1/2 
                 rounded-full bg-dark-main/50 backdrop-blur-xl border border-cyan-primary/20 
                 md:py-6 md:px-3 py-3 px-3 sm:px-6 md:gap-5 gap-1 sm:gap-2 
                 shadow-[0_0_30px_rgba(6,182,212,0.15)] max-w-[95vw]"
    >
      {navLinks.map((link) => {
        const Icon = link.icon;
        const isActive = activeSection === link.name.toLowerCase();
        
        return (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setActiveSection(link.name.toLowerCase())}
            className="relative group flex items-center justify-center p-2 sm:p-3 md:p-3.5 rounded-full transition-all duration-300 outline-none"
          >
            {/* Active Background Pill */}
            {isActive && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute inset-0 bg-cyan-primary/20 rounded-full border border-cyan-primary/50"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            
            {/* Icon */}
            <Icon 
              size={22} 
              strokeWidth={isActive ? 2.5 : 1.5}
              className={`relative z-10 transition-all duration-300 md:scale-100 scale-90 ${
                isActive 
                  ? "text-cyan-primary md:scale-110 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" 
                  : "text-white/50 group-hover:text-white group-hover:scale-110"
              }`} 
            />

            {/* Desktop Tooltip */}
            <div className="hidden md:block absolute left-full ml-6 px-3 py-2 bg-dark-card/90 border border-cyan-primary/30 rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.2)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 whitespace-nowrap z-50 pointer-events-none backdrop-blur-md">
              <span className="text-[10px] font-bold text-cyan-primary tracking-[0.2em] uppercase">{link.name}</span>
            </div>
          </a>
        );
      })}
    </motion.nav>
  );
}
