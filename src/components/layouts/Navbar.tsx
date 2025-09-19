import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { User, LogOut, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Simple logout - in a real app you'd clear auth tokens
    navigate("/login");
  };

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

          {/* Centered Navigation Pills - Desktop Only */}
          <div className="hidden md:flex items-center justify-center space-x-2">
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

          {/* Mobile Navigation Pills - Centered */}
          <div className="md:hidden flex items-center justify-center space-x-1 flex-1 mx-4">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`
                    px-3 py-1.5 rounded-full font-medium text-xs tracking-wide transition-all duration-300
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
          </div>

          {/* Profile Section with Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-foreground hover:text-foreground/80 transition-colors duration-300 focus:outline-none"
              >
                <User className="w-5 h-5" />
                <span className="hidden sm:inline font-medium text-sm">Ahmad</span>
                <ChevronDown className="w-4 h-4" />
              </motion.button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-56 bg-card border border-border shadow-xl z-50 mt-2"
            >
              <div className="px-4 py-3 border-b border-border">
                <p className="text-sm font-medium text-card-foreground">Ahmad Fadhil Raihan</p>
                <p className="text-xs text-card-foreground/60">Student Portal</p>
              </div>
              <DropdownMenuItem 
                onClick={handleLogout}
                className="cursor-pointer text-destructive hover:text-destructive hover:bg-destructive/10 focus:text-destructive focus:bg-destructive/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;