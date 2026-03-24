import { notFound } from "next/navigation";
import { getLessonBySlug, getLessonNavigation } from "@/lib/content";
import { ContentNav } from "@/components/content-nav";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LessonDetailPage({ params }: Props): Promise<JSX.Element> {
  const { slug } = await params;
  
  const lesson = getLessonBySlug(slug);
  if (!lesson) return notFound();
  
  const { default: Component } = await lesson.getComponent();
  const nav = getLessonNavigation(slug);
  
  return (
    <main style={{ padding: '2rem', maxWidth: '56rem', margin: '0 auto' }}>
      <Component />
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
