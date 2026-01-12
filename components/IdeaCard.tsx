"use client";

import { Idea } from "@/lib/ideas";
import { useState } from "react";

interface IdeaCardProps {
  idea: Idea;
  onShuffle: () => void;
  onCopy: (id: string) => void;
  copied: boolean;
}

export default function IdeaCard({ idea, onShuffle, onCopy, copied }: IdeaCardProps) {
  const [copyState, setCopyState] = useState<"buildSpec" | "sharePost" | null>(null);

  const buildSpec = `Title: ${idea.title}\n\n${idea.oneLiner}\n\nScope:\n${idea.scope.map((s) => `• ${s}`).join("\n")}\n\nShip Criteria:\n${idea.shipCriteria.map((c) => `• ${c}`).join("\n")}`;

  const sharePost = `🚀 ${idea.title}\n\n${idea.oneLiner}\n\n⏱️ ${idea.time} | 💻 ${idea.skill}\n\n#buildinpublic #whattobuild`;

  const permalink = typeof window !== "undefined" 
    ? `${window.location.origin}/idea/${idea.id}`
    : "";

  const handleCopy = async (text: string, type: "buildSpec" | "sharePost") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyState(type);
      onCopy(idea.id);
      setTimeout(() => setCopyState(null), 1200);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(permalink);
      onCopy(idea.id);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <div className="group relative rounded-2xl border p-6 transition-all" style={{ 
      borderColor: "#1F2937", 
      background: "#111827" 
    }}>
      {/* Header */}
      <div className="mb-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-xl font-bold" style={{ color: "#E5E7EB" }}>{idea.title}</h3>
          <button
            onClick={onShuffle}
            className="flex-shrink-0 rounded-md p-1.5 transition-colors focus:outline-none focus:ring-2"
            style={{ 
              color: "#6B7280",
              "--tw-ring-color": "#FACC15"
            } as React.CSSProperties & { "--tw-ring-color": string }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#9CA3AF";
              e.currentTarget.style.background = "#1F2937";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#6B7280";
              e.currentTarget.style.background = "transparent";
            }}
            title="Shuffle this idea"
            aria-label="Shuffle this idea"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
        <p className="text-sm" style={{ color: "#9CA3AF" }}>{idea.oneLiner}</p>
        <div className="mt-2 flex gap-2">
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium" style={{ 
            background: "#0B0E14", 
            color: "#FACC15" 
          }}>
            {idea.time}
          </span>
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium" style={{ 
            background: "#0B0E14", 
            color: "#FACC15" 
          }}>
            {idea.skill}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="mb-6 space-y-4">
        <div>
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "#6B7280" }}>
            Scope
          </h4>
          <ul className="space-y-1 text-sm" style={{ color: "#E5E7EB" }}>
            {idea.scope.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: "#6B7280" }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "#6B7280" }}>
            Ship Criteria
          </h4>
          <ul className="space-y-1 text-sm" style={{ color: "#E5E7EB" }}>
            {idea.shipCriteria.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: "#6B7280" }} />
                <span>
                  <strong>Done when:</strong> {item.replace(/^Done when: /i, "")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2.5 border-t pt-5" style={{ borderColor: "#1F2937" }}>
        <button
          onClick={() => handleCopy(buildSpec, "buildSpec")}
          className="flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all hover:scale-[1.02] focus:outline-none focus:ring-2"
          style={{
            background: "#FACC15",
            color: "#0B0E14",
            "--tw-ring-color": "#FACC15"
          } as React.CSSProperties & { "--tw-ring-color": string }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#EAB308";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#FACC15";
          }}
        >
          {copyState === "buildSpec" && copied ? (
            <>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "#22C55E" }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span style={{ color: "#22C55E" }}>Copied ✓</span>
            </>
          ) : (
            <>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy Build Spec
            </>
          )}
        </button>

        <button
          onClick={() => handleCopy(sharePost, "sharePost")}
          className="flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all focus:outline-none focus:ring-2"
          style={{
            borderColor: "#1F2937",
            background: "transparent",
            color: "#E5E7EB",
            "--tw-ring-color": "#FACC15"
          } as React.CSSProperties & { "--tw-ring-color": string }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#111827";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          {copyState === "sharePost" && copied ? (
            <>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "#22C55E" }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span style={{ color: "#22C55E" }}>Copied ✓</span>
            </>
          ) : (
            <>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Copy Share Post
            </>
          )}
        </button>

        <button
          onClick={handleCopyLink}
          className="flex items-center justify-center gap-2 rounded-lg border px-4 py-2 text-xs font-semibold transition-all focus:outline-none focus:ring-2"
          style={{
            borderColor: "#1F2937",
            background: "transparent",
            color: "#9CA3AF",
            "--tw-ring-color": "#FACC15"
          } as React.CSSProperties & { "--tw-ring-color": string }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#111827";
            e.currentTarget.style.color = "#E5E7EB";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#9CA3AF";
          }}
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          Copy Link
        </button>
      </div>
    </div>
  );
}
