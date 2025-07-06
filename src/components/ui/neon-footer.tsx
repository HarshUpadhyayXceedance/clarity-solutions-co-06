"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, ArrowUp } from "lucide-react"
import { Link } from "react-router-dom"

interface TypewriterTextProps {
  text: string
  delay?: number
  speed?: number
  className?: string
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  delay = 0, 
  speed = 50, 
  className = "" 
}) => {
  const [displayText, setDisplayText] = React.useState("")
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  React.useEffect(() => {
    if (!isVisible) return

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, speed, isVisible])

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && (
        <motion.span
          className="inline-block w-0.5 h-6 bg-orange-400 ml-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </span>
  )
}

const NeonFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gray-900 text-gray-300 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900" />
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
            filter: "blur(15px)",
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
            filter: "blur(25px)",
          }}
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 container mx-auto px-4 py-12"
      >
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 30px rgba(59, 130, 246, 0.4)",
                    "0 0 25px rgba(59, 130, 246, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-white font-bold text-sm">DB</span>
              </motion.div>
              <motion.span
                className="text-xl font-bold text-white bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <TypewriterText 
                  text="DigitalBridge" 
                  delay={500} 
                  speed={100}
                />
              </motion.span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              <TypewriterText 
                text="Transforming small and medium businesses through comprehensive digital solutions, technical support, and strategic business consultancy." 
                delay={1500} 
                speed={30}
              />
            </p>
            <div className="flex items-center space-x-4">
              <motion.div
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@digitalbridge.com</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">(555) 123-4567</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4 relative">
              <TypewriterText 
                text="Services" 
                delay={2000} 
                speed={80}
              />
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.1, duration: 0.6 }}
              />
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Website Development", href: "/services" },
                { label: "Technical Support", href: "/services" },
                { label: "Business Consultancy", href: "/services" },
                { label: "Digital Strategy", href: "/services" },
              ].map((link) => (
                <motion.li key={link.label}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm relative group"
                    >
                      {link.label}
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4 relative">
              <TypewriterText 
                text="Company" 
                delay={2200} 
                speed={80}
              />
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.2, duration: 0.6 }}
              />
            </h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Pricing", href: "/pricing" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <motion.li key={link.label}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm relative group"
                    >
                      {link.label}
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-gray-400 text-sm">
            © 2024 DigitalBridge. All rights reserved.
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 30px rgba(59, 130, 246, 0.4)",
                "0 0 25px rgba(59, 130, 246, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Neon Border Effect */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 2 }}
        style={{
          filter: "drop-shadow(0 0 10px rgba(59,130,246,0.5))",
        }}
      />
    </footer>
  )
}

export default NeonFooter