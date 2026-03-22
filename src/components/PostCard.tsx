"use client";

import { motion } from "framer-motion";
import { Post } from "@/constants/mock";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const isPro = post.type === 'PRO';

  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col gap-4 rounded-2xl border border-muted bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg will-change-transform"
    >
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            isPro
              ? "bg-primary/10 text-primary"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {isPro ? "찬성" : "반대"}
        </span>
        <span className="text-xs text-muted-foreground">{post.createdAt}</span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold tracking-tight text-card-foreground">
          {post.title}
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground leading-relaxed">
          {post.content}
        </p>
      </div>

      <div className="mt-2 flex items-center justify-between border-t border-muted pt-4 text-xs font-medium text-muted-foreground">
        <span>By {post.author}</span>
        <div className="flex gap-4">
          <span className="flex items-center gap-1">👍 {post.likes}</span>
          <span className="flex items-center gap-1">💬 {post.comments}</span>
        </div>
      </div>
    </motion.article>
  );
}
