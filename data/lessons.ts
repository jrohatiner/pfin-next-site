import type { LessonMeta } from "./types";

// Sample lessons metadata - add all your lessons here
// Each lesson needs a corresponding component in components/lessons/[id].tsx
export const lessons: LessonMeta[] = [
  {
    id: "credit-cards-terms-fees",
    slug: "credit-cards-terms-fees-and-more",
    title: "Credit Cards: Terms, Fees, and More",
  },
  {
    id: "life-insurance-safety-net",
    slug: "life-insurance-the-ultimate-safety-net",
    title: "Life Insurance: The Ultimate Safety Net",
  },
  {
    id: "strategy-build-wealth",
    slug: "a-strategy-to-build-wealth-not-debt",
    title: "A Strategy to Build Wealth, Not Debt",
  },
  // Add more lessons here following the same pattern
  // Each lesson needs a matching component file
];
