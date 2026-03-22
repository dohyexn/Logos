"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          <div className="mx-auto h-1 w-16 bg-primary rounded-full" />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            준비 중인 페이지입니다
          </h1>
          <p className="text-lg text-muted-foreground">
            이성이 지배하는 디지털 의사당, <strong>LOGOS</strong>의 새로운 기능이 곧 공개됩니다.
          </p>
          <a
            href="/"
            className="mt-4 mx-auto w-fit rounded-full bg-primary px-8 py-3 font-semibold text-white transition-all hover:brightness-110 active:scale-95"
          >
            홈으로 돌아가기
          </a>
        </motion.div>
      </main>
    </div>
  );
}
