import type { ReactNode } from "react";

export interface LessonMeta {
  id: string;
  slug: string;
  title: string;
}

export interface VideoMeta {
  id: string;
  slug: string;
  title: string;
  youtubeId?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface ContentComponent {
  default: () => ReactNode;
}
