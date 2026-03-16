import type { ComponentType } from "react";
import { lessons } from "@/data/lessons";
import { videos } from "@/data/videos";
import type { LessonMeta, VideoMeta } from "@/data/types";

// Lesson component registry - maps lesson slugs to their React components
const lessonComponents: Record<string, () => Promise<{ default: ComponentType }>> = {
  "credit-cards-terms-fees-and-more": () => import("@/components/lessons/credit-cards-terms-fees"),
  // Add more lesson component imports here as you create them
};

// Video component registry - maps video slugs to their React components
const videoComponents: Record<string, () => Promise<{ default: ComponentType }>> = {
  "the-magic-of-compound-interest": () => import("@/components/videos/magic-of-compound-interest"),
  // Add more video component imports here as you create them
};

// Get all lessons metadata
export function getAllLessons(): LessonMeta[] {
  return lessons;
}

// Get all videos metadata
export function getAllVideos(): VideoMeta[] {
  return videos;
}

// Get lesson by slug
export function getLessonBySlug(slug: string): LessonMeta | null {
  return lessons.find((lesson) => lesson.slug === slug) ?? null;
}

// Get video by slug
export function getVideoBySlug(slug: string): VideoMeta | null {
  return videos.find((video) => video.slug === slug) ?? null;
}

// Dynamically load a lesson component
export async function loadLessonComponent(slug: string): Promise<ComponentType | null> {
  const loader = lessonComponents[slug];
  if (!loader) return null;
  const module = await loader();
  return module.default;
}

// Dynamically load a video component
export async function loadVideoComponent(slug: string): Promise<ComponentType | null> {
  const loader = videoComponents[slug];
  if (!loader) return null;
  const module = await loader();
  return module.default;
}
