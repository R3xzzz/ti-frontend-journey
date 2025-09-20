import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import Navbar from "@/components/layouts/Navbar";
import About from "@/components/sections/About";
import polytechBg from "@/assets/poltek-bg.jpg";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0.5, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [1, 0.8, 0]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1.0],
        type: "tween"
      }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
      >
        {/* Animated Background Image */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${polytechBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            y: backgroundY,
            opacity: backgroundOpacity,
          }}
        />
        
        {/* Static Background Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Gradient Transition Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background"
          style={{ opacity: gradientOpacity }}
        />

        <motion.div 
          className="text-center space-y-8 relative z-10"
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold text-white tracking-wide drop-shadow-2xl"
          >
            WELCOME
          </motion.h1>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl text-white/90 font-medium drop-shadow-lg">
              Ahmad Fadhil Raihan
            </p>
            <p className="text-lg md:text-xl text-white/80 drop-shadow-lg">
              NIM: 123456789
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors duration-300 z-10"
          whileHover={{ y: -5 }}
          whileTap={{ y: 0 }}
          style={{ opacity: textOpacity }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.button>
      </motion.section>

      {/* About Section */}
      <About />
    </motion.div>
  );
};

export default Home;