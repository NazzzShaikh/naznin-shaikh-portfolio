"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    id: 1,
    title: "Introduction to HTML, CSS & JavaScript",
    issuer: "Coursera / IBM",
    date: "2023",
    url: "/Introduction to HTML,CSS & JavaScript.pdf",
    image: "/images/cert1.png", 
  },
  {
    id: 2,
    title: "Back-End Development with .Net",
    issuer: "Coursera / Microsoft",
    date: "2024",
    url: "/Back-End Development with .Net.pdf",
    image: "/images/cert2.png",
  },
  {
    id: 3,
    title: "Exploratory Data Analysis for Machine Learning",
    issuer: "Coursera / IBM",
    date: "2024",
    url: "/Exploratory Data Analysis for Machine Learning.pdf",
    image: "/images/cert3.png",
  },
  {
    id: 4,
    title: "Introduction to Java",
    issuer: "Coursera / IBM",
    date: "2025",
    url: "/Introduction to Java.pdf",
    image: "/images/cert4.png",
  },
  {
    id: 5,
    title: "Inheritance and Data Structures in Java",
    issuer: "Coursera / IBM",
    date: "2025",
    url: "/Inheritance and Data Structures in Java.pdf",
    image: "/images/cert5.png",
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4 bg-dark-main border-t border-cyan-primary/10">
      <div className="container mx-auto max-w-6xl md:pl-32 lg:pl-40 md:pr-8">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-20 text-left"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Certificates
            <div className="w-20 h-1 bg-cyan-primary mt-4" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-[32px] bg-[#030617] border border-white/5 overflow-hidden hover:border-cyan-primary/30 transition-all duration-500 shadow-2xl flex flex-col h-full"
            >
              {/* Image Section (Screenshot of PDF) */}
              <div className="p-2 sm:p-3">
                <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-white/5 border border-white/10 group-hover:border-cyan-primary/20 transition-all shadow-inner">
                  <Image 
                    src={cert.image} 
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    priority={idx < 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <a 
                      href={cert.url} 
                       target="_blank" 
                       className="p-3 bg-cyan-primary text-black rounded-full hover:scale-110 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.6)]"
                    >
                      <Eye size={24} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="px-8 pb-8 pt-2 flex flex-col flex-grow text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight group-hover:text-cyan-primary transition-colors min-h-[3.5rem] flex items-center justify-center">
                  {cert.title}
                </h3>
                <p className="text-gray-400 font-medium mb-6">
                  {cert.issuer}
                </p>

                <div className="mt-auto pt-4">
                  <a 
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-cyan-primary/30 text-cyan-primary font-bold text-xs tracking-widest uppercase rounded-full hover:bg-cyan-primary hover:text-dark-main transition-all shadow-lg hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] active:scale-95"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
