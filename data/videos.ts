import type { VideoMeta } from "./types";

// Sample videos metadata - add all your videos here
// Each video needs a corresponding component in components/videos/[id].tsx
export const videos: VideoMeta[] = [
  {
    id: "magic-of-compound-interest",
    slug: "the-magic-of-compound-interest",
    title: "The Magic of Compound Interest",
    youtubeId: "rri9dQg7O_g",
  },
  {
    id: "what-is-money",
    slug: "what-is-money",
    title: "What is Money?",
  },
  {
    id: "proven-techniques-stop-overspending",
    slug: "proven-techniques-to-stop-overspending",
    title: "Proven Techniques to Stop Overspending",
  },
  // Add more videos here following the same pattern
  // Each video needs a matching component file
];
