import { notFound } from "next/navigation";
import { getLessonBySlug, loadLessonComponent } from "@/lib/content-registry";
import { readContentFile, markdownToHtml } from "@/lib/markdown-reader";

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

  if (LessonContent) {
    return (
      <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <h1>{lesson.title}</h1>
        <LessonContent />
      </main>
    );
  }

  // Fallback: Read markdown file
  const markdownContent = await readContentFile("lessons", lesson.id);
  
  if (!markdownContent) {
    return (
      <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <h1>{lesson.title}</h1>
        <p>Content not available.</p>
      </main>
    );
  }

  const htmlContent = markdownToHtml(markdownContent);

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </main>
  );
}
