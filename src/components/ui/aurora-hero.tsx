import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { cn } from "@/lib/utils";
import VaporizeTextCycle, { Tag } from "./vapour-text-effect";

const COLORS_TOP = ["#f97316", "#fb923c", "#fdba74", "#fed7aa"];

// Custom component for typewriter effect
interface TypewriterEffectProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  className,
  delay = 0,
  speed = 0.05,
}) => {
  const characters = text.split("");

  return (
    <div className={cn("whitespace-nowrap overflow-hidden", className)}>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + i * speed, duration: 0.01 }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

// Custom component for vapour effect
interface VapourEffectProps {
  text: string;
  className?: string;
}

const VapourEffect: React.FC<VapourEffectProps> = ({ text, className }) => {
  const characters = text.split("");

  return (
    <div className={cn("relative inline-block", className)}>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: i * 0.05,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="inline-block relative z-10"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-background px-4 py-24 text-foreground"
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-orange-500/20 border border-orange-400/30 px-3 py-1.5 text-sm text-orange-300">
          <TypewriterEffect text="Transform Your Business" speed={0.08} />
        </span>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-center mb-8"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.5, 
              delay: 0.5,
              type: "spring",
              bounce: 0.3 
            }}
            className="max-w-4xl text-center text-3xl font-bold leading-tight sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight mb-6"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #fbbf24 50%, #f97316 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(249, 115, 22, 0.4)) drop-shadow(0 0 60px rgba(251, 191, 36, 0.2))',
            }}
          >
            <div className="w-full h-24 flex items-center justify-center">
              <VaporizeTextCycle
                texts={["Transform Your Business with Digital Excellence"]}
                font={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "72px",
                  fontWeight: 700
                }}
                color="rgb(251, 191, 36)"
                spread={3}
                density={8}
                animation={{
                  vaporizeDuration: 4,
                  fadeInDuration: 2,
                  waitDuration: 3
                }}
                direction="left-to-right"
                alignment="center"
                tag={Tag.H1}
              />
            </div>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="max-w-2xl mx-auto text-base leading-relaxed md:text-lg md:leading-relaxed text-white/90 drop-shadow-lg"
            style={{
              textShadow: '0 2px 15px rgba(0, 0, 0, 0.4)',
            }}
          >
            <motion.span
              animate={{ 
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              We empower small and medium businesses with cutting-edge web development, 
              reliable technical support, and strategic business consultancy to drive growth and success.
            </motion.span>
          </motion.p>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Link to="/contact">
            <motion.div
              style={{
                border,
                boxShadow,
              }}
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="group relative flex w-fit items-center gap-1.5 rounded-full bg-orange-500/10 px-6 py-3 text-white transition-colors hover:bg-orange-500/20 border-orange-400/50 cursor-pointer"
            >
              Get Free Consultation
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.div>
          </Link>
          
          <Link to="/services">
            <motion.div
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="group relative flex w-fit items-center gap-1.5 rounded-full border border-orange-400/30 bg-transparent px-6 py-3 text-orange-300 transition-colors hover:bg-orange-500/10 cursor-pointer"
            >
              Explore Services
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </motion.div>
          </Link>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};