"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/constants/mock";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // 1. 테마 상태에 따라 document 클래스를 확실히 동기화
  useEffect(() => {
    // 로컬 스토리지에 저장된 값이 있으면 불러오기
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // 2. isDark 상태가 변할 때마다 DOM 업데이트
  useEffect(() => {
    console.log("현재 테마 상태:", isDark ? "다크" : "라이트");
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const handleToggle = () => {
    setIsDark((prev) => !prev);
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
          {/* 다크모드 버튼 - 디버깅 로그를 통해 작동 여부 확인 */}
          <button
            type="button"
            onClick={handleToggle}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-muted text-xl transition-all active:scale-90 hover:brightness-110"
            aria-label="테마 전환"
          >
            {isDark ? "🌙" : "☀️"}
          </button>
          
          <button
            type="button"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="group flex h-10 min-w-[100px] cursor-pointer items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white transition-all active:scale-95"
          >
            {isLoggedIn ? "마이페이지" : "로그인"}
          </button>
        </div>
      </div>
    </nav>
  );
}
