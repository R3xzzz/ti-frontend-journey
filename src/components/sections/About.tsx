import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="bg-card rounded-2xl p-8 md:p-12 shadow-2xl border border-border backdrop-blur-lg"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(163, 204, 218, 0.25)"
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-card-foreground mb-8 text-center"
          >
            ABOUT <span className="text-primary-foreground">Tugas</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-card-foreground/80 leading-relaxed space-y-6"
          >
            <p>
              Aplikasi web ini dibuat sebagai bagian dari tugas mata kuliah Pemrograman Web. 
              Menggunakan teknologi modern seperti React, TypeScript, dan Tailwind CSS untuk 
              menciptakan pengalaman pengguna yang interaktif dan responsif.
            </p>
            
            <p>
              Fitur-fitur yang diimplementasikan meliputi navigasi yang smooth, animasi yang 
              halus dengan Framer Motion, dan desain yang mengikuti prinsip-prinsip UI/UX 
              modern dengan fokus pada aksesibilitas dan performa.
            </p>
            
            <p>
              Proyek ini mendemonstrasikan kemampuan dalam pengembangan frontend modern 
              dengan struktur kode yang bersih, komponen yang dapat digunakan kembali, 
              dan implementasi best practices dalam pengembangan web.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 pt-8 border-t border-border"
          >
            <div className="flex flex-wrap justify-center gap-4 text-sm text-card-foreground/60">
              <span className="bg-muted px-3 py-1 rounded-full">React</span>
              <span className="bg-muted px-3 py-1 rounded-full">TypeScript</span>
              <span className="bg-muted px-3 py-1 rounded-full">Tailwind CSS</span>
              <span className="bg-muted px-3 py-1 rounded-full">Framer Motion</span>
              <span className="bg-muted px-3 py-1 rounded-full">React Router</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;