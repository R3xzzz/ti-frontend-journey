import { motion } from "framer-motion";
import Navbar from "@/components/layouts/Navbar";
import { BarChart3, Users, BookOpen, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { icon: Users, label: "Total Students", value: "1,234", color: "text-blue-500" },
    { icon: BookOpen, label: "Active Courses", value: "42", color: "text-green-500" },
    { icon: TrendingUp, label: "Completion Rate", value: "87%", color: "text-purple-500" },
    { icon: BarChart3, label: "Total Hours", value: "5,678", color: "text-orange-500" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-32 pb-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center"
          >
            Dashboard Page
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-foreground/80 text-center mb-12"
          >
            Monitor your learning progress and statistics
          </motion.p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (index * 0.1), duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(163, 204, 218, 0.1)"
                }}
                className="bg-card rounded-xl p-6 border border-border shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  <span className="text-2xl font-bold text-card-foreground">
                    {stat.value}
                  </span>
                </div>
                <p className="text-card-foreground/70 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-xl"
          >
            <h2 className="text-2xl font-bold text-card-foreground mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + (index * 0.1), duration: 0.5 }}
                  className="flex items-center p-4 bg-muted rounded-lg border border-border/50"
                >
                  <div className="w-3 h-3 bg-accent rounded-full mr-4"></div>
                  <div className="flex-1">
                    <p className="text-card-foreground font-medium">
                      Activity {item} - Course completion milestone reached
                    </p>
                    <p className="text-card-foreground/60 text-sm">
                      {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;