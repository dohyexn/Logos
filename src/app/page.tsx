"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1], // Quart out
    },
  },
};

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 bg-background selection:bg-primary/30 overflow-hidden">
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl w-full flex flex-col items-center gap-12 text-center sm:items-start sm:text-left"
      >
        {/* Header / Logo */}
        <motion.div variants={itemVariants} className="flex flex-col gap-2 will-change-transform">
          <div className="h-1 w-12 bg-primary rounded-full mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Logos
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Minimalism, Intellectual Mood, and Readability.
          </p>
        </motion.div>

        {/* Feature Card */}
        <motion.div
          variants={itemVariants}
          className="w-full bg-card rounded-2xl p-8 shadow-sm border border-muted flex flex-col gap-6 will-change-transform"
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-card-foreground">
              A New Design Perspective
            </h2>
            <p className="text-muted-foreground">
              Experience the harmony of <strong>The Library</strong> and <strong>The Agora</strong>. Designed with a deep teal accent for a touch of intellectual sophistication.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {["Responsive", "Minimalist", "Toss Style"].map((tag) => (
              <div
                key={tag}
                className="px-4 py-2 bg-muted rounded-lg text-sm font-medium text-foreground"
              >
                {tag}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col w-full sm:flex-row gap-4 will-change-transform">
          <button className="h-14 px-8 rounded-full bg-primary text-white font-semibold text-lg transition-all active:scale-95 hover:brightness-110">
            Get Started
          </button>
          <button className="h-14 px-8 rounded-full border border-muted bg-card text-foreground font-semibold text-lg transition-all active:scale-95 hover:bg-muted">
            Learn More
          </button>
        </motion.div>

        {/* Footer info */}
        <motion.p
          variants={itemVariants}
          className="text-sm text-muted-foreground pt-4 border-t border-muted w-full will-change-transform"
        >
          Designed for thinkers and readers. Built with Next.js and Tailwind CSS.
        </motion.p>
      </motion.main>
    </div>
  );
}
