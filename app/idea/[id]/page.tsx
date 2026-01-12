import { getIdeaById } from "@/lib/ideas";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import IdeaPageClient from "./IdeaPageClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const idea = getIdeaById(id);
  
  if (!idea) {
    return {
      title: "Idea Not Found",
    };
  }

  return {
    title: `${idea.title} - WhatToBuild`,
    description: idea.oneLiner,
    openGraph: {
      title: idea.title,
      description: idea.oneLiner,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: idea.title,
      description: idea.oneLiner,
    },
  };
}

export default async function IdeaPage({ params }: PageProps) {
  const { id } = await params;
  const idea = getIdeaById(id);

  if (!idea) {
    notFound();
  }

  return <IdeaPageClient idea={idea} />;
}
