# Logos - Blueprint

## Overview
Logos is a project focused on minimalism and readability, aiming for an intellectual mood similar to the Toss design style.

## Design System

### Core Values
- **Minimalism:** Clean layouts with purposeful whitespace.
- **Intellectual Mood:** Sophisticated color palettes and clear typography.
- **Readability:** Optimized for text legibility and user comfort.

### Responsive Theme (System Preferred)
- **Primary Color:** Deep Teal (#00ADB5) - Used as a consistent accent color.

#### ⚪ White Mode (The Library)
- **Background:** Off-White (#F9FAFB)
- **Text:** Deep Gray (#111827)
- **Card/Element Background:** Pure White (#FFFFFF)
- **Muted Elements:** Light Gray (#F3F4F6)

#### ⚫ Dark Mode (The Agora)
- **Background:** Midnight Charcoal (#121212)
- **Text:** Soft White (#F3F4F6)
- **Subtext:** Medium Gray (#9CA3AF)
- **Card/Element Background (Surface):** Dark Charcoal (#1E1E1E)

### 애니메이션 가이드라인 (Performance Optimization)
- **속도감:** 모든 전환은 `duration: 0.3`, `ease: [0.22, 1, 0.36, 1]` (Quart out) 물리 값을 기본으로 사용.
- **하드웨어 가속:** `will-change-transform`을 활용하여 GPU 가속을 유도하고, Layout 변화가 아닌 Transform과 Opacity 위주로만 애니메이션 구성.
- **스타거(Stagger):** 리스트 아이템이 나타날 때 순차적으로 페이드인되도록 `staggerChildren` 설정.

## Current State
- Next.js project with App Router.
- Tailwind CSS v4.
- Framer Motion 설치 및 애니메이션 가이드라인 수립.
- Git remote set to `https://github.com/dohyexn/Logos.git`.

## Saved Commands
- `/save`: A script to add, commit, and push changes.
