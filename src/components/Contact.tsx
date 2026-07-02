"use client";

import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-dark-main border-t border-cyan-primary/10">
      <div className="container mx-auto max-w-3xl md:pl-32 lg:pl-40 md:pr-8">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           className="bg-dark-card/40 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-cyan-primary/30 shadow-2xl relative overflow-hidden"
        >
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-primary/10 rounded-full blur-3xl -m-10" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-primary/5 rounded-full blur-3xl -m-20" />

          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-cyan-primary leading-tight">
             Wanna make your idea real? <br />
             <span className="text-white">contact me here.</span>
          </h2>
          
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-primary transition-colors" size={20} />
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-dark-main/40 backdrop-blur-sm border border-cyan-primary/20 rounded-xl py-4 pl-12 pr-4 text-base outline-none focus:border-cyan-primary focus:ring-4 focus:ring-cyan-primary/10 transition-all font-medium"
                />
              </div>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-primary transition-colors" size={20} />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-dark-main/40 backdrop-blur-sm border border-cyan-primary/20 rounded-xl py-4 pl-12 pr-4 text-base outline-none focus:border-cyan-primary focus:ring-4 focus:ring-cyan-primary/10 transition-all font-medium"
                />
              </div>
            </div>

            <div className="relative group">
              <MessageSquare className="absolute left-4 top-4 text-gray-400 group-focus-within:text-cyan-primary transition-colors" size={20} />
              <textarea
                placeholder="How can I help you?"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-dark-main/40 backdrop-blur-sm border border-cyan-primary/20 rounded-xl py-4 pl-12 pr-4 text-base outline-none focus:border-cyan-primary focus:ring-4 focus:ring-cyan-primary/10 transition-all font-medium resize-none"
              ></textarea>
            </div>

            <button
               type="submit"
               disabled={status === "sending"}
               className="w-full py-4 bg-cyan-primary text-dark-main font-bold text-lg rounded-xl hover:bg-cyan-secondary hover:scale-[1.01] transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl shadow-cyan-primary/20"
            >
               {status === "sending" ? "Processing..." : (
               <>
                 <Send size={20} />
                 Send Inquiry
               </>
               )}
            </button>

            {status === "success" && (
                <div className="text-center p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-xl font-bold">
                   Message sent successfully! I&apos;ll get back to you soon.
                </div>
            )}
            {status === "error" && (
                <div className="text-center p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl font-bold">
                   Error sending message. Please try again or email directly.
                </div>
            )}
          </form>
        </motion.div>

        {/* Footer Area with Social Links */}
        <div className="mt-20 flex flex-col items-center gap-6">
           <div className="flex gap-8">
              <a href="https://github.com/NazzzShaikh" target="_blank" className="text-gray-400 hover:text-cyan-primary p-3 border border-cyan-primary/20 rounded-full transition-all hover:scale-110">GITHUB</a>
              <a href="https://www.linkedin.com/in/naznin-shaikh-910b012a6/" target="_blank" className="text-gray-400 hover:text-cyan-primary p-3 border border-cyan-primary/20 rounded-full transition-all hover:scale-110">LINKEDIN</a>
           </div>
           <p className="text-gray-600 font-medium">Naznin Shaikh Portfolio &copy; {new Date().getFullYear()}. All rights Reserved.</p>
        </div>
      </div>
    </section>
  );
}
