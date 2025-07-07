'use client'

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight, User } from 'lucide-react';
import { cn } from '@/lib/utils';

// Input Component
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

// BoxReveal Component
interface BoxRevealProps {
  children: React.ReactNode;
  width?: string;
  boxColor?: string;
  duration?: number;
  overflow?: string;
  position?: string;
  className?: string;
}

const BoxReveal = React.memo(function BoxReveal({
  children,
  width = 'fit-content',
  boxColor = '#5046e6',
  duration = 0.5,
  overflow = 'hidden',
  position = 'relative',
  className,
}: BoxRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      style={{
        position: position as any,
        width,
        overflow,
      }}
      className={className}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={isVisible ? 'visible' : 'hidden'}
        transition={{ duration, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: '100%' } }}
        initial='hidden'
        animate={isVisible ? 'visible' : 'hidden'}
        transition={{ duration, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: boxColor,
          borderRadius: 4,
        }}
      />
    </section>
  );
});

// Main Authentication Component
export function AuthenticationSystem() {
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(false);

  // For 3D card effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    console.log(`${activeTab} submitted:`, formData);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const switchTab = (tab: 'signin' | 'signup') => {
    setActiveTab(tab);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <div className="min-h-screen w-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-violet-900/30 to-blue-900/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-black/80" />
      
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />

      {/* Animated Background Glows */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120vh] h-[60vh] rounded-b-[50%] bg-gradient-to-b from-orange-500/15 via-violet-500/10 to-transparent blur-[100px]" />
      <motion.div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100vh] h-[60vh] rounded-b-full bg-gradient-to-b from-violet-400/20 via-blue-400/15 to-transparent blur-[80px]"
        animate={{ 
          opacity: [0.1, 0.25, 0.1],
          scale: [0.95, 1.05, 0.95]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-[80vh] h-[40vh] rounded-tl-full bg-gradient-to-tl from-orange-500/10 via-blue-500/10 to-transparent blur-[60px]"
        animate={{ 
          opacity: [0.05, 0.15, 0.05],
          x: [0, -20, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md mx-auto px-4 sm:px-0 relative z-10"
        style={{ perspective: 1500 }}
      >
        <motion.div
          className="relative"
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={{ z: 10 }}
        >
          <div className="relative group">
            {/* Card glow effect */}
            <motion.div 
              className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              animate={{
                boxShadow: [
                  "0 0 20px 3px rgba(249, 115, 22, 0.1), 0 0 40px 6px rgba(139, 92, 246, 0.05), 0 0 60px 9px rgba(59, 130, 246, 0.03)",
                  "0 0 30px 5px rgba(249, 115, 22, 0.15), 0 0 50px 8px rgba(139, 92, 246, 0.08), 0 0 70px 12px rgba(59, 130, 246, 0.05)",
                  "0 0 20px 3px rgba(249, 115, 22, 0.1), 0 0 40px 6px rgba(139, 92, 246, 0.05), 0 0 60px 9px rgba(59, 130, 246, 0.03)"
                ],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut", 
                repeatType: "mirror" 
              }}
            />

            {/* Animated border gradient */}
            <div className="absolute -inset-[1px] rounded-2xl overflow-hidden">
              <motion.div 
                className="absolute inset-0 opacity-60"
                style={{
                  background: 'conic-gradient(from 0deg, #f97316, #8b5cf6, #3b82f6, #f97316, #8b5cf6, #3b82f6, #f97316)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-[1px] rounded-2xl bg-gray-900/95 backdrop-blur-xl" />
            </div>

            {/* Traveling light beam effect */}
            <div className="absolute -inset-[1px] rounded-2xl overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-[2px] w-[60%] bg-gradient-to-r from-transparent via-orange-400 via-violet-400 to-blue-400 to-transparent opacity-80"
                initial={{ filter: "blur(1px)" }}
                animate={{ 
                  left: ["-60%", "100%"],
                  opacity: [0.4, 0.8, 0.4],
                  filter: ["blur(1px)", "blur(2px)", "blur(1px)"]
                }}
                transition={{ 
                  left: {
                    duration: 3, 
                    ease: "easeInOut", 
                    repeat: Infinity,
                    repeatDelay: 1.5
                  },
                  opacity: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "mirror"
                  },
                  filter: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "mirror"
                  }
                }}
              />
            </div>

            {/* Glass card background */}
            <div className="relative bg-gray-900/60 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-white/[0.08] shadow-2xl overflow-hidden">
              {/* Logo and header */}
              <div className="text-center space-y-1 mb-6">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.8 }}
                  className="mx-auto w-14 h-14 rounded-xl border border-orange-500/20 flex items-center justify-center relative overflow-hidden mb-4"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-violet-500/10 to-blue-500/10 opacity-80" />
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent rounded-xl"
                    style={{
                      background: 'linear-gradient(45deg, #f97316, #8b5cf6, #3b82f6, #f97316) border-box',
                      mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'subtract'
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-orange-400 via-violet-400 to-blue-400 relative z-10">DB</span>
                </motion.div>

                {/* Tab Navigation */}
                <div className="relative bg-gradient-to-r from-orange-500/10 via-violet-500/10 to-blue-500/10 rounded-lg p-1 mb-6 border border-white/5">
                  <motion.div
                    className="absolute top-1 bottom-1 bg-gradient-to-r from-orange-500/20 via-violet-500/20 to-blue-500/20 rounded-md border border-orange-500/30"
                    initial={false}
                    animate={{
                      left: activeTab === 'signin' ? '4px' : '50%',
                      right: activeTab === 'signin' ? '50%' : '4px',
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                  <div className="relative flex">
                    <button
                      onClick={() => switchTab('signin')}
                      className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors duration-200 ${
                        activeTab === 'signin' ? 'text-white' : 'text-white/60 hover:text-white/80'
                      }`}
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => switchTab('signup')}
                      className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors duration-200 ${
                        activeTab === 'signup' ? 'text-white' : 'text-white/60 hover:text-white/80'
                      }`}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h1 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-violet-400 to-blue-400">
                      {activeTab === 'signin' ? 'Welcome Back' : 'Create Account'}
                    </h1>
                    <p className="text-white/60 text-xs sm:text-sm">
                      {activeTab === 'signin' 
                        ? 'Sign in to continue to DigitalBridge' 
                        : 'Join DigitalBridge today'
                      }
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Form */}
              <AnimatePresence mode="wait">
                <motion.form
                  key={activeTab}
                  initial={{ opacity: 0, x: activeTab === 'signin' ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: activeTab === 'signin' ? 20 : -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <motion.div className="space-y-3">
                    {/* Name field for signup */}
                    {activeTab === 'signup' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`relative ${focusedInput === "name" ? 'z-10' : ''}`}
                      >
                        <div className="relative flex items-center overflow-hidden rounded-lg">
                          <User className={`absolute left-3 w-4 h-4 transition-all duration-300 ${
                            focusedInput === "name" ? 'text-white' : 'text-white/40'
                          }`} />
                          
                          <Input
                            type="text"
                            placeholder="Full name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            onFocus={() => setFocusedInput("name")}
                            onBlur={() => setFocusedInput(null)}
                            className="w-full bg-gradient-to-r from-orange-500/5 via-violet-500/5 to-blue-500/5 border-transparent focus:border-orange-500/30 text-white placeholder:text-white/40 h-10 sm:h-11 transition-all duration-300 pl-10 pr-3 focus:bg-gradient-to-r focus:from-orange-500/10 focus:via-violet-500/10 focus:to-blue-500/10"
                            required={activeTab === 'signup'}
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Email input */}
                    <motion.div 
                      className={`relative ${focusedInput === "email" ? 'z-10' : ''}`}
                      whileFocus={{ scale: 1.02 }}
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <div className="relative flex items-center overflow-hidden rounded-lg">
                        <Mail className={`absolute left-3 w-4 h-4 transition-all duration-300 ${
                          focusedInput === "email" ? 'text-white' : 'text-white/40'
                        }`} />
                        
                        <Input
                          type="email"
                          placeholder="Email address"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          onFocus={() => setFocusedInput("email")}
                          onBlur={() => setFocusedInput(null)}
                          className="w-full bg-gradient-to-r from-orange-500/5 via-violet-500/5 to-blue-500/5 border-transparent focus:border-violet-500/30 text-white placeholder:text-white/40 h-10 sm:h-11 transition-all duration-300 pl-10 pr-3 focus:bg-gradient-to-r focus:from-orange-500/10 focus:via-violet-500/10 focus:to-blue-500/10"
                          required
                        />
                      </div>
                    </motion.div>

                    {/* Password input */}
                    <motion.div 
                      className={`relative ${focusedInput === "password" ? 'z-10' : ''}`}
                      whileFocus={{ scale: 1.02 }}
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <div className="relative flex items-center overflow-hidden rounded-lg">
                        <Lock className={`absolute left-3 w-4 h-4 transition-all duration-300 ${
                          focusedInput === "password" ? 'text-white' : 'text-white/40'
                        }`} />
                        
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          onFocus={() => setFocusedInput("password")}
                          onBlur={() => setFocusedInput(null)}
                          className="w-full bg-gradient-to-r from-orange-500/5 via-violet-500/5 to-blue-500/5 border-transparent focus:border-blue-500/30 text-white placeholder:text-white/40 h-10 sm:h-11 transition-all duration-300 pl-10 pr-10 focus:bg-gradient-to-r focus:from-orange-500/10 focus:via-violet-500/10 focus:to-blue-500/10"
                          required
                        />
                        
                        <div 
                          onClick={() => setShowPassword(!showPassword)} 
                          className="absolute right-3 cursor-pointer"
                        >
                          {showPassword ? (
                            <Eye className="w-4 h-4 text-white/40 hover:text-white transition-colors duration-300" />
                          ) : (
                            <EyeOff className="w-4 h-4 text-white/40 hover:text-white transition-colors duration-300" />
                          )}
                        </div>
                      </div>
                    </motion.div>

                    {/* Confirm Password for signup */}
                    {activeTab === 'signup' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className={`relative ${focusedInput === "confirmPassword" ? 'z-10' : ''}`}
                      >
                        <div className="relative flex items-center overflow-hidden rounded-lg">
                          <Lock className={`absolute left-3 w-4 h-4 transition-all duration-300 ${
                            focusedInput === "confirmPassword" ? 'text-white' : 'text-white/40'
                          }`} />
                          
                          <Input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm password"
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                            onFocus={() => setFocusedInput("confirmPassword")}
                            onBlur={() => setFocusedInput(null)}
                            className="w-full bg-gradient-to-r from-orange-500/5 via-violet-500/5 to-blue-500/5 border-transparent focus:border-orange-500/30 text-white placeholder:text-white/40 h-10 sm:h-11 transition-all duration-300 pl-10 pr-10 focus:bg-gradient-to-r focus:from-orange-500/10 focus:via-violet-500/10 focus:to-blue-500/10"
                            required={activeTab === 'signup'}
                          />
                          
                          <div 
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                            className="absolute right-3 cursor-pointer"
                          >
                            {showConfirmPassword ? (
                              <Eye className="w-4 h-4 text-white/40 hover:text-white transition-colors duration-300" />
                            ) : (
                              <EyeOff className="w-4 h-4 text-white/40 hover:text-white transition-colors duration-300" />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Remember me & Forgot password for signin */}
                  {activeTab === 'signin' && (
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center space-x-2">
                        <div className="relative">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            className="appearance-none h-4 w-4 rounded border border-white/20 bg-white/5 checked:bg-white checked:border-white focus:outline-none focus:ring-1 focus:ring-white/30 transition-all duration-200"
                          />
                          {rememberMe && (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="absolute inset-0 flex items-center justify-center text-black pointer-events-none"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </motion.div>
                          )}
                        </div>
                        <label htmlFor="remember-me" className="text-xs text-white/60 hover:text-white/80 transition-colors duration-200">
                          Remember me
                        </label>
                      </div>
                      
                      <div className="text-xs relative group/link">
                        <button type="button" className="text-white/60 hover:text-white transition-colors duration-200">
                          Forgot password?
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Submit button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isLoading}
                    className="w-full relative group/button mt-5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-violet-500/20 to-blue-500/20 rounded-lg blur-lg opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-violet-500 to-blue-500 text-white font-medium h-10 sm:h-11 rounded-lg transition-all duration-300 flex items-center justify-center">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -z-10"
                        animate={{ 
                          x: ['-100%', '100%'],
                        }}
                        transition={{ 
                          duration: 1.5, 
                          ease: "easeInOut", 
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                        style={{ 
                          opacity: isLoading ? 1 : 0,
                          transition: 'opacity 0.3s ease'
                        }}
                      />
                      
                      <AnimatePresence mode="wait">
                        {isLoading ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center"
                          >
                            <div className="w-4 h-4 border-2 border-white/70 border-t-transparent rounded-full animate-spin" />
                          </motion.div>
                        ) : (
                          <motion.span
                            key="button-text"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center gap-1 text-sm font-medium"
                          >
                            {activeTab === 'signin' ? 'Sign In' : 'Create Account'}
                            <ArrowRight className="w-3 h-3 group-hover/button:translate-x-1 transition-transform duration-300" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.button>

                  {/* Divider */}
                  <div className="relative mt-4 mb-4 flex items-center">
                    <div className="flex-grow border-t border-white/5"></div>
                    <motion.span 
                      className="mx-3 text-xs text-white/40"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: [0.7, 0.9, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      or
                    </motion.span>
                    <div className="flex-grow border-t border-white/5"></div>
                  </div>

                  {/* Google Sign In */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    className="w-full relative group/google"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-violet-500/10 to-blue-500/10 rounded-lg blur opacity-0 group-hover/google:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative overflow-hidden bg-gradient-to-r from-orange-500/5 via-violet-500/5 to-blue-500/5 text-white font-medium h-10 sm:h-11 rounded-lg border border-gradient-to-r border-orange-500/20 hover:border-violet-500/30 transition-all duration-300 flex items-center justify-center gap-2">
                      <div className="w-4 h-4 flex items-center justify-center text-orange-400 group-hover/google:text-violet-400 transition-colors duration-300 font-bold">G</div>
                      
                      <span className="text-white/80 group-hover/google:text-white transition-colors text-xs sm:text-sm">
                        {activeTab === 'signin' ? 'Sign in with Google' : 'Sign up with Google'}
                      </span>
                      
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-violet-500/10 to-blue-500/0"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ 
                          duration: 1, 
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </motion.button>
                </motion.form>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function AuthenticationDemo() {
  return (
    <div className="w-full h-screen">
      <AuthenticationSystem />
    </div>
  );
}