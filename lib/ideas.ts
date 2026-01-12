export type TimeOption = "30m" | "1h" | "2h" | "4h" | "8h";
export type SkillOption = "frontend" | "backend" | "fullstack" | "design" | "mobile";

export interface Idea {
  id: string;
  title: string;
  oneLiner: string;
  time: TimeOption;
  skill: SkillOption;
  scope: string[];
  shipCriteria: string[];
}

export const ideas: Idea[] = [
  // 30m Frontend
  {
    id: "1",
    title: "Color Palette Generator",
    oneLiner: "Generate harmonious color palettes from a single color",
    time: "30m",
    skill: "frontend",
    scope: [
      "Input: one hex color",
      "Generate 5 complementary colors",
      "Show hex codes with copy buttons",
      "Display palette preview",
      "Simple gradient background"
    ],
    shipCriteria: [
      "Done when: user can input color and get 5 colors instantly",
      "Done when: all hex codes are copyable",
      "Done when: works on mobile"
    ]
  },
  {
    id: "2",
    title: "QR Code Generator",
    oneLiner: "Convert any text or URL into a QR code instantly",
    time: "30m",
    skill: "frontend",
    scope: [
      "Text/URL input field",
      "QR code generation library",
      "Download as PNG button",
      "Error handling for invalid input",
      "Clean, centered layout"
    ],
    shipCriteria: [
      "Done when: QR code appears instantly on input",
      "Done when: PNG download works",
      "Done when: handles empty/invalid input gracefully"
    ]
  },
  {
    id: "3",
    title: "Password Strength Meter",
    oneLiner: "Real-time password strength visualization",
    time: "30m",
    skill: "frontend",
    scope: [
      "Password input with show/hide toggle",
      "Strength bar (weak/medium/strong)",
      "Checklist: length, uppercase, number, special char",
      "Color-coded feedback",
      "Copy password button"
    ],
    shipCriteria: [
      "Done when: strength updates in real-time",
      "Done when: all checklist items work",
      "Done when: visual feedback is clear"
    ]
  },
  {
    id: "4",
    title: "Word Counter",
    oneLiner: "Count words, characters, sentences with live stats",
    time: "30m",
    skill: "frontend",
    scope: [
      "Textarea input",
      "Live stats: words, chars, sentences, paragraphs",
      "Reading time estimate",
      "Clear button",
      "Minimal, focused UI"
    ],
    shipCriteria: [
      "Done when: all counts update in real-time",
      "Done when: reading time is accurate",
      "Done when: handles edge cases (empty, very long text)"
    ]
  },
  {
    id: "5",
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
  },
  {
    id: "6",
    title: "Pomodoro Timer",
    oneLiner: "25-minute focus timer with break intervals",
    time: "30m",
    skill: "frontend",
    scope: [
      "25min timer countdown",
      "Start/pause/reset buttons",
      "Visual progress ring",
      "Sound notification on completion",
      "Break timer (5min) after work"
    ],
    shipCriteria: [
      "Done when: timer counts down accurately",
      "Done when: notifications work",
      "Done when: break timer auto-starts"
    ]
  },

  // 1h Frontend
  {
    id: "7",
    title: "Todo List with LocalStorage",
    oneLiner: "Persistent todo list with drag-and-drop reordering",
    time: "1h",
    skill: "frontend",
    scope: [
      "Add/delete/edit todos",
      "Mark complete with strikethrough",
      "LocalStorage persistence",
      "Drag to reorder (optional)",
      "Filter: all/active/completed"
    ],
    shipCriteria: [
      "Done when: todos persist after refresh",
      "Done when: all CRUD operations work",
      "Done when: filter works correctly"
    ]
  },
  {
    id: "8",
    title: "Weather Widget",
    oneLiner: "Simple weather display using a free API",
    time: "1h",
    skill: "frontend",
    scope: [
      "Location input or geolocation",
      "Current temp, condition, icon",
      "5-day forecast cards",
      "Loading and error states",
      "Clean card-based layout"
    ],
    shipCriteria: [
      "Done when: shows current weather accurately",
      "Done when: forecast displays correctly",
      "Done when: handles API errors gracefully"
    ]
  },
  {
    id: "9",
    title: "Markdown Previewer",
    oneLiner: "Live markdown preview with syntax highlighting",
    time: "1h",
    skill: "frontend",
    scope: [
      "Split view: editor + preview",
      "Live markdown rendering",
      "Code syntax highlighting",
      "Copy HTML output",
      "Resizable panels"
    ],
    shipCriteria: [
      "Done when: preview updates in real-time",
      "Done when: all markdown features work",
      "Done when: copy HTML works"
    ]
  },
  {
    id: "10",
    title: "Image Gallery with Lightbox",
    oneLiner: "Grid gallery with full-screen image viewer",
    time: "1h",
    skill: "frontend",
    scope: [
      "Grid of images (10-15 sample images)",
      "Click to open lightbox",
      "Next/prev navigation",
      "Close on ESC or click outside",
      "Smooth animations"
    ],
    shipCriteria: [
      "Done when: lightbox opens smoothly",
      "Done when: navigation works",
      "Done when: keyboard shortcuts work"
    ]
  },
  {
    id: "11",
    title: "Expense Tracker",
    oneLiner: "Track daily expenses with category breakdown",
    time: "1h",
    skill: "frontend",
    scope: [
      "Add expense: amount, category, description",
      "List all expenses",
      "Total and category totals",
      "LocalStorage persistence",
      "Simple chart (bar or pie)"
    ],
    shipCriteria: [
      "Done when: expenses persist",
      "Done when: totals calculate correctly",
      "Done when: chart displays data"
    ]
  },
  {
    id: "12",
    title: "BMI Calculator",
    oneLiner: "Calculate BMI with health category feedback",
    time: "1h",
    skill: "frontend",
    scope: [
      "Height and weight inputs (metric/imperial)",
      "BMI calculation",
      "Category display (underweight/normal/overweight)",
      "Visual indicator (color-coded)",
      "Reset button"
    ],
    shipCriteria: [
      "Done when: calculation is accurate",
      "Done when: both unit systems work",
      "Done when: category is clear"
    ]
  },

  // 2h Frontend
  {
    id: "13",
    title: "Recipe Finder",
    oneLiner: "Search recipes by ingredients with step-by-step instructions",
    time: "2h",
    skill: "frontend",
    scope: [
      "Search by ingredient or recipe name",
      "Recipe cards with image, time, servings",
      "Detailed recipe view",
      "Ingredient checklist",
      "Save favorites (localStorage)"
    ],
    shipCriteria: [
      "Done when: search returns relevant results",
      "Done when: recipe detail view is complete",
      "Done when: favorites persist"
    ]
  },
  {
    id: "14",
    title: "Drawing Canvas",
    oneLiner: "Simple drawing app with brush, colors, and save",
    time: "2h",
    skill: "frontend",
    scope: [
      "HTML5 canvas drawing",
      "Brush size and color picker",
      "Clear and undo buttons",
      "Download as PNG",
      "Touch support for mobile"
    ],
    shipCriteria: [
      "Done when: drawing works smoothly",
      "Done when: all tools function",
      "Done when: download works"
    ]
  },
  {
    id: "15",
    title: "Music Player UI",
    oneLiner: "Beautiful music player interface with playlist",
    time: "2h",
    skill: "frontend",
    scope: [
      "Play/pause, next/prev controls",
      "Progress bar with scrubbing",
      "Volume control",
      "Playlist with track selection",
      "Animated album art placeholder"
    ],
    shipCriteria: [
      "Done when: all controls work",
      "Done when: progress bar is interactive",
      "Done when: playlist switching works"
    ]
  },
  {
    id: "16",
    title: "Chat Interface",
    oneLiner: "Real-time chat UI with message bubbles and timestamps",
    time: "2h",
    skill: "frontend",
    scope: [
      "Message input and send",
      "Message bubbles (sent/received styles)",
      "Timestamps",
      "Auto-scroll to latest",
      "LocalStorage message history"
    ],
    shipCriteria: [
      "Done when: messages display correctly",
      "Done when: styling is clear",
      "Done when: history persists"
    ]
  },
  {
    id: "17",
    title: "Dashboard Analytics",
    oneLiner: "Data visualization dashboard with charts and metrics",
    time: "2h",
    skill: "frontend",
    scope: [
      "4-6 metric cards (revenue, users, etc.)",
      "Line chart for trends",
      "Bar chart for comparisons",
      "Date range selector",
      "Responsive grid layout"
    ],
    shipCriteria: [
      "Done when: all charts render",
      "Done when: data updates on date change",
      "Done when: responsive on mobile"
    ]
  },
  {
    id: "18",
    title: "Form Builder",
    oneLiner: "Drag-and-drop form builder with live preview",
    time: "2h",
    skill: "frontend",
    scope: [
      "Add form fields (text, email, select, etc.)",
      "Drag to reorder",
      "Edit field properties",
      "Live preview",
      "Export form JSON"
    ],
    shipCriteria: [
      "Done when: drag-and-drop works",
      "Done when: preview updates live",
      "Done when: export works"
    ]
  },

  // 4h Frontend
  {
    id: "19",
    title: "E-commerce Product Page",
    oneLiner: "Full product page with image gallery, variants, and cart",
    time: "4h",
    skill: "frontend",
    scope: [
      "Product image gallery with zoom",
      "Variant selector (size, color)",
      "Add to cart functionality",
      "Cart sidebar/drawer",
      "Checkout flow (mock)"
    ],
    shipCriteria: [
      "Done when: all interactions work",
      "Done when: cart persists",
      "Done when: checkout flow is complete"
    ]
  },
  {
    id: "20",
    title: "Social Media Feed",
    oneLiner: "Instagram-style feed with posts, likes, and comments",
    time: "4h",
    skill: "frontend",
    scope: [
      "Post cards with image, caption, user",
      "Like and comment buttons",
      "Comment thread",
      "Infinite scroll",
      "LocalStorage for state"
    ],
    shipCriteria: [
      "Done when: feed displays correctly",
      "Done when: interactions work",
      "Done when: infinite scroll works"
    ]
  },
  {
    id: "21",
    title: "Kanban Board",
    oneLiner: "Trello-style board with drag-and-drop cards",
    time: "4h",
    skill: "frontend",
    scope: [
      "Multiple columns (To Do, In Progress, Done)",
      "Add cards to columns",
      "Drag cards between columns",
      "Edit card details",
      "Persist to localStorage"
    ],
    shipCriteria: [
      "Done when: drag-and-drop works smoothly",
      "Done when: all CRUD works",
      "Done when: state persists"
    ]
  },

  // 8h Frontend
  {
    id: "22",
    title: "Video Player with Playlist",
    oneLiner: "Custom video player with playlist, subtitles, and controls",
    time: "8h",
    skill: "frontend",
    scope: [
      "Custom video controls",
      "Playlist management",
      "Subtitle support",
      "Playback speed control",
      "Fullscreen mode"
    ],
    shipCriteria: [
      "Done when: all controls work",
      "Done when: playlist switching works",
      "Done when: subtitles display"
    ]
  },
  {
    id: "23",
    title: "Code Editor",
    oneLiner: "Monaco-based code editor with syntax highlighting and themes",
    time: "8h",
    skill: "frontend",
    scope: [
      "Monaco Editor integration",
      "Multiple language support",
      "Theme switcher",
      "File tree sidebar",
      "Save/load files"
    ],
    shipCriteria: [
      "Done when: editor works smoothly",
      "Done when: themes apply",
      "Done when: file operations work"
    ]
  },

  // Backend ideas
  {
    id: "24",
    title: "URL Shortener API",
    oneLiner: "REST API to shorten URLs with analytics",
    time: "1h",
    skill: "backend",
    scope: [
      "POST /shorten endpoint",
      "Generate unique short codes",
      "GET /:code redirects to original",
      "Track click counts",
      "Simple in-memory store (or DB)"
    ],
    shipCriteria: [
      "Done when: shortening works",
      "Done when: redirects work",
      "Done when: analytics track correctly"
    ]
  },
  {
    id: "25",
    title: "Todo API",
    oneLiner: "CRUD REST API for todos with authentication",
    time: "2h",
    skill: "backend",
    scope: [
      "POST /todos (create)",
      "GET /todos (list)",
      "PUT /todos/:id (update)",
      "DELETE /todos/:id",
      "JWT auth middleware"
    ],
    shipCriteria: [
      "Done when: all CRUD endpoints work",
      "Done when: auth protects routes",
      "Done when: returns proper status codes"
    ]
  },
  {
    id: "26",
    title: "File Upload Service",
    oneLiner: "Handle file uploads with validation and storage",
    time: "2h",
    skill: "backend",
    scope: [
      "POST /upload endpoint",
      "File type validation",
      "Size limits",
      "Store files (local or S3)",
      "Return file URLs"
    ],
    shipCriteria: [
      "Done when: uploads work",
      "Done when: validation rejects bad files",
      "Done when: URLs are accessible"
    ]
  },
  {
    id: "27",
    title: "Webhook Receiver",
    oneLiner: "Receive and log webhooks with retry logic",
    time: "2h",
    skill: "backend",
    scope: [
      "POST /webhook endpoint",
      "Verify webhook signatures",
      "Log all webhooks",
      "Queue for processing",
      "Retry failed webhooks"
    ],
    shipCriteria: [
      "Done when: webhooks are received",
      "Done when: signatures verify",
      "Done when: retry logic works"
    ]
  },
  {
    id: "28",
    title: "Rate Limiter Middleware",
    oneLiner: "API rate limiting with Redis or in-memory store",
    time: "2h",
    skill: "backend",
    scope: [
      "Per-IP rate limiting",
      "Configurable limits (req/min)",
      "Return 429 on limit",
      "Redis or memory store",
      "Middleware for Express/Fastify"
    ],
    shipCriteria: [
      "Done when: limits are enforced",
      "Done when: 429 returns correctly",
      "Done when: resets after window"
    ]
  },
  {
    id: "29",
    title: "Email Service API",
    oneLiner: "Send emails via SMTP with templates",
    time: "4h",
    skill: "backend",
    scope: [
      "POST /send endpoint",
      "Template system (handlebars)",
      "SMTP configuration",
      "Queue for async sending",
      "Delivery status tracking"
    ],
    shipCriteria: [
      "Done when: emails send successfully",
      "Done when: templates render",
      "Done when: queue processes"
    ]
  },
  {
    id: "30",
    title: "Authentication Service",
    oneLiner: "JWT-based auth with signup, login, refresh tokens",
    time: "4h",
    skill: "backend",
    scope: [
      "POST /signup",
      "POST /login",
      "POST /refresh",
      "Password hashing (bcrypt)",
      "JWT generation and validation"
    ],
    shipCriteria: [
      "Done when: signup creates users",
      "Done when: login returns tokens",
      "Done when: refresh works"
    ]
  },
  {
    id: "31",
    title: "Real-time Chat API",
    oneLiner: "WebSocket server for real-time messaging",
    time: "8h",
    skill: "backend",
    scope: [
      "WebSocket server setup",
      "Room/channel management",
      "Message broadcasting",
      "User presence (online/offline)",
      "Message persistence"
    ],
    shipCriteria: [
      "Done when: messages broadcast in real-time",
      "Done when: rooms work",
      "Done when: presence updates"
    ]
  },

  // Fullstack ideas
  {
    id: "32",
    title: "Link in Bio",
    oneLiner: "Single page with multiple links and analytics",
    time: "2h",
    skill: "fullstack",
    scope: [
      "User creates page with links",
      "Custom URL slug",
      "Public page view",
      "Click tracking",
      "Simple analytics dashboard"
    ],
    shipCriteria: [
      "Done when: pages are shareable",
      "Done when: clicks are tracked",
      "Done when: analytics display"
    ]
  },
  {
    id: "33",
    title: "Poll Creator",
    oneLiner: "Create and share polls with real-time results",
    time: "2h",
    skill: "fullstack",
    scope: [
      "Create poll with options",
      "Shareable link",
      "Vote submission",
      "Real-time results chart",
      "No duplicate votes (cookie/IP)"
    ],
    shipCriteria: [
      "Done when: polls are shareable",
      "Done when: voting works",
      "Done when: results update live"
    ]
  },
  {
    id: "34",
    title: "Pastebin Clone",
    oneLiner: "Share code snippets with syntax highlighting",
    time: "2h",
    skill: "fullstack",
    scope: [
      "Paste code/text",
      "Generate shareable link",
      "Syntax highlighting",
      "Expiration dates",
      "Public/private options"
    ],
    shipCriteria: [
      "Done when: pastes are shareable",
      "Done when: highlighting works",
      "Done when: expiration works"
    ]
  },
  {
    id: "35",
    title: "Bookmark Manager",
    oneLiner: "Save and organize bookmarks with tags",
    time: "4h",
    skill: "fullstack",
    scope: [
      "Add bookmarks (URL, title, tags)",
      "Search and filter",
      "Tag management",
      "Import from browser",
      "Export to JSON"
    ],
    shipCriteria: [
      "Done when: CRUD works",
      "Done when: search is fast",
      "Done when: import/export work"
    ]
  },
  {
    id: "36",
    title: "Habit Tracker",
    oneLiner: "Track daily habits with streaks and stats",
    time: "4h",
    skill: "fullstack",
    scope: [
      "Add habits",
      "Mark complete daily",
      "Streak counter",
      "Calendar view",
      "Stats dashboard"
    ],
    shipCriteria: [
      "Done when: tracking works",
      "Done when: streaks calculate",
      "Done when: calendar displays"
    ]
  },
  {
    id: "37",
    title: "Expense Splitter",
    oneLiner: "Split bills and expenses among friends",
    time: "4h",
    skill: "fullstack",
    scope: [
      "Create expense group",
      "Add expenses",
      "Assign to people",
      "Calculate who owes what",
      "Settle up suggestions"
    ],
    shipCriteria: [
      "Done when: calculations are correct",
      "Done when: groups work",
      "Done when: settle-up logic works"
    ]
  },
  {
    id: "38",
    title: "Job Board",
    oneLiner: "Post and browse job listings with filters",
    time: "8h",
    skill: "fullstack",
    scope: [
      "Post jobs (title, description, location)",
      "Browse with filters",
      "Search functionality",
      "Apply flow",
      "Admin moderation"
    ],
    shipCriteria: [
      "Done when: posting works",
      "Done when: filters work",
      "Done when: apply flow works"
    ]
  },

  // Design ideas
  {
    id: "39",
    title: "Icon Set",
    oneLiner: "Create 20 consistent icons in Figma",
    time: "2h",
    skill: "design",
    scope: [
      "Choose theme (tech, nature, etc.)",
      "Design 20 icons",
      "Consistent style and size",
      "Export as SVG",
      "Create usage guide"
    ],
    shipCriteria: [
      "Done when: all icons are consistent",
      "Done when: SVGs are clean",
      "Done when: guide is clear"
    ]
  },
  {
    id: "40",
    title: "Landing Page Design",
    oneLiner: "Design a modern landing page in Figma",
    time: "4h",
    skill: "design",
    scope: [
      "Hero section",
      "Features section",
      "Testimonials",
      "CTA section",
      "Mobile responsive mockups"
    ],
    shipCriteria: [
      "Done when: all sections are designed",
      "Done when: mobile version exists",
      "Done when: design is polished"
    ]
  },
  {
    id: "41",
    title: "Design System",
    oneLiner: "Create a small design system with components",
    time: "8h",
    skill: "design",
    scope: [
      "Color palette",
      "Typography scale",
      "Button components",
      "Form components",
      "Documentation"
    ],
    shipCriteria: [
      "Done when: all components are consistent",
      "Done when: documentation is clear",
      "Done when: system is usable"
    ]
  },

  // Mobile ideas
  {
    id: "42",
    title: "Flashcard App",
    oneLiner: "Study flashcards with spaced repetition",
    time: "4h",
    skill: "mobile",
    scope: [
      "Create card decks",
      "Flip cards",
      "Mark correct/incorrect",
      "Spaced repetition algorithm",
      "Progress tracking"
    ],
    shipCriteria: [
      "Done when: cards work",
      "Done when: algorithm works",
      "Done when: progress tracks"
    ]
  },
  {
    id: "43",
    title: "Habit Tracker App",
    oneLiner: "Track daily habits with notifications",
    time: "4h",
    skill: "mobile",
    scope: [
      "Add habits",
      "Daily check-in",
      "Streak visualization",
      "Push notifications",
      "Local data storage"
    ],
    shipCriteria: [
      "Done when: tracking works",
      "Done when: notifications work",
      "Done when: streaks display"
    ]
  },
  {
    id: "44",
    title: "Expense Tracker App",
    oneLiner: "Track expenses on the go with categories",
    time: "4h",
    skill: "mobile",
    scope: [
      "Add expenses quickly",
      "Category selection",
      "Monthly summaries",
      "Charts and graphs",
      "Export data"
    ],
    shipCriteria: [
      "Done when: adding is fast",
      "Done when: summaries are accurate",
      "Done when: charts display"
    ]
  },
  {
    id: "45",
    title: "Weather App",
    oneLiner: "Beautiful weather app with location and forecasts",
    time: "4h",
    skill: "mobile",
    scope: [
      "Current weather",
      "7-day forecast",
      "Location-based",
      "Weather icons",
      "Smooth animations"
    ],
    shipCriteria: [
      "Done when: weather displays correctly",
      "Done when: location works",
      "Done when: animations are smooth"
    ]
  },
  {
    id: "46",
    title: "Notes App",
    oneLiner: "Rich text notes with search and organization",
    time: "8h",
    skill: "mobile",
    scope: [
      "Create/edit notes",
      "Rich text formatting",
      "Search notes",
      "Folders/tags",
      "Sync (optional)"
    ],
    shipCriteria: [
      "Done when: CRUD works",
      "Done when: search is fast",
      "Done when: organization works"
    ]
  },

  // More frontend ideas to reach 60
  {
    id: "47",
    title: "Gradient Generator",
    oneLiner: "Create beautiful gradients with CSS export",
    time: "1h",
    skill: "frontend",
    scope: [
      "Color pickers for start/end",
      "Live gradient preview",
      "Angle/direction control",
      "Copy CSS button",
      "Save favorites"
    ],
    shipCriteria: [
      "Done when: gradient updates live",
      "Done when: CSS copies correctly",
      "Done when: favorites save"
    ]
  },
  {
    id: "48",
    title: "Unit Converter",
    oneLiner: "Convert between units (length, weight, temperature)",
    time: "1h",
    skill: "frontend",
    scope: [
      "Select unit type",
      "Input value",
      "Select target unit",
      "Instant conversion",
      "Multiple unit types"
    ],
    shipCriteria: [
      "Done when: conversions are accurate",
      "Done when: all unit types work",
      "Done when: UI is clear"
    ]
  },
  {
    id: "49",
    title: "Stopwatch & Timer",
    oneLiner: "Precise stopwatch with lap times",
    time: "1h",
    skill: "frontend",
    scope: [
      "Start/stop/reset",
      "Lap time recording",
      "Lap history list",
      "Millisecond precision",
      "Clean, readable display"
    ],
    shipCriteria: [
      "Done when: timing is accurate",
      "Done when: laps record correctly",
      "Done when: display is clear"
    ]
  },
  {
    id: "50",
    title: "Random Name Picker",
    oneLiner: "Pick random names from a list for decisions",
    time: "30m",
    skill: "frontend",
    scope: [
      "Add names to list",
      "Random pick button",
      "Animation on pick",
      "Remove picked name option",
      "Reset list"
    ],
    shipCriteria: [
      "Done when: picking is random",
      "Done when: animation is smooth",
      "Done when: list management works"
    ]
  },
  {
    id: "51",
    title: "Tip Calculator",
    oneLiner: "Calculate tip and split bill among people",
    time: "30m",
    skill: "frontend",
    scope: [
      "Bill amount input",
      "Tip percentage selector",
      "Number of people",
      "Per-person amount",
      "Total with tip"
    ],
    shipCriteria: [
      "Done when: calculations are correct",
      "Done when: all inputs work",
      "Done when: display is clear"
    ]
  },
  {
    id: "52",
    title: "Age Calculator",
    oneLiner: "Calculate exact age in years, months, days",
    time: "30m",
    skill: "frontend",
    scope: [
      "Date of birth picker",
      "Calculate age",
      "Display: years, months, days",
      "Days until next birthday",
      "Clean, readable output"
    ],
    shipCriteria: [
      "Done when: calculation is accurate",
      "Done when: handles leap years",
      "Done when: next birthday works"
    ]
  },
  {
    id: "53",
    title: "Text to Speech",
    oneLiner: "Convert text to speech with voice selection",
    time: "1h",
    skill: "frontend",
    scope: [
      "Text input area",
      "Voice selection dropdown",
      "Play/pause controls",
      "Speed control",
      "Browser speech API"
    ],
    shipCriteria: [
      "Done when: speech works",
      "Done when: voice selection works",
      "Done when: controls work"
    ]
  },
  {
    id: "54",
    title: "Image Compressor",
    oneLiner: "Compress images before upload",
    time: "2h",
    skill: "frontend",
    scope: [
      "File input",
      "Image preview",
      "Quality slider",
      "Compress on client",
      "Download compressed image"
    ],
    shipCriteria: [
      "Done when: compression works",
      "Done when: quality control works",
      "Done when: download works"
    ]
  },
  {
    id: "55",
    title: "Password Generator",
    oneLiner: "Generate secure passwords with custom options",
    time: "1h",
    skill: "frontend",
    scope: [
      "Length slider",
      "Include uppercase, numbers, symbols",
      "Generate button",
      "Copy to clipboard",
      "Strength indicator"
    ],
    shipCriteria: [
      "Done when: generation works",
      "Done when: options are respected",
      "Done when: copy works"
    ]
  },
  {
    id: "56",
    title: "Countdown Timer",
    oneLiner: "Countdown to a specific date with visual progress",
    time: "1h",
    skill: "frontend",
    scope: [
      "Date/time picker",
      "Countdown display (days, hours, mins, secs)",
      "Visual progress bar",
      "Background image option",
      "Share countdown link"
    ],
    shipCriteria: [
      "Done when: countdown is accurate",
      "Done when: progress bar updates",
      "Done when: sharing works"
    ]
  },
  {
    id: "57",
    title: "Color Contrast Checker",
    oneLiner: "Check WCAG contrast ratios for accessibility",
    time: "1h",
    skill: "frontend",
    scope: [
      "Foreground/background color pickers",
      "Contrast ratio display",
      "WCAG compliance indicator",
      "Pass/fail for AA/AAA",
      "Suggest better colors"
    ],
    shipCriteria: [
      "Done when: ratios are accurate",
      "Done when: compliance is clear",
      "Done when: suggestions help"
    ]
  },
  {
    id: "58",
    title: "Emoji Picker",
    oneLiner: "Search and copy emojis easily",
    time: "1h",
    skill: "frontend",
    scope: [
      "Emoji grid display",
      "Search by name",
      "Category filters",
      "Click to copy",
      "Recent emojis"
    ],
    shipCriteria: [
      "Done when: search works",
      "Done when: copy works",
      "Done when: categories work"
    ]
  },
  {
    id: "59",
    title: "Lorem Ipsum Generator",
    oneLiner: "Generate placeholder text in various formats",
    time: "30m",
    skill: "frontend",
    scope: [
      "Paragraph count",
      "Words per paragraph",
      "Generate button",
      "Copy all text",
      "Different text types"
    ],
    shipCriteria: [
      "Done when: generation works",
      "Done when: copy works",
      "Done when: options work"
    ]
  },
  {
    id: "60",
    title: "Barcode Generator",
    oneLiner: "Generate barcodes from text with download",
    time: "1h",
    skill: "frontend",
    scope: [
      "Text input",
      "Barcode type selection",
      "Live barcode preview",
      "Download as image",
      "Print option"
    ],
    shipCriteria: [
      "Done when: barcode generates",
      "Done when: download works",
      "Done when: types work"
    ]
  }
];

// Helper functions
export function getIdeasByFilters(
  time?: TimeOption,
  skill?: SkillOption
): Idea[] {
  return ideas.filter((idea) => {
    if (time && idea.time !== time) return false;
    if (skill && idea.skill !== skill) return false;
    return true;
  });
}

export function getRandomIdeas(
  count: number,
  time?: TimeOption,
  skill?: SkillOption
): Idea[] {
  const filtered = getIdeasByFilters(time, skill);
  if (filtered.length === 0) return [];
  
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function getIdeaById(id: string): Idea | undefined {
  return ideas.find((idea) => idea.id === id);
}
