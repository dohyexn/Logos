"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex h-[100vh] w-full items-center justify-center overflow-hidden bg-background">
      {/* Dynamic Background Gradient */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]"
      />

      <div className="z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl md:text-8xl"
        >
          이성이 지배하는 <br />
          <span className="text-primary">디지털 의사당</span>, 로고스
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-xl text-muted-foreground md:text-2xl"
        >
          가장 낮은 목소리가 가장 깊은 울림이 되는 곳.
        </motion.p>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-sm font-medium uppercase tracking-widest">Scroll</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
}
