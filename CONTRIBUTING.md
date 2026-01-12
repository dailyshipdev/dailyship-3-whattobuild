# Contributing to WhatToBuild

Thank you for wanting to contribute! This guide will help you add new ideas to the collection.

## How to Add an Idea

1. Open `lib/ideas.ts`
2. Add a new idea object to the `ideas` array
3. Follow the structure and rules below
4. Submit a PR!

## Idea Structure

Each idea must have:

```typescript
{
  id: string,           // Unique ID (use next number in sequence)
  title: string,        // Short, catchy title
  oneLiner: string,     // One sentence description
  time: TimeOption,     // "30m" | "1h" | "2h" | "4h" | "8h"
  skill: SkillOption,   // "frontend" | "backend" | "fullstack" | "design" | "mobile"
  scope: string[],      // 3-5 bullet points
  shipCriteria: string[] // 3 bullet points starting with "Done when:"
}
```

## Rules for Ideas

### Be Specific
- ❌ "Build a todo app"
- ✅ "Todo list with drag-and-drop reordering and LocalStorage persistence"

### Be Scoped
- ❌ "Build a social network"
- ✅ "Link in Bio page with click tracking and analytics"

### Have Clear Criteria
- ❌ "Done when: it works"
- ✅ "Done when: todos persist after page refresh"

### Realistic Time Estimates
- 30m: Very simple, single feature
- 1h: Simple app with a few features
- 2h: Moderate complexity, multiple features
- 4h: Complex app with multiple components
- 8h: Full-featured application

## Example

```typescript
{
  id: "61",
  title: "Random Quote Generator",
  oneLiner: "Display inspiring quotes with one-click sharing",
  time: "30m",
  skill: "frontend",
  scope: [
    "Array of 20+ quotes",
    "Random quote on load and button click",
    "Copy quote button",
    "Share to Twitter button",
    "Smooth fade transition"
  ],
  shipCriteria: [
    "Done when: new quote appears on click",
    "Done when: copy works",
    "Done when: Twitter share opens with pre-filled text"
  ]
}
```

## Quality Checklist

Before submitting, make sure your idea:

- [ ] Has a unique ID
- [ ] Title is clear and specific
- [ ] One-liner is compelling
- [ ] Time estimate is realistic
- [ ] Scope has 3-5 items
- [ ] Ship criteria has 3 items, all start with "Done when:"
- [ ] Is actually buildable in the stated time
- [ ] Fits the skill level (frontend/backend/etc.)

## Questions?

Open an issue or submit a PR with your question. We're happy to help!
