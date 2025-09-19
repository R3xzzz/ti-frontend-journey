import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/layouts/Navbar";
import About from "@/components/sections/About";
import universityBg from "@/assets/university-bg.jpg";

const Home = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center relative pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${universityBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="text-center space-y-8">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold text-white tracking-wide drop-shadow-lg"
          >
            WELCOME
          </motion.h1>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl text-white/95 font-medium drop-shadow-md">
              Ahmad Fadhil Raihan
            </p>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300"
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
    </div>
  );
};

export default Home;