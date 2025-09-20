import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/layouts/Navbar";
import About from "@/components/sections/About";

const Home = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center relative pt-20"
      >
        <div className="text-center space-y-8">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold text-foreground tracking-wide"
          >
            WELCOME
          </motion.h1>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl text-foreground/90 font-medium">
              Ahmad Fadhil Raihan
            </p>
            <p className="text-lg md:text-xl text-foreground/80">
              NIM: 123456789
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/60 hover:text-foreground transition-colors duration-300"
          whileHover={{ y: -5 }}
          whileTap={{ y: 0 }}
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