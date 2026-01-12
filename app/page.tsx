"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Idea, TimeOption, SkillOption, getRandomIdeas, getIdeaById } from "@/lib/ideas";
import IdeaCard from "@/components/IdeaCard";
import Footer from "@/components/Footer";

const TIME_OPTIONS: TimeOption[] = ["30m", "1h", "2h", "4h", "8h"];
const SKILL_OPTIONS: SkillOption[] = ["frontend", "backend", "fullstack", "design", "mobile"];

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const resultsRef = useRef<HTMLDivElement>(null);
  
  const [time, setTime] = useState<TimeOption | "">(
    (searchParams.get("time") as TimeOption) || ""
  );
  const [skill, setSkill] = useState<SkillOption | "">(
    (searchParams.get("skill") as SkillOption) || ""
  );
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Load ideas from URL on mount
  useEffect(() => {
    const idsParam = searchParams.get("ids");
    if (idsParam) {
      const ids = idsParam.split(",");
      const loadedIdeas = ids
        .map((id) => getIdeaById(id))
        .filter((idea): idea is Idea => idea !== undefined);
      if (loadedIdeas.length > 0) {
        setIdeas(loadedIdeas);
        setTime((searchParams.get("time") as TimeOption) || "");
        setSkill((searchParams.get("skill") as SkillOption) || "");
      }
    }
  }, [searchParams]);

  const updateURL = (newTime: TimeOption | "", newSkill: SkillOption | "", newIds?: string[]) => {
    const params = new URLSearchParams();
    if (newTime) params.set("time", newTime);
    if (newSkill) params.set("skill", newSkill);
    if (newIds && newIds.length > 0) {
      params.set("ids", newIds.join(","));
    }
    const queryString = params.toString();
    router.push(queryString ? `/?${queryString}` : "/", { scroll: false });
  };

  const handleGenerate = () => {
    if (!time || !skill) return;
    
    const newIdeas = getRandomIdeas(3, time, skill);
    if (newIdeas.length === 0) {
      alert("No ideas found for this combination. Try different filters!");
      return;
    }
    
    setIdeas(newIdeas);
    updateURL(time, skill, newIdeas.map((i) => i.id));
    
    // Smooth scroll to results
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };


  const handleRegenerate = () => {
    handleGenerate();
  };

  const handleShuffleOne = (indexToReplace: number) => {
    if (!time || !skill) return;
    
    const availableIdeas = getRandomIdeas(10, time, skill).filter(
      (idea) => !ideas.some((existing) => existing.id === idea.id)
    );
    
    if (availableIdeas.length === 0) {
      // If no new ideas, just regenerate all
      handleRegenerate();
      return;
    }
    
    const newIdeas = [...ideas];
    newIdeas[indexToReplace] = availableIdeas[0];
    setIdeas(newIdeas);
    updateURL(time, skill, newIdeas.map((i) => i.id));
  };

  const handleCopyFeedback = (id: string) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1200);
  };

  const canGenerate = time && skill;

  return (
    <div className="min-h-screen" style={{ background: "#0B0E14", position: "relative" }}>
      {/* Ultra-subtle radial gradient in hero only */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(circle at top, rgba(250,204,21,0.08), transparent 60%)"
      }} />
      
      {/* Hero Section - Maximum Impact */}
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-32">
        <div className="text-center">
          {/* The Hitting Sentence - First 5 seconds hook */}
          <div className="mb-8 inline-block animate-fade-in-up rounded-full border px-4 py-1.5 text-sm font-medium backdrop-blur-sm" style={{ borderColor: "#1F2937", background: "#111827", color: "#FACC15" }}>
            <span className="mr-2">⚡</span>
            No signup • No BS • Just ideas
          </div>
          
          <h1 className="mx-auto max-w-4xl animate-fade-in-up text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl" style={{ color: "#E5E7EB", animationDelay: "0.1s" }}>
            <span className="block">Stop staring at</span>
            <span className="block" style={{ color: "#FACC15" }}>
              a blank screen.
            </span>
          </h1>
          
          <p className="mx-auto mt-8 max-w-2xl text-2xl font-medium leading-relaxed sm:text-3xl" style={{ color: "#9CA3AF" }}>
            Get <span className="font-bold" style={{ color: "#E5E7EB" }}>3 shippable ideas</span> in{" "}
            <span className="font-bold" style={{ color: "#FACC15" }}>20 seconds</span>. Pick your time + skill → start building.
          </p>

          {/* Social Proof / Stats */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm" style={{ color: "#6B7280" }}>
            <div className="flex items-center gap-2">
              <span style={{ color: "#FACC15" }}>⚡</span>
              <span className="font-semibold" style={{ color: "#9CA3AF" }}>60+ ideas</span>
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: "#FACC15" }}>⏱️</span>
              <span className="font-semibold" style={{ color: "#9CA3AF" }}>20 seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: "#FACC15" }}>✓</span>
              <span className="font-semibold" style={{ color: "#9CA3AF" }}>Ready to ship</span>
            </div>
          </div>
        </div>

        {/* Controls - More Prominent */}
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="rounded-2xl border p-8 sm:p-10" style={{ borderColor: "#1F2937", background: "#111827" }}>
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-4">
              <div className="flex-1">
                <label className="mb-3 block text-xs font-semibold uppercase tracking-wider" style={{ color: "#6B7280" }}>
                  ⏱️ How much time?
                </label>
                <select
                  value={time}
                  onChange={(e) => {
                    const newTime = e.target.value as TimeOption | "";
                    setTime(newTime);
                    updateURL(newTime, skill);
                  }}
                  className="w-full rounded-xl border px-5 py-3.5 text-base font-semibold transition-all focus:outline-none focus:ring-2"
                  style={{
                    borderColor: "#1F2937",
                    background: "#0B0E14",
                    color: "#E5E7EB",
                    "--tw-ring-color": "#FACC15"
                  } as React.CSSProperties & { "--tw-ring-color": string }}
                >
                  <option value="" style={{ background: "#0B0E14", color: "#6B7280" }}>Select time</option>
                  {TIME_OPTIONS.map((option) => (
                    <option key={option} value={option} style={{ background: "#0B0E14", color: "#E5E7EB" }}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label className="mb-3 block text-xs font-semibold uppercase tracking-wider" style={{ color: "#6B7280" }}>
                  💻 What's your skill?
                </label>
                <select
                  value={skill}
                  onChange={(e) => {
                    const newSkill = e.target.value as SkillOption | "";
                    setSkill(newSkill);
                    updateURL(time, newSkill);
                  }}
                  className="w-full rounded-xl border px-5 py-3.5 text-base font-semibold transition-all focus:outline-none focus:ring-2"
                  style={{
                    borderColor: "#1F2937",
                    background: "#0B0E14",
                    color: "#E5E7EB",
                    "--tw-ring-color": "#FACC15"
                  } as React.CSSProperties & { "--tw-ring-color": string }}
                >
                  <option value="" style={{ background: "#0B0E14", color: "#6B7280" }}>Select skill</option>
                  {SKILL_OPTIONS.map((option) => (
                    <option key={option} value={option} style={{ background: "#0B0E14", color: "#E5E7EB" }}>
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Generate Button - Primary CTA with Amber */}
            <div className="mt-8">
              <button
                onClick={handleGenerate}
                disabled={!canGenerate}
                className="w-full rounded-xl px-8 py-4 text-lg font-bold transition-all hover:scale-[1.02] focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                style={{
                  background: canGenerate ? "#FACC15" : "#1F2937",
                  color: canGenerate ? "#0B0E14" : "#6B7280",
                  "--tw-ring-color": "#FACC15"
                } as React.CSSProperties & { "--tw-ring-color": string }}
                onMouseEnter={(e) => {
                  if (canGenerate) {
                    e.currentTarget.style.background = "#EAB308";
                  }
                }}
                onMouseLeave={(e) => {
                  if (canGenerate) {
                    e.currentTarget.style.background = "#FACC15";
                  }
                }}
              >
                {canGenerate ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Generate 3 Ideas Now
                  </span>
                ) : (
                  "Select time & skill to get started"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {ideas.length > 0 && (
        <div ref={resultsRef} className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: "#E5E7EB" }}>
              Here are your <span style={{ color: "#FACC15" }}>3 ideas</span>
            </h2>
            <p className="mt-3 text-lg" style={{ color: "#9CA3AF" }}>
              Pick one and start building. Or regenerate for more options.
            </p>
          </div>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
            <button
              onClick={handleRegenerate}
              className="inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-all hover:bg-opacity-100 focus:outline-none focus:ring-2"
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
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Regenerate All
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ideas.map((idea, index) => (
              <div key={idea.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <IdeaCard
                  idea={idea}
                  onShuffle={() => handleShuffleOne(index)}
                  onCopy={handleCopyFeedback}
                  copied={copiedId === idea.id}
                />
              </div>
            ))}
          </div>

          {ideas.length < 3 && (
            <div className="mt-12 rounded-xl border p-6 text-center" style={{ borderColor: "#1F2937", background: "#111827" }}>
              <p className="text-sm font-medium" style={{ color: "#9CA3AF" }}>
                Help expand this bucket →{" "}
                <a
                  href="https://github.com"
                  className="font-semibold underline"
                  style={{ color: "#FACC15" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PR welcome
                </a>
              </p>
            </div>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0B0E14" }}>
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-r-transparent" style={{ borderColor: "#FACC15", borderRightColor: "transparent" }}></div>
          <p className="mt-4" style={{ color: "#9CA3AF" }}>Loading...</p>
        </div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}
