"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/constants/mock";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // 1. 초기 테마 설정
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // 2. 테마 변경 로직 (작동 확인을 위해 alert 추가)
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const handleToggle = () => {
    console.log("버튼이 클릭되었습니다!");
    // alert("테마를 전환합니다!"); // 이 부분을 풀면 클릭 시 팝업이 뜹니다.
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
          <button
            type="button"
            onClick={handleToggle}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-muted text-xl transition-all active:scale-90 hover:brightness-110"
            style={{ zIndex: 100 }} // 다른 요소에 가려지지 않도록 보장
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
