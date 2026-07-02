"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

export default function BackgroundEffect() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Language icons to use in the background
  const icons = [
    "/images/html-5-svgrepo-com.svg",
    "/images/css-svgrepo-com.svg",
    "/images/js-official-svgrepo-com.svg",
    "/images/typescript-official-svgrepo-com.svg",
    "/images/react-javascript-js-framework-facebook-svgrepo-com.svg",
    "/images/next-dot-js-svgrepo-com.svg",
    "/images/tailwind-css-svgrepo-com.svg",
    "/images/bootstrap-svgrepo-com.svg",
    "/images/python-svgrepo-com.svg",
    "/images/django-svgrepo-com.svg",
    "/images/mysql-logo-svgrepo-com.svg",
    "/images/shopify-svgrepo-com.svg",
    "/images/wordpress-svgrepo-com.svg",
    "/images/java-svgrepo-com.svg",
  ];

  // Generate icons only once on mount
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      icon: icons[i % icons.length],
      size: Math.random() * 40 + 40, // 40px to 80px
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 25 + 20, // Slightly slower for larger icons
      delay: Math.random() * -20, // Negative delay to start mid-animation
      rotate: Math.random() * 360,
    }));
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-[#050505]">
      {/* Moving Language Icons */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ 
              opacity: 0,
              rotate: particle.rotate 
            }}
            animate={{
              opacity: [0, 0.4, 0], // Higher max opacity
              x: [0, 80, 0], // Bigger drift
              y: [0, 150, 0], // Bigger drift
              rotate: particle.rotate + 360,
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              filter: "grayscale(60%) brightness(180%)", // More visible, less gray
            }}
          >
            <img 
              src={particle.icon} 
              alt="tech icon" 
              className="w-full h-full opacity-60"
            />
          </motion.div>
        ))}
      </div>

      {/* Moving Vertical Line */}
      <motion.div
        style={{ scaleY }}
        className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-primary/40 to-transparent origin-top -translate-x-1/2 z-10"
      />

      {/* Interactive Mouse Glow */}
      <div className="absolute inset-0">
         <motion.div 
            animate={{
              x: mousePosition.x - 250,
              y: mousePosition.y - 250,
            }}
            transition={{ type: "spring", damping: 40, stiffness: 60 }}
            className="w-[500px] h-[500px] rounded-full bg-cyan-primary/10 blur-[120px] absolute z-20"
         />
      </div>

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-30 bg-noise" />
    </div>
  );
}

