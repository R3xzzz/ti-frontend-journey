import { motion } from "framer-motion";
import Navbar from "@/components/layouts/Navbar";
import { BookOpen, Clock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Learn the basics of HTML, CSS, and JavaScript",
      duration: "8 weeks",
      students: 156,
      rating: 4.8,
      image: "🌐"
    },
    {
      id: 2,
      title: "React & Modern JavaScript",
      description: "Build dynamic web applications with React and ES6+",
      duration: "12 weeks",
      students: 89,
      rating: 4.9,
      image: "⚛️"
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      description: "Create beautiful and user-friendly interfaces",
      duration: "6 weeks",
      students: 124,
      rating: 4.7,
      image: "🎨"
    },
    {
      id: 4,
      title: "Database Design & SQL",
      description: "Master database concepts and SQL queries",
      duration: "10 weeks",
      students: 98,
      rating: 4.6,
      image: "🗄️"
    }
  ];

  return (
    <motion.div
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
            Courses Page
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-foreground/80 text-center mb-12"
          >
            Explore our comprehensive course catalog
          </motion.p>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (index * 0.1), duration: 0.6 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(163, 204, 218, 0.25)"
                }}
                className="bg-card rounded-2xl p-6 border border-border shadow-xl hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{course.image}</div>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium text-card-foreground">
                      {course.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {course.title}
                </h3>
                
                <p className="text-card-foreground/70 mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center space-x-4 mb-6 text-sm text-card-foreground/60">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students} students</span>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                    size="lg"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Enroll Now
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-card rounded-2xl p-8 border border-border shadow-xl">
              <h2 className="text-2xl font-bold text-card-foreground mb-4">
                Can't find what you're looking for?
              </h2>
              <p className="text-card-foreground/70 mb-6">
                We're constantly adding new courses. Subscribe to our newsletter to get notified about new releases.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg">
                  Subscribe to Updates
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Courses;