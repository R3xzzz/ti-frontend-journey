import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { User } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "DASHBOARD", path: "/dashboard" },
    { name: "COURSES", path: "/courses" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md"
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold text-primary-foreground bg-primary rounded-xl px-4 py-2 shadow-lg"
          >
            Ti
          </motion.div>

          {/* Centered Navigation Pills */}
          <div className="flex items-center justify-center space-x-2">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`
                    px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-300
                    ${isActive(item.path) 
                      ? 'bg-card text-card-foreground shadow-lg border border-border' 
                      : 'text-foreground/70 hover:text-foreground hover:bg-card/50 hover:shadow-md'
                    }
                  `}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Profile Section */}
          <div className="flex items-center space-x-2 text-foreground">
            <User className="w-5 h-5" />
            <span className="hidden sm:inline font-medium text-sm">Profile</span>
          </div>
        </div>

        {/* Mobile Navigation Pills - Centered */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden mt-4 flex justify-center space-x-2"
        >
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.path}
                className={`
                  px-4 py-2 rounded-full font-medium text-xs tracking-wide transition-all duration-300
                  ${isActive(item.path) 
                    ? 'bg-card text-card-foreground shadow-md border border-border' 
                    : 'text-foreground/70 hover:text-foreground hover:bg-card/50'
                  }
                `}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;