import { Button } from "./button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Hero Button Component with custom styling
export const HeroButton = ({ 
  children, 
  className,
  onClick,
  ...props 
}: React.ComponentProps<typeof Button>) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        className={cn(
          "bg-primary hover:bg-primary/90 text-primary-foreground",
          "shadow-[0_10px_30px_hsl(var(--brand-secondary)/0.3)]",
          "hover:shadow-[0_15px_35px_hsl(var(--brand-secondary)/0.4)]",
          "transition-all duration-300 ease-out",
          "border border-primary-foreground/20",
          className
        )}
        onClick={onClick}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};

// Ghost Button with hover effects
export const GhostButton = ({ 
  children, 
  className,
  onClick,
  ...props 
}: React.ComponentProps<typeof Button>) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="ghost"
        className={cn(
          "text-foreground hover:text-primary-foreground",
          "hover:bg-primary/20 border border-foreground/20",
          "hover:border-primary-foreground/40",
          "transition-all duration-300",
          className
        )}
        onClick={onClick}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};