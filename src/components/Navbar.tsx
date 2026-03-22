"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NAV_ITEMS } from "@/constants/mock";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // 버튼 클릭 시 document의 클래스만 토글
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-muted bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-primary">
            LOGOS
          </Link>
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

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-xl transition-all active:scale-90"
            aria-label="Toggle Theme"
          >
            {isDark ? "🌙" : "☀️"}
          </button>
          
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="group h-10 min-w-[100px] rounded-full bg-primary px-6 text-sm font-semibold text-white transition-all active:scale-95"
          >
            {isLoggedIn ? "마이페이지" : "로그인"}
          </button>
        </div>
      </div>
    </nav>
  );
}
