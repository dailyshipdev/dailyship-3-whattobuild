export default function Footer() {
  return (
    <footer className="mx-auto max-w-4xl border-t px-4 py-12 text-center" style={{ borderColor: "#1F2937" }}>
      <div className="space-y-4">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://github.com/dailyshipdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors"
            style={{ color: "#9CA3AF" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#E5E7EB";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#9CA3AF";
            }}
          >
            GitHub
          </a>
          <span className="hidden sm:inline" style={{ color: "#6B7280" }}>•</span>
          <a
            href="https://x.com/dailyshipdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors"
            style={{ color: "#9CA3AF" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#E5E7EB";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#9CA3AF";
            }}
          >
            X
          </a>
          <span className="hidden sm:inline" style={{ color: "#6B7280" }}>•</span>
          <a
            href="https://www.linkedin.com/in/dailyship/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors"
            style={{ color: "#9CA3AF" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#E5E7EB";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#9CA3AF";
            }}
          >
            LinkedIn
          </a>
          <span className="hidden sm:inline" style={{ color: "#6B7280" }}>•</span>
          <a
            href="https://bsky.app/profile/dailyship.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors"
            style={{ color: "#9CA3AF" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#E5E7EB";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#9CA3AF";
            }}
          >
            Bluesky
          </a>
        </div>
        <p className="text-xs" style={{ color: "#6B7280" }}>
          Built for builders who ship daily
        </p>
      </div>
    </footer>
  );
}
