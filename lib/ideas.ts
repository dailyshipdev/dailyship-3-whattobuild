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
  },

  // Additional Frontend Ideas (30m)
  {
    id: "61",
    title: "Hex to RGB Converter",
    oneLiner: "Convert hex colors to RGB, HSL, and other formats",
    time: "30m",
    skill: "frontend",
    scope: [
      "Hex color input",
      "Display RGB, HSL, CMYK values",
      "Live color preview",
      "Copy each format",
      "Input validation"
    ],
    shipCriteria: [
      "Done when: conversions are accurate",
      "Done when: all formats display",
      "Done when: copy works for each format"
    ]
  },
  {
    id: "62",
    title: "Case Converter",
    oneLiner: "Convert text between different cases instantly",
    time: "30m",
    skill: "frontend",
    scope: [
      "Text input area",
      "Convert to: uppercase, lowercase, title, sentence, camel, kebab, snake",
      "Live preview",
      "Copy converted text",
      "Clear button"
    ],
    shipCriteria: [
      "Done when: all case conversions work",
      "Done when: copy works",
      "Done when: preview updates instantly"
    ]
  },
  {
    id: "63",
    title: "UUID Generator",
    oneLiner: "Generate UUIDs v4 with one click",
    time: "30m",
    skill: "frontend",
    scope: [
      "Generate button",
      "Display UUID",
      "Copy button",
      "Generate multiple option",
      "Format selector (with/without dashes)"
    ],
    shipCriteria: [
      "Done when: UUIDs are valid v4 format",
      "Done when: copy works",
      "Done when: multiple generation works"
    ]
  },
  {
    id: "64",
    title: "Base64 Encoder/Decoder",
    oneLiner: "Encode and decode Base64 strings",
    time: "30m",
    skill: "frontend",
    scope: [
      "Text input",
      "Encode/Decode toggle",
      "Output display",
      "Copy result",
      "Error handling for invalid input"
    ],
    shipCriteria: [
      "Done when: encoding works",
      "Done when: decoding works",
      "Done when: invalid input shows error"
    ]
  },
  {
    id: "65",
    title: "JSON Formatter",
    oneLiner: "Format and validate JSON with syntax highlighting",
    time: "30m",
    skill: "frontend",
    scope: [
      "Textarea input",
      "Format button",
      "Minify option",
      "Syntax highlighting",
      "Error display for invalid JSON"
    ],
    shipCriteria: [
      "Done when: formatting works",
      "Done when: minify works",
      "Done when: errors are clear"
    ]
  },
  {
    id: "66",
    title: "URL Parser",
    oneLiner: "Parse URLs into components (protocol, domain, path, query)",
    time: "30m",
    skill: "frontend",
    scope: [
      "URL input field",
      "Display: protocol, host, path, query params, hash",
      "Copy each component",
      "Visual breakdown",
      "Validation"
    ],
    shipCriteria: [
      "Done when: all components parse correctly",
      "Done when: copy works for each part",
      "Done when: invalid URLs show error"
    ]
  },
  {
    id: "67",
    title: "Hash Generator",
    oneLiner: "Generate MD5, SHA-1, SHA-256 hashes from text",
    time: "30m",
    skill: "frontend",
    scope: [
      "Text input",
      "Hash type selector (MD5, SHA-1, SHA-256)",
      "Display hash",
      "Copy hash",
      "Multiple hash types at once"
    ],
    shipCriteria: [
      "Done when: hashes are correct",
      "Done when: copy works",
      "Done when: all hash types work"
    ]
  },
  {
    id: "68",
    title: "Image to Base64",
    oneLiner: "Convert images to Base64 data URLs",
    time: "30m",
    skill: "frontend",
    scope: [
      "File input for images",
      "Image preview",
      "Base64 output display",
      "Copy Base64 string",
      "File size display"
    ],
    shipCriteria: [
      "Done when: conversion works",
      "Done when: Base64 is valid",
      "Done when: copy works"
    ]
  },
  {
    id: "69",
    title: "Text Diff Viewer",
    oneLiner: "Compare two texts and highlight differences",
    time: "1h",
    skill: "frontend",
    scope: [
      "Two textarea inputs",
      "Compare button",
      "Side-by-side diff view",
      "Highlight additions/deletions",
      "Copy diff result"
    ],
    shipCriteria: [
      "Done when: differences are highlighted",
      "Done when: additions/deletions are clear",
      "Done when: diff is accurate"
    ]
  },
  {
    id: "70",
    title: "CSS Minifier",
    oneLiner: "Minify CSS code and remove whitespace",
    time: "30m",
    skill: "frontend",
    scope: [
      "CSS input area",
      "Minify button",
      "Minified output",
      "Copy minified CSS",
      "Size comparison (before/after)"
    ],
    shipCriteria: [
      "Done when: minification works",
      "Done when: output is valid CSS",
      "Done when: size comparison shows"
    ]
  },

  // Additional Frontend Ideas (1h)
  {
    id: "71",
    title: "SVG Path Editor",
    oneLiner: "Visual editor for SVG path commands",
    time: "1h",
    skill: "frontend",
    scope: [
      "SVG path input",
      "Visual canvas preview",
      "Edit path commands",
      "Export SVG",
      "Copy path string"
    ],
    shipCriteria: [
      "Done when: path renders correctly",
      "Done when: editing updates preview",
      "Done when: export works"
    ]
  },
  {
    id: "72",
    title: "Font Pairing Tool",
    oneLiner: "Preview and compare font combinations",
    time: "1h",
    skill: "frontend",
    scope: [
      "Select heading font",
      "Select body font",
      "Live preview with sample text",
      "Font size controls",
      "Copy CSS font-family"
    ],
    shipCriteria: [
      "Done when: fonts load correctly",
      "Done when: preview updates live",
      "Done when: CSS copies correctly"
    ]
  },
  {
    id: "73",
    title: "CSS Box Shadow Generator",
    oneLiner: "Visual tool to create CSS box shadows",
    time: "1h",
    skill: "frontend",
    scope: [
      "Interactive sliders (x, y, blur, spread)",
      "Color picker",
      "Live preview box",
      "Copy CSS code",
      "Preset shadows"
    ],
    shipCriteria: [
      "Done when: preview updates in real-time",
      "Done when: CSS is correct",
      "Done when: copy works"
    ]
  },
  {
    id: "74",
    title: "Favicon Generator",
    oneLiner: "Generate favicons from text or emoji",
    time: "1h",
    skill: "frontend",
    scope: [
      "Text/emoji input",
      "Background color picker",
      "Size selector (16x16, 32x32, etc.)",
      "Preview all sizes",
      "Download favicon files"
    ],
    shipCriteria: [
      "Done when: favicons generate",
      "Done when: all sizes work",
      "Done when: downloads work"
    ]
  },
  {
    id: "75",
    title: "Image Cropper",
    oneLiner: "Crop images with aspect ratio controls",
    time: "1h",
    skill: "frontend",
    scope: [
      "File input",
      "Image preview with crop overlay",
      "Drag to adjust crop area",
      "Aspect ratio presets",
      "Download cropped image"
    ],
    shipCriteria: [
      "Done when: cropping works",
      "Done when: aspect ratios work",
      "Done when: download works"
    ]
  },
  {
    id: "76",
    title: "Code Snippet Formatter",
    oneLiner: "Format code snippets with syntax highlighting",
    time: "1h",
    skill: "frontend",
    scope: [
      "Code input",
      "Language selector",
      "Syntax highlighting",
      "Copy formatted code",
      "Theme selector"
    ],
    shipCriteria: [
      "Done when: highlighting works",
      "Done when: all languages supported",
      "Done when: copy preserves formatting"
    ]
  },
  {
    id: "77",
    title: "Responsive Design Checker",
    oneLiner: "Preview website at different screen sizes",
    time: "1h",
    skill: "frontend",
    scope: [
      "URL input",
      "Device presets (mobile, tablet, desktop)",
      "Custom width/height",
      "Iframe preview",
      "Screenshot option"
    ],
    shipCriteria: [
      "Done when: preview loads",
      "Done when: all device sizes work",
      "Done when: custom sizes work"
    ]
  },
  {
    id: "78",
    title: "Animation Playground",
    oneLiner: "Create and preview CSS animations",
    time: "1h",
    skill: "frontend",
    scope: [
      "Animation type selector",
      "Duration and timing controls",
      "Live preview element",
      "Copy CSS animation code",
      "Play/pause controls"
    ],
    shipCriteria: [
      "Done when: animations play",
      "Done when: controls work",
      "Done when: CSS is correct"
    ]
  },
  {
    id: "79",
    title: "Color Blindness Simulator",
    oneLiner: "See how colors look to colorblind users",
    time: "1h",
    skill: "frontend",
    scope: [
      "Image upload or color picker",
      "Colorblind type selector (protanopia, deuteranopia, etc.)",
      "Before/after comparison",
      "Accessibility score",
      "Export filtered image"
    ],
    shipCriteria: [
      "Done when: filters apply correctly",
      "Done when: all types work",
      "Done when: comparison is clear"
    ]
  },
  {
    id: "80",
    title: "Web Performance Checker",
    oneLiner: "Analyze website performance metrics",
    time: "1h",
    skill: "frontend",
    scope: [
      "URL input",
      "Fetch and analyze page",
      "Display: load time, size, requests",
      "Performance score",
      "Suggestions for improvement"
    ],
    shipCriteria: [
      "Done when: metrics are accurate",
      "Done when: analysis works",
      "Done when: suggestions are relevant"
    ]
  },

  // Additional Frontend Ideas (2h)
  {
    id: "81",
    title: "Interactive Color Wheel",
    oneLiner: "Advanced color picker with harmonies and palettes",
    time: "2h",
    skill: "frontend",
    scope: [
      "Interactive color wheel",
      "Harmony modes (complementary, triadic, etc.)",
      "Generate palette from selection",
      "Export palette as JSON/CSS",
      "Save favorite palettes"
    ],
    shipCriteria: [
      "Done when: color wheel is interactive",
      "Done when: harmonies work",
      "Done when: export works"
    ]
  },
  {
    id: "82",
    title: "Code Playground",
    oneLiner: "Live HTML/CSS/JS editor with preview",
    time: "2h",
    skill: "frontend",
    scope: [
      "Three-pane editor (HTML, CSS, JS)",
      "Live preview iframe",
      "Syntax highlighting",
      "Save/load snippets",
      "Share link generation"
    ],
    shipCriteria: [
      "Done when: preview updates live",
      "Done when: all panes work",
      "Done when: sharing works"
    ]
  },
  {
    id: "83",
    title: "Component Library Builder",
    oneLiner: "Build and document reusable UI components",
    time: "2h",
    skill: "frontend",
    scope: [
      "Component editor",
      "Props configuration",
      "Live preview",
      "Code export",
      "Component gallery"
    ],
    shipCriteria: [
      "Done when: components render",
      "Done when: props work",
      "Done when: export is valid code"
    ]
  },
  {
    id: "84",
    title: "Form Builder with Validation",
    oneLiner: "Drag-and-drop form builder with validation rules",
    time: "2h",
    skill: "frontend",
    scope: [
      "Add form fields (text, email, select, etc.)",
      "Drag to reorder",
      "Set validation rules",
      "Live preview with validation",
      "Export form HTML/JSON"
    ],
    shipCriteria: [
      "Done when: drag-and-drop works",
      "Done when: validation works",
      "Done when: export is functional"
    ]
  },
  {
    id: "85",
    title: "Data Visualization Dashboard",
    oneLiner: "Create charts and graphs from CSV data",
    time: "2h",
    skill: "frontend",
    scope: [
      "CSV file upload",
      "Chart type selector (line, bar, pie)",
      "Data mapping interface",
      "Interactive charts",
      "Export charts as images"
    ],
    shipCriteria: [
      "Done when: charts render correctly",
      "Done when: data mapping works",
      "Done when: export works"
    ]
  },
  {
    id: "86",
    title: "Markdown Editor with Preview",
    oneLiner: "WYSIWYG markdown editor with live preview",
    time: "2h",
    skill: "frontend",
    scope: [
      "Split view: editor + preview",
      "Markdown toolbar",
      "Live rendering",
      "Export to HTML/PDF",
      "Syntax highlighting in editor"
    ],
    shipCriteria: [
      "Done when: preview updates live",
      "Done when: all markdown features work",
      "Done when: export works"
    ]
  },
  {
    id: "87",
    title: "Image Gallery with Filters",
    oneLiner: "Photo gallery with search and filter options",
    time: "2h",
    skill: "frontend",
    scope: [
      "Grid gallery layout",
      "Upload multiple images",
      "Search by tags/name",
      "Filter by date/size",
      "Lightbox viewer"
    ],
    shipCriteria: [
      "Done when: gallery displays correctly",
      "Done when: search/filter work",
      "Done when: lightbox works"
    ]
  },
  {
    id: "88",
    title: "Accessibility Checker",
    oneLiner: "Audit website for accessibility issues",
    time: "2h",
    skill: "frontend",
    scope: [
      "URL input or HTML paste",
      "Check: alt texts, ARIA labels, contrast, headings",
      "Issue list with severity",
      "Suggestions for fixes",
      "Export report"
    ],
    shipCriteria: [
      "Done when: checks are accurate",
      "Done when: all issues are found",
      "Done when: report is useful"
    ]
  },
  {
    id: "89",
    title: "CSS Grid Generator",
    oneLiner: "Visual tool to create CSS Grid layouts",
    time: "2h",
    skill: "frontend",
    scope: [
      "Grid template builder",
      "Drag to adjust columns/rows",
      "Place items visually",
      "Live CSS output",
      "Copy CSS code"
    ],
    shipCriteria: [
      "Done when: grid builder works",
      "Done when: CSS is correct",
      "Done when: copy works"
    ]
  },
  {
    id: "90",
    title: "API Testing Tool",
    oneLiner: "Test REST APIs with requests and responses",
    time: "2h",
    skill: "frontend",
    scope: [
      "HTTP method selector",
      "URL input",
      "Headers editor",
      "Body editor (JSON)",
      "Response viewer with formatting"
    ],
    shipCriteria: [
      "Done when: requests send correctly",
      "Done when: responses display",
      "Done when: all methods work"
    ]
  },

  // Additional Frontend Ideas (4h)
  {
    id: "91",
    title: "E-commerce Product Catalog",
    oneLiner: "Full product catalog with filters and search",
    time: "4h",
    skill: "frontend",
    scope: [
      "Product grid/list view",
      "Advanced filters (price, category, rating)",
      "Search functionality",
      "Product detail modal",
      "Shopping cart sidebar"
    ],
    shipCriteria: [
      "Done when: all views work",
      "Done when: filters are accurate",
      "Done when: cart persists"
    ]
  },
  {
    id: "92",
    title: "Real-time Collaboration Editor",
    oneLiner: "Multi-user text editor with live cursors",
    time: "4h",
    skill: "frontend",
    scope: [
      "WebSocket connection",
      "Live text editing",
      "Show other users' cursors",
      "User presence indicators",
      "Change history"
    ],
    shipCriteria: [
      "Done when: edits sync in real-time",
      "Done when: cursors display",
      "Done when: presence works"
    ]
  },
  {
    id: "93",
    title: "Video Player with Playlist",
    oneLiner: "Custom video player with playlist management",
    time: "4h",
    skill: "frontend",
    scope: [
      "Custom video controls",
      "Playlist sidebar",
      "Add/remove videos",
      "Playback speed control",
      "Fullscreen mode"
    ],
    shipCriteria: [
      "Done when: all controls work",
      "Done when: playlist works",
      "Done when: fullscreen works"
    ]
  },
  {
    id: "94",
    title: "Interactive Map with Markers",
    oneLiner: "Map interface with custom markers and info windows",
    time: "4h",
    skill: "frontend",
    scope: [
      "Map integration (Google Maps/Leaflet)",
      "Add custom markers",
      "Info windows on click",
      "Search locations",
      "Route planning"
    ],
    shipCriteria: [
      "Done when: map loads",
      "Done when: markers work",
      "Done when: search works"
    ]
  },
  {
    id: "95",
    title: "Advanced Data Table",
    oneLiner: "Sortable, filterable, paginated data table",
    time: "4h",
    skill: "frontend",
    scope: [
      "Table with sortable columns",
      "Column filters",
      "Pagination",
      "Row selection",
      "Export to CSV"
    ],
    shipCriteria: [
      "Done when: sorting works",
      "Done when: filters work",
      "Done when: export works"
    ]
  },

  // Additional Backend Ideas
  {
    id: "96",
    title: "API Rate Limiter",
    oneLiner: "Middleware to limit API requests per IP/user",
    time: "1h",
    skill: "backend",
    scope: [
      "Per-IP tracking",
      "Configurable rate limits",
      "Return 429 on exceed",
      "Redis or in-memory store",
      "Reset window logic"
    ],
    shipCriteria: [
      "Done when: limits are enforced",
      "Done when: 429 returns correctly",
      "Done when: resets work"
    ]
  },
  {
    id: "97",
    title: "Log Aggregator",
    oneLiner: "Collect and search application logs",
    time: "2h",
    skill: "backend",
    scope: [
      "POST /logs endpoint",
      "Store logs with timestamp",
      "Search by level/message",
      "Filter by date range",
      "Export logs"
    ],
    shipCriteria: [
      "Done when: logs are stored",
      "Done when: search works",
      "Done when: export works"
    ]
  },
  {
    id: "98",
    title: "Health Check Endpoint",
    oneLiner: "Monitor service health and dependencies",
    time: "1h",
    skill: "backend",
    scope: [
      "GET /health endpoint",
      "Check database connection",
      "Check external APIs",
      "Return status codes",
      "Response time metrics"
    ],
    shipCriteria: [
      "Done when: checks are accurate",
      "Done when: all dependencies checked",
      "Done when: status codes are correct"
    ]
  },
  {
    id: "99",
    title: "Background Job Queue",
    oneLiner: "Process long-running tasks asynchronously",
    time: "4h",
    skill: "backend",
    scope: [
      "Job queue system",
      "Worker processes",
      "Job status tracking",
      "Retry failed jobs",
      "Job priority levels"
    ],
    shipCriteria: [
      "Done when: jobs queue correctly",
      "Done when: workers process jobs",
      "Done when: retries work"
    ]
  },
  {
    id: "100",
    title: "Caching Layer",
    oneLiner: "Implement Redis caching for API responses",
    time: "2h",
    skill: "backend",
    scope: [
      "Redis integration",
      "Cache GET requests",
      "TTL configuration",
      "Cache invalidation",
      "Cache hit/miss metrics"
    ],
    shipCriteria: [
      "Done when: caching works",
      "Done when: TTL is respected",
      "Done when: invalidation works"
    ]
  },
  {
    id: "101",
    title: "Webhook Dispatcher",
    oneLiner: "Send webhooks to external services",
    time: "2h",
    skill: "backend",
    scope: [
      "Webhook registration",
      "Event triggering",
      "HTTP POST to URLs",
      "Retry logic on failure",
      "Webhook status tracking"
    ],
    shipCriteria: [
      "Done when: webhooks send",
      "Done when: retries work",
      "Done when: status tracks"
    ]
  },
  {
    id: "102",
    title: "Data Validation Service",
    oneLiner: "Validate and sanitize input data",
    time: "1h",
    skill: "backend",
    scope: [
      "Schema validation",
      "Type checking",
      "Sanitization rules",
      "Error messages",
      "Multiple format support (JSON, XML)"
    ],
    shipCriteria: [
      "Done when: validation works",
      "Done when: errors are clear",
      "Done when: sanitization works"
    ]
  },
  {
    id: "103",
    title: "File Processing Service",
    oneLiner: "Process uploaded files (resize, convert, extract)",
    time: "4h",
    skill: "backend",
    scope: [
      "File upload endpoint",
      "Image resizing",
      "Format conversion",
      "Metadata extraction",
      "Processed file storage"
    ],
    shipCriteria: [
      "Done when: processing works",
      "Done when: all operations work",
      "Done when: files are stored"
    ]
  },
  {
    id: "104",
    title: "Scheduled Task Runner",
    oneLiner: "Run tasks on cron-like schedules",
    time: "2h",
    skill: "backend",
    scope: [
      "Schedule configuration",
      "Cron expression parser",
      "Task execution",
      "Execution history",
      "Error handling"
    ],
    shipCriteria: [
      "Done when: schedules work",
      "Done when: tasks execute on time",
      "Done when: history tracks"
    ]
  },
  {
    id: "105",
    title: "API Gateway",
    oneLiner: "Route requests to multiple backend services",
    time: "4h",
    skill: "backend",
    scope: [
      "Route configuration",
      "Request forwarding",
      "Load balancing",
      "Request/response transformation",
      "Circuit breaker pattern"
    ],
    shipCriteria: [
      "Done when: routing works",
      "Done when: load balancing works",
      "Done when: circuit breaker works"
    ]
  },

  // Additional Fullstack Ideas
  {
    id: "106",
    title: "URL Shortener with Analytics",
    oneLiner: "Shorten URLs and track click analytics",
    time: "2h",
    skill: "fullstack",
    scope: [
      "Shorten URL endpoint",
      "Redirect to original",
      "Track clicks (IP, timestamp, referrer)",
      "Analytics dashboard",
      "Custom slug support"
    ],
    shipCriteria: [
      "Done when: shortening works",
      "Done when: redirects work",
      "Done when: analytics display"
    ]
  },
  {
    id: "107",
    title: "Comment System",
    oneLiner: "Nested comments with replies and moderation",
    time: "4h",
    skill: "fullstack",
    scope: [
      "Post comments",
      "Reply to comments (nested)",
      "Edit/delete own comments",
      "Moderation queue",
      "Spam detection"
    ],
    shipCriteria: [
      "Done when: nesting works",
      "Done when: CRUD works",
      "Done when: moderation works"
    ]
  },
  {
    id: "108",
    title: "Notification System",
    oneLiner: "In-app and email notifications",
    time: "4h",
    skill: "fullstack",
    scope: [
      "Notification creation",
      "In-app notification center",
      "Email notifications",
      "Mark as read",
      "Notification preferences"
    ],
    shipCriteria: [
      "Done when: notifications create",
      "Done when: center displays",
      "Done when: emails send"
    ]
  },
  {
    id: "109",
    title: "Search Functionality",
    oneLiner: "Full-text search with filters and sorting",
    time: "4h",
    skill: "fullstack",
    scope: [
      "Search input",
      "Full-text search",
      "Filter by category/date",
      "Sort results",
      "Search history"
    ],
    shipCriteria: [
      "Done when: search is fast",
      "Done when: filters work",
      "Done when: results are relevant"
    ]
  },
  {
    id: "110",
    title: "User Dashboard",
    oneLiner: "Personal dashboard with stats and activity",
    time: "4h",
    skill: "fullstack",
    scope: [
      "User profile",
      "Activity feed",
      "Statistics widgets",
      "Settings page",
      "Data export"
    ],
    shipCriteria: [
      "Done when: profile displays",
      "Done when: stats are accurate",
      "Done when: settings save"
    ]
  },
  {
    id: "111",
    title: "Content Management System",
    oneLiner: "Create, edit, and publish content",
    time: "8h",
    skill: "fullstack",
    scope: [
      "Content editor (rich text)",
      "Draft/publish workflow",
      "Content categories",
      "Media library",
      "SEO settings"
    ],
    shipCriteria: [
      "Done when: editor works",
      "Done when: publishing works",
      "Done when: SEO works"
    ]
  },
  {
    id: "112",
    title: "Multi-tenant SaaS App",
    oneLiner: "SaaS application with organization support",
    time: "8h",
    skill: "fullstack",
    scope: [
      "Organization creation",
      "User roles (admin, member)",
      "Organization settings",
      "Billing integration",
      "Data isolation"
    ],
    shipCriteria: [
      "Done when: orgs work",
      "Done when: roles work",
      "Done when: data is isolated"
    ]
  },
  {
    id: "113",
    title: "E-commerce Store",
    oneLiner: "Full online store with cart and checkout",
    time: "8h",
    skill: "fullstack",
    scope: [
      "Product catalog",
      "Shopping cart",
      "Checkout flow",
      "Order management",
      "Payment integration"
    ],
    shipCriteria: [
      "Done when: cart works",
      "Done when: checkout works",
      "Done when: payments work"
    ]
  },
  {
    id: "114",
    title: "Social Feed",
    oneLiner: "Twitter-like feed with posts and interactions",
    time: "8h",
    skill: "fullstack",
    scope: [
      "Create posts",
      "Feed timeline",
      "Like/comment",
      "Follow users",
      "Notifications"
    ],
    shipCriteria: [
      "Done when: feed displays",
      "Done when: interactions work",
      "Done when: follow works"
    ]
  },
  {
    id: "115",
    title: "Project Management Tool",
    oneLiner: "Kanban board with tasks and teams",
    time: "8h",
    skill: "fullstack",
    scope: [
      "Create projects",
      "Kanban board",
      "Task management",
      "Team collaboration",
      "Activity timeline"
    ],
    shipCriteria: [
      "Done when: board works",
      "Done when: tasks work",
      "Done when: collaboration works"
    ]
  },

  // Additional Design Ideas
  {
    id: "116",
    title: "Logo Design",
    oneLiner: "Design a simple logo in Figma",
    time: "2h",
    skill: "design",
    scope: [
      "Choose concept",
      "Design 3 variations",
      "Color palette selection",
      "Export in multiple formats",
      "Usage guidelines"
    ],
    shipCriteria: [
      "Done when: logo is clean",
      "Done when: variations work",
      "Done when: exports are ready"
    ]
  },
  {
    id: "117",
    title: "Mobile App UI Kit",
    oneLiner: "Design mobile app screens and components",
    time: "4h",
    skill: "design",
    scope: [
      "Design 5-7 key screens",
      "Component library",
      "Navigation patterns",
      "Dark mode variants",
      "Design specs"
    ],
    shipCriteria: [
      "Done when: screens are complete",
      "Done when: components are reusable",
      "Done when: specs are clear"
    ]
  },
  {
    id: "118",
    title: "Brand Guidelines",
    oneLiner: "Create brand identity guidelines document",
    time: "4h",
    skill: "design",
    scope: [
      "Logo usage rules",
      "Color palette with codes",
      "Typography system",
      "Spacing guidelines",
      "Example applications"
    ],
    shipCriteria: [
      "Done when: guidelines are clear",
      "Done when: all elements documented",
      "Done when: examples are helpful"
    ]
  },
  {
    id: "119",
    title: "Email Template Design",
    oneLiner: "Design responsive email templates",
    time: "2h",
    skill: "design",
    scope: [
      "Design email layout",
      "Mobile responsive",
      "HTML email code",
      "Dark mode support",
      "Test in email clients"
    ],
    shipCriteria: [
      "Done when: design is clean",
      "Done when: responsive works",
      "Done when: code is valid"
    ]
  },
  {
    id: "120",
    title: "Dashboard Mockup",
    oneLiner: "Design analytics dashboard interface",
    time: "4h",
    skill: "design",
    scope: [
      "Layout structure",
      "Chart placeholders",
      "Data visualization",
      "Navigation design",
      "Interactive prototype"
    ],
    shipCriteria: [
      "Done when: layout is clear",
      "Done when: charts are designed",
      "Done when: prototype works"
    ]
  },

  // Additional Mobile Ideas
  {
    id: "121",
    title: "QR Code Scanner",
    oneLiner: "Scan QR codes and handle different types",
    time: "2h",
    skill: "mobile",
    scope: [
      "Camera integration",
      "QR code detection",
      "Handle URLs, text, WiFi, etc.",
      "History of scans",
      "Share scan results"
    ],
    shipCriteria: [
      "Done when: scanning works",
      "Done when: all types handled",
      "Done when: history works"
    ]
  },
  {
    id: "122",
    title: "Voice Recorder",
    oneLiner: "Record and manage voice notes",
    time: "2h",
    skill: "mobile",
    scope: [
      "Record audio",
      "Playback controls",
      "Save recordings",
      "Organize by folders",
      "Share recordings"
    ],
    shipCriteria: [
      "Done when: recording works",
      "Done when: playback works",
      "Done when: organization works"
    ]
  },
  {
    id: "123",
    title: "Barcode Scanner",
    oneLiner: "Scan product barcodes and get info",
    time: "2h",
    skill: "mobile",
    scope: [
      "Camera barcode scanning",
      "Product lookup",
      "Price comparison",
      "Save favorites",
      "Share products"
    ],
    shipCriteria: [
      "Done when: scanning works",
      "Done when: lookup works",
      "Done when: favorites work"
    ]
  },
  {
    id: "124",
    title: "Photo Editor",
    oneLiner: "Edit photos with filters and adjustments",
    time: "4h",
    skill: "mobile",
    scope: [
      "Photo selection",
      "Filters library",
      "Brightness/contrast/saturation",
      "Crop and rotate",
      "Save edited photos"
    ],
    shipCriteria: [
      "Done when: editing works",
      "Done when: filters apply",
      "Done when: save works"
    ]
  },
  {
    id: "125",
    title: "Location Tracker",
    oneLiner: "Track and share your location",
    time: "4h",
    skill: "mobile",
    scope: [
      "GPS location tracking",
      "Share location with others",
      "Location history",
      "Geofencing alerts",
      "Map visualization"
    ],
    shipCriteria: [
      "Done when: tracking works",
      "Done when: sharing works",
      "Done when: history works"
    ]
  },
  {
    id: "126",
    title: "Offline Dictionary",
    oneLiner: "Dictionary app that works offline",
    time: "2h",
    skill: "mobile",
    scope: [
      "Word search",
      "Definitions and examples",
      "Offline database",
      "Bookmark words",
      "Recent searches"
    ],
    shipCriteria: [
      "Done when: search works offline",
      "Done when: definitions display",
      "Done when: bookmarks work"
    ]
  },
  {
    id: "127",
    title: "Meditation Timer",
    oneLiner: "Timer for meditation sessions",
    time: "1h",
    skill: "mobile",
    scope: [
      "Set timer duration",
      "Bell sounds",
      "Session history",
      "Statistics",
      "Background audio"
    ],
    shipCriteria: [
      "Done when: timer works",
      "Done when: sounds play",
      "Done when: history tracks"
    ]
  },
  {
    id: "128",
    title: "Workout Tracker",
    oneLiner: "Track workouts and progress",
    time: "4h",
    skill: "mobile",
    scope: [
      "Log exercises",
      "Sets and reps tracking",
      "Progress charts",
      "Workout templates",
      "Rest timer"
    ],
    shipCriteria: [
      "Done when: logging works",
      "Done when: charts display",
      "Done when: templates work"
    ]
  },
  {
    id: "129",
    title: "Sleep Tracker",
    oneLiner: "Track sleep patterns and quality",
    time: "4h",
    skill: "mobile",
    scope: [
      "Sleep time logging",
      "Wake time tracking",
      "Sleep quality rating",
      "Statistics and trends",
      "Sleep goals"
    ],
    shipCriteria: [
      "Done when: tracking works",
      "Done when: stats are accurate",
      "Done when: goals work"
    ]
  },
  {
    id: "130",
    title: "Recipe App",
    oneLiner: "Save and organize cooking recipes",
    time: "4h",
    skill: "mobile",
    scope: [
      "Add recipes with ingredients",
      "Step-by-step instructions",
      "Recipe categories",
      "Shopping list generator",
      "Timer for cooking steps"
    ],
    shipCriteria: [
      "Done when: recipes save",
      "Done when: categories work",
      "Done when: shopping list works"
    ]
  },

  // More Awesome Ideas - Frontend (30m)
  {
    id: "131",
    title: "Text Reverser",
    oneLiner: "Reverse text, words, or sentences with one click",
    time: "30m",
    skill: "frontend",
    scope: [
      "Text input area",
      "Reverse options: characters, words, lines",
      "Live preview",
      "Copy reversed text",
      "Clear button"
    ],
    shipCriteria: [
      "Done when: all reverse modes work",
      "Done when: copy works",
      "Done when: preview updates instantly"
    ]
  },
  {
    id: "132",
    title: "IP Address Info",
    oneLiner: "Get information about any IP address",
    time: "30m",
    skill: "frontend",
    scope: [
      "IP input field",
      "Display: location, ISP, timezone",
      "Auto-detect own IP",
      "Copy IP info",
      "Visual map location"
    ],
    shipCriteria: [
      "Done when: info displays correctly",
      "Done when: auto-detect works",
      "Done when: map shows location"
    ]
  },
  {
    id: "133",
    title: "Text to Binary Converter",
    oneLiner: "Convert text to binary and vice versa",
    time: "30m",
    skill: "frontend",
    scope: [
      "Text input",
      "Convert to/from binary",
      "Live conversion",
      "Copy result",
      "Character-by-character breakdown"
    ],
    shipCriteria: [
      "Done when: conversion is accurate",
      "Done when: both directions work",
      "Done when: copy works"
    ]
  },
  {
    id: "134",
    title: "Morse Code Translator",
    oneLiner: "Translate text to Morse code and decode it",
    time: "30m",
    skill: "frontend",
    scope: [
      "Text input",
      "Encode to Morse code",
      "Decode from Morse code",
      "Play audio",
      "Copy result"
    ],
    shipCriteria: [
      "Done when: encoding works",
      "Done when: decoding works",
      "Done when: audio plays"
    ]
  },
  {
    id: "135",
    title: "Random String Generator",
    oneLiner: "Generate random strings for passwords, IDs, tokens",
    time: "30m",
    skill: "frontend",
    scope: [
      "Length selector",
      "Character set options (alphanumeric, symbols, etc.)",
      "Generate button",
      "Copy generated string",
      "Generate multiple at once"
    ],
    shipCriteria: [
      "Done when: generation works",
      "Done when: all options work",
      "Done when: copy works"
    ]
  },
  {
    id: "136",
    title: "Time Zone Converter",
    oneLiner: "Convert time between different time zones",
    time: "30m",
    skill: "frontend",
    scope: [
      "Time input",
      "Source timezone selector",
      "Target timezone selector",
      "Live conversion",
      "Multiple timezones display"
    ],
    shipCriteria: [
      "Done when: conversion is accurate",
      "Done when: all timezones work",
      "Done when: updates in real-time"
    ]
  },
  {
    id: "137",
    title: "Character Counter",
    oneLiner: "Count characters, words, paragraphs with limits",
    time: "30m",
    skill: "frontend",
    scope: [
      "Text input",
      "Character count with limit",
      "Word count",
      "Paragraph count",
      "Visual progress indicator"
    ],
    shipCriteria: [
      "Done when: counts are accurate",
      "Done when: limits work",
      "Done when: progress updates live"
    ]
  },
  {
    id: "138",
    title: "HTML Entity Encoder",
    oneLiner: "Encode and decode HTML entities",
    time: "30m",
    skill: "frontend",
    scope: [
      "Text input",
      "Encode/Decode toggle",
      "Output display",
      "Copy result",
      "Common entities reference"
    ],
    shipCriteria: [
      "Done when: encoding works",
      "Done when: decoding works",
      "Done when: copy works"
    ]
  },
  {
    id: "139",
    title: "URL Encoder/Decoder",
    oneLiner: "Encode and decode URL strings",
    time: "30m",
    skill: "frontend",
    scope: [
      "URL input",
      "Encode/Decode toggle",
      "Output display",
      "Copy result",
      "Validation"
    ],
    shipCriteria: [
      "Done when: encoding works",
      "Done when: decoding works",
      "Done when: validation works"
    ]
  },
  {
    id: "140",
    title: "Credit Card Validator",
    oneLiner: "Validate credit card numbers with Luhn algorithm",
    time: "30m",
    skill: "frontend",
    scope: [
      "Card number input",
      "Luhn algorithm validation",
      "Card type detection (Visa, Mastercard, etc.)",
      "Visual feedback",
      "Format card number automatically"
    ],
    shipCriteria: [
      "Done when: validation is accurate",
      "Done when: card types detected",
      "Done when: formatting works"
    ]
  },

  // More Awesome Ideas - Frontend (1h)
  {
    id: "141",
    title: "CSS Flexbox Generator",
    oneLiner: "Visual tool to create Flexbox layouts",
    time: "1h",
    skill: "frontend",
    scope: [
      "Flex container controls",
      "Item properties editor",
      "Live preview",
      "Copy CSS code",
      "Preset layouts"
    ],
    shipCriteria: [
      "Done when: preview updates live",
      "Done when: CSS is correct",
      "Done when: copy works"
    ]
  },
  {
    id: "142",
    title: "Image Resizer",
    oneLiner: "Resize images with aspect ratio controls",
    time: "1h",
    skill: "frontend",
    scope: [
      "Image upload",
      "Width/height inputs",
      "Aspect ratio lock",
      "Preview resized image",
      "Download resized image"
    ],
    shipCriteria: [
      "Done when: resizing works",
      "Done when: aspect ratio works",
      "Done when: download works"
    ]
  },
  {
    id: "143",
    title: "Regex Tester",
    oneLiner: "Test and debug regular expressions",
    time: "1h",
    skill: "frontend",
    scope: [
      "Regex pattern input",
      "Test string input",
      "Match highlighting",
      "Match groups display",
      "Common regex patterns library"
    ],
    shipCriteria: [
      "Done when: matching works",
      "Done when: groups display",
      "Done when: highlighting works"
    ]
  },
  {
    id: "144",
    title: "SVG Optimizer",
    oneLiner: "Optimize SVG files by removing unnecessary code",
    time: "1h",
    skill: "frontend",
    scope: [
      "SVG file upload or paste",
      "Optimization options",
      "Before/after comparison",
      "Size reduction display",
      "Download optimized SVG"
    ],
    shipCriteria: [
      "Done when: optimization works",
      "Done when: size reduces",
      "Done when: download works"
    ]
  },
  {
    id: "145",
    title: "Color Shades Generator",
    oneLiner: "Generate color shades and tints from base color",
    time: "1h",
    skill: "frontend",
    scope: [
      "Base color picker",
      "Generate shades (darker) and tints (lighter)",
      "Display color palette",
      "Copy hex codes",
      "Export as CSS variables"
    ],
    shipCriteria: [
      "Done when: shades generate correctly",
      "Done when: all colors display",
      "Done when: export works"
    ]
  },
  {
    id: "146",
    title: "Text to ASCII Art",
    oneLiner: "Convert text to ASCII art characters",
    time: "1h",
    skill: "frontend",
    scope: [
      "Text input",
      "Font style selector",
      "ASCII art preview",
      "Copy ASCII art",
      "Download as text file"
    ],
    shipCriteria: [
      "Done when: conversion works",
      "Done when: multiple fonts work",
      "Done when: copy/download work"
    ]
  },
  {
    id: "147",
    title: "QR Code Scanner",
    oneLiner: "Scan QR codes from webcam or uploaded image",
    time: "1h",
    skill: "frontend",
    scope: [
      "Webcam access or image upload",
      "QR code detection",
      "Display decoded content",
      "Handle URLs, text, WiFi, etc.",
      "Copy decoded content"
    ],
    shipCriteria: [
      "Done when: scanning works",
      "Done when: all types handled",
      "Done when: copy works"
    ]
  },
  {
    id: "148",
    title: "Image Metadata Viewer",
    oneLiner: "Extract and display EXIF data from images",
    time: "1h",
    skill: "frontend",
    scope: [
      "Image upload",
      "Extract EXIF data",
      "Display: camera, location, date, etc.",
      "Remove metadata option",
      "Download cleaned image"
    ],
    shipCriteria: [
      "Done when: metadata extracts",
      "Done when: all data displays",
      "Done when: removal works"
    ]
  },
  {
    id: "149",
    title: "CSS Animation Library",
    oneLiner: "Collection of ready-to-use CSS animations",
    time: "1h",
    skill: "frontend",
    scope: [
      "Animation gallery",
      "Preview each animation",
      "Copy CSS code",
      "Customize duration/easing",
      "Export animation"
    ],
    shipCriteria: [
      "Done when: animations play",
      "Done when: customization works",
      "Done when: copy works"
    ]
  },
  {
    id: "150",
    title: "Browser Compatibility Checker",
    oneLiner: "Check CSS/JS feature support across browsers",
    time: "1h",
    skill: "frontend",
    scope: [
      "Feature input (CSS property, JS API)",
      "Browser support matrix",
      "Polyfill suggestions",
      "Usage statistics",
      "Export report"
    ],
    shipCriteria: [
      "Done when: support data is accurate",
      "Done when: suggestions are relevant",
      "Done when: export works"
    ]
  },

  // More Awesome Ideas - Frontend (2h)
  {
    id: "151",
    title: "Interactive Timeline",
    oneLiner: "Create and display interactive timelines",
    time: "2h",
    skill: "frontend",
    scope: [
      "Add timeline events",
      "Date-based positioning",
      "Event details on click",
      "Zoom in/out",
      "Export as image"
    ],
    shipCriteria: [
      "Done when: timeline displays",
      "Done when: interactions work",
      "Done when: export works"
    ]
  },
  {
    id: "152",
    title: "Code Syntax Highlighter",
    oneLiner: "Highlight syntax for multiple programming languages",
    time: "2h",
    skill: "frontend",
    scope: [
      "Code input",
      "Language selector",
      "Theme selector",
      "Line numbers",
      "Copy highlighted code"
    ],
    shipCriteria: [
      "Done when: highlighting works",
      "Done when: all languages supported",
      "Done when: copy preserves formatting"
    ]
  },
  {
    id: "153",
    title: "Image Slider/Carousel",
    oneLiner: "Custom image slider with transitions",
    time: "2h",
    skill: "frontend",
    scope: [
      "Image upload",
      "Slider controls (prev/next)",
      "Transition effects",
      "Autoplay option",
      "Responsive design"
    ],
    shipCriteria: [
      "Done when: slider works",
      "Done when: transitions are smooth",
      "Done when: responsive on mobile"
    ]
  },
  {
    id: "154",
    title: "Drag and Drop File Upload",
    oneLiner: "Upload files with drag-and-drop interface",
    time: "2h",
    skill: "frontend",
    scope: [
      "Drag-and-drop zone",
      "File preview",
      "Progress indicators",
      "Multiple file support",
      "File validation"
    ],
    shipCriteria: [
      "Done when: drag-and-drop works",
      "Done when: preview displays",
      "Done when: validation works"
    ]
  },
  {
    id: "155",
    title: "Infinite Scroll List",
    oneLiner: "Implement infinite scroll with pagination",
    time: "2h",
    skill: "frontend",
    scope: [
      "List of items",
      "Load more on scroll",
      "Loading indicator",
      "Error handling",
      "Scroll to top button"
    ],
    shipCriteria: [
      "Done when: scroll triggers load",
      "Done when: loading works",
      "Done when: errors handled"
    ]
  },
  {
    id: "156",
    title: "Modal/Dialog System",
    oneLiner: "Reusable modal component with animations",
    time: "2h",
    skill: "frontend",
    scope: [
      "Modal component",
      "Open/close animations",
      "Backdrop click to close",
      "ESC key to close",
      "Multiple modal support"
    ],
    shipCriteria: [
      "Done when: modal opens/closes",
      "Done when: animations work",
      "Done when: keyboard shortcuts work"
    ]
  },
  {
    id: "157",
    title: "Progress Bar Component",
    oneLiner: "Animated progress bars with multiple styles",
    time: "2h",
    skill: "frontend",
    scope: [
      "Progress value input",
      "Multiple styles (linear, circular, stepped)",
      "Animations",
      "Color customization",
      "Label support"
    ],
    shipCriteria: [
      "Done when: all styles work",
      "Done when: animations are smooth",
      "Done when: customization works"
    ]
  },
  {
    id: "158",
    title: "Toast Notification System",
    oneLiner: "Toast notifications with auto-dismiss",
    time: "2h",
    skill: "frontend",
    scope: [
      "Toast component",
      "Success/error/warning types",
      "Auto-dismiss timer",
      "Stack multiple toasts",
      "Position options"
    ],
    shipCriteria: [
      "Done when: toasts display",
      "Done when: auto-dismiss works",
      "Done when: stacking works"
    ]
  },
  {
    id: "159",
    title: "Accordion Component",
    oneLiner: "Collapsible accordion with smooth animations",
    time: "2h",
    skill: "frontend",
    scope: [
      "Accordion items",
      "Expand/collapse functionality",
      "Smooth height animations",
      "Single or multiple open",
      "Icon indicators"
    ],
    shipCriteria: [
      "Done when: expand/collapse works",
      "Done when: animations are smooth",
      "Done when: modes work"
    ]
  },
  {
    id: "160",
    title: "Tabs Component",
    oneLiner: "Tabbed interface with content switching",
    time: "2h",
    skill: "frontend",
    scope: [
      "Tab navigation",
      "Content panels",
      "Active state styling",
      "Keyboard navigation",
      "URL hash support"
    ],
    shipCriteria: [
      "Done when: tabs switch content",
      "Done when: styling works",
      "Done when: keyboard nav works"
    ]
  },

  // More Awesome Ideas - Backend
  {
    id: "161",
    title: "Request Logger Middleware",
    oneLiner: "Log all HTTP requests with details",
    time: "1h",
    skill: "backend",
    scope: [
      "Middleware to capture requests",
      "Log: method, URL, headers, body, timestamp",
      "Store logs (file or database)",
      "Filter by endpoint",
      "Export logs"
    ],
    shipCriteria: [
      "Done when: all requests logged",
      "Done when: details are complete",
      "Done when: export works"
    ]
  },
  {
    id: "162",
    title: "API Documentation Generator",
    oneLiner: "Auto-generate API docs from code",
    time: "2h",
    skill: "backend",
    scope: [
      "Parse route definitions",
      "Extract parameters and responses",
      "Generate OpenAPI/Swagger spec",
      "Interactive docs UI",
      "Export documentation"
    ],
    shipCriteria: [
      "Done when: docs generate",
      "Done when: spec is valid",
      "Done when: UI displays correctly"
    ]
  },
  {
    id: "163",
    title: "Database Migration Tool",
    oneLiner: "Version control for database schema changes",
    time: "4h",
    skill: "backend",
    scope: [
      "Migration file system",
      "Up/down migrations",
      "Version tracking",
      "Rollback support",
      "Migration history"
    ],
    shipCriteria: [
      "Done when: migrations run",
      "Done when: rollback works",
      "Done when: history tracks"
    ]
  },
  {
    id: "164",
    title: "Error Tracking Service",
    oneLiner: "Capture and track application errors",
    time: "2h",
    skill: "backend",
    scope: [
      "Error capture endpoint",
      "Store errors with stack traces",
      "Error grouping",
      "Error dashboard",
      "Alert notifications"
    ],
    shipCriteria: [
      "Done when: errors are captured",
      "Done when: grouping works",
      "Done when: dashboard displays"
    ]
  },
  {
    id: "165",
    title: "Feature Flag System",
    oneLiner: "Toggle features on/off without deployment",
    time: "4h",
    skill: "backend",
    scope: [
      "Feature flag storage",
      "Toggle flags via API",
      "Check flags in code",
      "User/segment targeting",
      "Flag analytics"
    ],
    shipCriteria: [
      "Done when: flags toggle",
      "Done when: targeting works",
      "Done when: analytics track"
    ]
  },

  // More Awesome Ideas - Fullstack
  {
    id: "166",
    title: "File Sharing Platform",
    oneLiner: "Upload and share files with expiration",
    time: "4h",
    skill: "fullstack",
    scope: [
      "File upload",
      "Generate shareable links",
      "Set expiration dates",
      "Password protection",
      "Download tracking"
    ],
    shipCriteria: [
      "Done when: upload works",
      "Done when: links work",
      "Done when: expiration works"
    ]
  },
  {
    id: "167",
    title: "Team Chat Application",
    oneLiner: "Real-time chat with rooms and direct messages",
    time: "8h",
    skill: "fullstack",
    scope: [
      "User authentication",
      "Create chat rooms",
      "Real-time messaging",
      "Direct messages",
      "Message history"
    ],
    shipCriteria: [
      "Done when: rooms work",
      "Done when: messaging is real-time",
      "Done when: history loads"
    ]
  },
  {
    id: "168",
    title: "Voting System",
    oneLiner: "Create polls and collect votes",
    time: "2h",
    skill: "fullstack",
    scope: [
      "Create polls",
      "Vote on options",
      "Real-time results",
      "Prevent duplicate votes",
      "Share poll links"
    ],
    shipCriteria: [
      "Done when: polls create",
      "Done when: voting works",
      "Done when: results update live"
    ]
  },
  {
    id: "169",
    title: "Event Registration System",
    oneLiner: "Register for events with ticket management",
    time: "4h",
    skill: "fullstack",
    scope: [
      "Create events",
      "Registration form",
      "Ticket generation",
      "QR code tickets",
      "Check-in system"
    ],
    shipCriteria: [
      "Done when: registration works",
      "Done when: tickets generate",
      "Done when: check-in works"
    ]
  },
  {
    id: "170",
    title: "Feedback Collection Tool",
    oneLiner: "Collect and manage user feedback",
    time: "2h",
    skill: "fullstack",
    scope: [
      "Feedback form",
      "Submit feedback",
      "Feedback dashboard",
      "Status tracking",
      "Export feedback"
    ],
    shipCriteria: [
      "Done when: submission works",
      "Done when: dashboard displays",
      "Done when: export works"
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
