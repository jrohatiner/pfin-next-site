import { notFound } from "next/navigation";
import { getLessonBySlug, getLessonNavigation } from "@/lib/content";
import { MDXRenderer } from "@/components/mdx-renderer";
import { ContentNav } from "@/components/content-nav";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LessonDetailPage({ params }: Props) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) return notFound();

  const nav = getLessonNavigation(slug);

  return (
    <main className="p-8 max-w-4xl mx-auto">
      {lesson.isHtml ? (
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: lesson.content }} />
      ) : (
        <MDXRenderer source={lesson.content} contentSlug={slug} />
      )}
      <ContentNav
        prevSlug={nav.prev?.slug}
        prevTitle={nav.prev?.title}
        nextSlug={nav.next?.slug}
        nextTitle={nav.next?.title}
        basePath="/lessons"
      />
    </main>
  );
}
