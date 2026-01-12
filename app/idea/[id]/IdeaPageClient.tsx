"use client";

import Link from "next/link";
import IdeaCard from "@/components/IdeaCard";
import { Idea } from "@/lib/ideas";
import { useState } from "react";

interface IdeaPageClientProps {
  idea: Idea;
}

export default function IdeaPageClient({ idea }: IdeaPageClientProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to generator
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-1">
          <IdeaCard
            idea={idea}
            onShuffle={() => {}}
            onCopy={handleCopy}
            copied={copiedId === idea.id}
          />
        </div>
      </div>
    </div>
  );
}
