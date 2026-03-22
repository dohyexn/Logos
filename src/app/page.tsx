"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import PostFAB from "@/components/PostFAB";
import { MOCK_POSTS } from "@/constants/mock";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      
      <main className="flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* Content Feed Section */}
        <section className="mx-auto w-full max-w-7xl px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col gap-4"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              최근 토론 피드
            </h2>
            <p className="text-lg text-muted-foreground">
              지성적인 토론이 실시간으로 이루어지고 있습니다.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {MOCK_POSTS.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </motion.div>
        </section>
      </main>

      {/* Write FAB & Modal */}
      <PostFAB />

      {/* Footer */}
      <footer className="border-t border-muted bg-card py-12 text-center text-sm text-muted-foreground">
        <p>© 2024 LOGOS. All rights reserved.</p>
        <p className="mt-2">디자인은 완성되었지만 데이터는 Mock입니다.</p>
      </footer>
    </div>
  );
}
