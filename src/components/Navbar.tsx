"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NAV_ITEMS } from "@/constants/mock";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // 시스템 테마 확인 및 동기화
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    // 비동기적으로 초기 상태 설정 ( cascades 방지 )
    const timer = setTimeout(() => {
      setIsDark(darkModeMediaQuery.matches);
    }, 0);

    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    darkModeMediaQuery.addEventListener("change", handleChange);
    
    return () => {
      clearTimeout(timer);
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-muted bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-primary">
            LOGOS
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-xl transition-transform active:scale-90"
          >
            {isDark ? "🌙" : "☀️"}
          </button>
          
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="group relative h-10 min-w-[100px] overflow-hidden rounded-full bg-primary px-6 text-sm font-semibold text-white transition-all active:scale-95"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isLoggedIn ? "mypage" : "login"}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {isLoggedIn ? "마이페이지" : "로그인"}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>
    </nav>
  );
}
