# ⚡ WhatToBuild

> Stop staring at a blank screen. Get 3 shippable ideas in 20 seconds.

**WhatToBuild** is a lightning-fast idea generator that helps developers overcome decision paralysis. Pick your time commitment and skill level → get 3 specific, actionable ideas instantly. No signup, no BS, just ideas.

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## ✨ Features

- ⚡ **Instant Results** - No auth, no modals, one flow. Get ideas in under 20 seconds
- 🎯 **170+ Ideas** - Curated collection of specific, scoped project ideas
- 🔗 **Shareable** - Deep links for each idea, URL state management
- 📋 **Actionable** - Each idea includes detailed scope and ship criteria
- 🎨 **Dark Theme** - Calm, focused design optimized for productivity
- 🚀 **Ready to Ship** - Ideas are scoped with clear completion criteria

## 🎯 How It Works

1. **Select Time** - Choose how much time you have (30m, 1h, 2h, 4h, 8h)
2. **Pick Skill** - Select your expertise (frontend, backend, fullstack, design, mobile)
3. **Generate** - Get 3 random, shippable ideas instantly
4. **Build** - Copy the build spec and start coding

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/dailyshipdev/dailyship-2-whattobuild.git

# Navigate to the project
cd dailyship-2-whattobuild

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
dailyship-2-whattobuild/
├── app/
│   ├── page.tsx              # Main generator page
│   ├── layout.tsx            # Root layout with metadata
│   ├── idea/[id]/            # Permalink pages for sharing
│   └── globals.css           # Global styles
├── components/
│   ├── IdeaCard.tsx          # Idea card component
│   └── Footer.tsx            # Footer with social links
├── lib/
│   └── ideas.ts              # 170+ ideas database
├── CONTRIBUTING.md           # Guide for adding ideas
└── README.md                 # This file
```

## 💡 Idea Categories

- **Frontend** (90+ ideas) - UI components, tools, generators
- **Backend** (15+ ideas) - APIs, services, middleware
- **Fullstack** (15+ ideas) - Complete applications
- **Design** (5+ ideas) - UI/UX design projects
- **Mobile** (10+ ideas) - Mobile app concepts

Each idea includes:
- **Title** - Clear, specific project name
- **One-liner** - Quick description
- **Scope** - 3-5 bullet points of what to build
- **Ship Criteria** - 3 clear completion requirements

## 🛠️ Tech Stack

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS
- **[React 19](https://react.dev/)** - UI library

## 📝 Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on adding new ideas.

### Adding Ideas

1. Open `lib/ideas.ts`
2. Add a new idea following the existing structure
3. Ensure it's specific, scoped, and has clear ship criteria
4. Submit a PR!

## 🌐 Live Demo

Coming soon! This project will be deployed and available online.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Connect

Built by [@dailyshipdev](https://github.com/dailyshipdev) - Shipping daily until one app hits $25M+

- 🐙 [GitHub](https://github.com/dailyshipdev)
- 🐦 [X (Twitter)](https://x.com/dailyshipdev)
- 💼 [LinkedIn](https://www.linkedin.com/in/dailyship/)
- 🔵 [Bluesky](https://bsky.app/profile/dailyship.bsky.social)

## 🙏 Acknowledgments

- Inspired by the daily shipping movement
- Built for developers who want to build but don't know what to build
- Thanks to all contributors who add ideas to the pool

---

**Made with ⚡ by builders, for builders**
