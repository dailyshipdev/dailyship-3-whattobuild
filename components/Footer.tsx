export default function Footer() {
  return (
    <footer className="mx-auto max-w-4xl border-t border-gray-200 px-4 py-12 text-center">
      <div className="space-y-4">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Open source
          </a>
          <span className="hidden text-gray-400 sm:inline">•</span>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
          <span className="hidden text-gray-400 sm:inline">•</span>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Submit ideas
          </a>
        </div>
        <p className="text-xs text-gray-500">
          Built for builders who ship daily
        </p>
      </div>
    </footer>
  );
}
