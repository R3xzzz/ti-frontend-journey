import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Lock, LogIn, UserPlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/");
      }
    });
  }, [navigate]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email || !password) {
      toast({
        title: "Error",
        description: "Mohon isi semua field",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
      },
    });

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Berhasil!",
        description: "Akun berhasil dibuat. Silakan login.",
      });
    }
    setIsLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email || !password) {
      toast({
        title: "Error",
        description: "Mohon isi semua field",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
      setIsLoading(false);
    } else {
      toast({
        title: "Selamat datang!",
        description: "Login berhasil",
      });
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-block text-4xl font-bold text-primary-foreground bg-primary rounded-2xl px-6 py-3 mb-4">
            Ti
          </div>
          <h1 className="text-2xl font-bold text-foreground">Welcome</h1>
          <p className="text-foreground/70 mt-2">Login atau buat akun baru</p>
        </motion.div>

        {/* Auth Form */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-card rounded-2xl p-8 shadow-2xl border border-border"
        >
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="login-email" className="text-card-foreground font-medium">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-card-foreground/50" />
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="nama@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-background/50 border-border focus:border-accent transition-colors duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-password" className="text-card-foreground font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-5 h-5 text-card-foreground/50" />
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="Masukkan password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 bg-background/50 border-border focus:border-accent transition-colors duration-300"
                      required
                    />
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                    ) : (
                      <>
                        <LogIn className="w-5 h-5 mr-2" />
                        Login
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="text-card-foreground font-medium">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-card-foreground/50" />
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="nama@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-background/50 border-border focus:border-accent transition-colors duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-password" className="text-card-foreground font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-5 h-5 text-card-foreground/50" />
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="Minimal 6 karakter"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 bg-background/50 border-border focus:border-accent transition-colors duration-300"
                      required
                      minLength={6}
                    />
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                    ) : (
                      <>
                        <UserPlus className="w-5 h-5 mr-2" />
                        Buat Akun
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-8 text-foreground/60 text-sm"
        >
          <p>Aman • Cepat • Terpercaya</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;