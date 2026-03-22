"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NAV_ITEMS } from "@/constants/mock";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
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
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-muted text-xl transition-all active:scale-90 hover:brightness-110"
            aria-label="Toggle Theme"
          >
            <div className={`transition-opacity duration-300 ${mounted ? "opacity-100" : "opacity-0"}`}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={resolvedTheme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="pointer-events-none block"
                >
                  {resolvedTheme === "dark" ? "🌙" : "☀️"}
                </motion.span>
              </AnimatePresence>
            </div>
          </button>
          
          {/* Login Button */}
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
            {!mounted && <span className="absolute inset-0 flex items-center justify-center">로그인</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}
