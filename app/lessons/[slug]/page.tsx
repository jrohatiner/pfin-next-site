import { notFound } from "next/navigation";
import { getLessonBySlug } from "@/lib/content";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LessonDetailPage({ params }: Props) {
  const { slug } = await params;
  const lesson = await getLessonBySlug(slug);

  if (!lesson) return notFound();

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <div dangerouslySetInnerHTML={{ __html: lesson.contentHtml }} />
    </main>
  );
}
