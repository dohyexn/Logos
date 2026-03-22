"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PostFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [postType, setPostType] = useState<"PRO" | "CON">("PRO");

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 z-[60] flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-2xl transition-all"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg rounded-3xl border border-muted bg-card p-8 shadow-2xl"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    입론(글쓰기)
                  </h2>
                  <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  <input
                    placeholder="제목을 입력하세요"
                    className="w-full rounded-xl border border-muted bg-background p-4 text-lg font-medium outline-none transition-all focus:border-primary"
                  />
                  
                  {/* Toggle Switch */}
                  <div className="flex rounded-xl bg-muted p-1">
                    <button
                      onClick={() => setPostType("PRO")}
                      className={`flex-1 rounded-lg py-2 text-sm font-bold transition-all ${
                        postType === "PRO" ? "bg-primary text-white" : "text-muted-foreground"
                      }`}
                    >
                      찬성 (PRO)
                    </button>
                    <button
                      onClick={() => setPostType("CON")}
                      className={`flex-1 rounded-lg py-2 text-sm font-bold transition-all ${
                        postType === "CON" ? "bg-slate-500 text-white" : "text-muted-foreground"
                      }`}
                    >
                      반대 (CON)
                    </button>
                  </div>

                  <textarea
                    rows={6}
                    placeholder="당신의 지성적인 의견을 펼쳐주세요..."
                    className="w-full resize-none rounded-xl border border-muted bg-background p-4 outline-none transition-all focus:border-primary"
                  />
                </div>

                <button
                  className={`h-14 w-full rounded-full text-lg font-bold text-white transition-all active:scale-95 ${
                    postType === "PRO" ? "bg-primary shadow-[0_0_20px_rgba(0,173,181,0.3)]" : "bg-slate-600 shadow-xl"
                  }`}
                >
                  입론 제출하기
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
