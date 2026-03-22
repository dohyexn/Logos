"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NAV_ITEMS } from "@/constants/mock";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // 1. 초기 테마 설정
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // 2. 테마 토글 함수
  const toggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

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
          {/* Theme Switcher - 항상 공간 확보 */}
          <button
            onClick={toggleTheme}
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-muted text-xl transition-all active:scale-90 hover:brightness-110"
            aria-label="Toggle Theme"
          >
            <div className={`transition-opacity duration-300 ${mounted ? "opacity-100" : "opacity-0"}`}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? "dark" : "light"}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="pointer-events-none block"
                >
                  {isDark ? "🌙" : "☀️"}
                </motion.span>
              </AnimatePresence>
            </div>
          </button>
          
          {/* Login Button - 항상 공간 확보 */}
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="group relative h-10 min-w-[100px] overflow-hidden rounded-full bg-primary px-6 text-sm font-semibold text-white transition-all active:scale-95 hover:brightness-110"
          >
            <div className={`flex items-center justify-center transition-opacity duration-300 ${mounted ? "opacity-100" : "opacity-0"}`}>
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
            </div>
            {/* 마운트 전 로딩 상태를 위한 텍스트 레이어 (레이아웃 틀어짐 방지) */}
            {!mounted && <span className="absolute inset-0 flex items-center justify-center">로그인</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}
