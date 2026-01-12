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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            What should I build today?
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Pick your time + skill → get 3 shippable ideas.
          </p>
        </div>

        {/* Controls */}
        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:justify-center sm:gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Time</label>
            <select
              value={time}
              onChange={(e) => {
                const newTime = e.target.value as TimeOption | "";
                setTime(newTime);
                updateURL(newTime, skill);
              }}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select time</option>
              {TIME_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Skill</label>
            <select
              value={skill}
              onChange={(e) => {
                const newSkill = e.target.value as SkillOption | "";
                setSkill(newSkill);
                updateURL(time, newSkill);
              }}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select skill</option>
              {SKILL_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Generate Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleGenerate}
            disabled={!canGenerate}
            className="rounded-lg bg-gray-900 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-900"
          >
            Generate 3 ideas
          </button>
        </div>
      </div>

      {/* Results Section */}
      {ideas.length > 0 && (
        <div ref={resultsRef} className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
            <button
              onClick={handleRegenerate}
              className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Regenerate
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ideas.map((idea, index) => (
              <IdeaCard
                key={idea.id}
                idea={idea}
                onShuffle={() => handleShuffleOne(index)}
                onCopy={handleCopyFeedback}
                copied={copiedId === idea.id}
              />
            ))}
          </div>

          {ideas.length < 3 && (
            <div className="mt-8 text-center text-sm text-gray-600">
              <p>
                Help expand this bucket →{" "}
                <a
                  href="https://github.com"
                  className="font-medium text-blue-600 hover:text-blue-700"
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gray-900 border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}
