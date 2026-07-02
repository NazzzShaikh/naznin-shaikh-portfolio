"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";

export default function IntroAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Lock scrolling while animation is playing
    document.body.style.overflow = "hidden";
    
    // Total animation time: text types out (~1.5s), brief pause, then curtain opens
    const timer = setTimeout(() => {
      setShow(false);
      // Restore scrolling after a slight delay to allow curtain to open
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 1000); 
    }, 2800); 

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  const text = "Naznin Shaikh";

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          key="intro-container"
          className="fixed inset-0 z-[9999] flex items-center justify-center font-bold"
        >
          {/* Left Curtain */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-black origin-left"
            initial={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
          />
          
          {/* Right Curtain */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full bg-black origin-right"
            initial={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
          />

          {/* Text Container */}
          <motion.div
            className="z-10 text-cyan-400 text-5xl sm:text-6xl md:text-7xl lg:text-9xl tracking-wide md:tracking-widest flex flex-wrap justify-center items-center text-center px-4 leading-tight"
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {text.split(" ").map((word, wordIndex, wordsArray) => {
              // Calculate global index for staggering across spaces
              const previousCharsCount = wordsArray.slice(0, wordIndex).join("").length;
              return (
                <span key={wordIndex} className="inline-block whitespace-nowrap mx-2 md:mx-4 my-2">
                  {word.split("").map((char, charIndex) => (
                    <motion.span 
                      key={charIndex} 
                      className="inline-block"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        ease: "easeOut",
                        delay: (previousCharsCount + charIndex) * 0.12
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              );
            })}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
