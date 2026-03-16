import type { ComponentType } from "react";
import { lessons } from "@/data/lessons";
import { videos } from "@/data/videos";
import type { LessonMeta, VideoMeta } from "@/data/types";

// Lesson component registry - maps lesson IDs to their React components
const lessonComponents: Record<string, () => Promise<{ default: ComponentType }>> = {
  "credit-cards-terms-fees": () => import("@/components/lessons/credit-cards-terms-fees"),
  // Add more lesson component imports here as you create them
  // "life-insurance-safety-net": () => import("@/components/lessons/life-insurance-safety-net"),
};

// Video component registry - maps video IDs to their React components
const videoComponents: Record<string, () => Promise<{ default: ComponentType }>> = {
  "magic-of-compound-interest": () => import("@/components/videos/magic-of-compound-interest"),
  // Add more video component imports here as you create them
  // "what-is-money": () => import("@/components/videos/what-is-money"),
};

// Get all lessons metadata
export function getAllLessons(): LessonMeta[] {
  // Only return lessons that have registered components
  return lessons.filter((lesson) => lesson.id in lessonComponents);
}

// Get all videos metadata
export function getAllVideos(): VideoMeta[] {
  // Only return videos that have registered components
  return videos.filter((video) => video.id in videoComponents);
}

// Get lesson by slug
export function getLessonBySlug(slug: string): LessonMeta | null {
  return lessons.find((lesson) => lesson.slug === slug && lesson.id in lessonComponents) ?? null;
}

// Get video by slug
export function getVideoBySlug(slug: string): VideoMeta | null {
  return videos.find((video) => video.slug === slug && video.id in videoComponents) ?? null;
}

// Dynamically load a lesson component
export async function loadLessonComponent(id: string): Promise<ComponentType | null> {
  const loader = lessonComponents[id];
  if (!loader) return null;
  const module = await loader();
  return module.default;
}

// Dynamically load a video component
export async function loadVideoComponent(id: string): Promise<ComponentType | null> {
  const loader = videoComponents[id];
  if (!loader) return null;
  const module = await loader();
  return module.default;
}
