import { notFound } from "next/navigation";
import { getLessonBySlug } from "@/lib/content";
import { MDXRenderer } from "@/components/mdx-renderer";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LessonDetailPage({ params }: Props) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) return notFound();

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <MDXRenderer source={lesson.content} />
    </main>
  );
}
