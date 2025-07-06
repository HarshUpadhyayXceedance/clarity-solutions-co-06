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
        <h1 className="max-w-4xl bg-gradient-to-br from-white via-orange-100 to-orange-300 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          <VapourEffect text="Complete Digital Solutions for Modern Businesses" />
        </h1>
        <p className="my-6 max-w-2xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed text-gray-300">
          We empower small and medium businesses with cutting-edge web development, 
          reliable technical support, and strategic business consultancy to drive growth and success.
        </p>
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