import { notFound } from "next/navigation";
import { getLessonBySlug, loadLessonComponent } from "@/lib/content-registry";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LessonDetailPage({ params }: Props) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) return notFound();

  const LessonContent = await loadLessonComponent(lesson.id);

  if (!LessonContent) return notFound();

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>{lesson.title}</h1>
      <LessonContent />
    </main>
  );
}
