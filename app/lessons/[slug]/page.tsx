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

  const LessonContent = await loadLessonComponent(slug);

  if (!LessonContent) {
    // Show a placeholder if no component is registered yet
    return (
      <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <h1>{lesson.title}</h1>
        <p>Content coming soon. This lesson component has not been created yet.</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>{lesson.title}</h1>
      <LessonContent />
    </main>
  );
}
