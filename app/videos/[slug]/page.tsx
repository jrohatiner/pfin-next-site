import { notFound } from "next/navigation";
import { getVideoBySlug, getVideoNavigation } from "@/lib/content";
import { ContentNav } from "@/components/content-nav";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function VideoDetailPage({ params }: Props): Promise<JSX.Element> {
  const { slug } = await params;
  
  const video = getVideoBySlug(slug);
  if (!video) return notFound();
  
  const { default: Component } = await video.getComponent();
  const nav = getVideoNavigation(slug);
  
  return (
    <main style={{ padding: '2rem', maxWidth: '56rem', margin: '0 auto' }}>
      <Component />
      <ContentNav
        prevSlug={nav.prev?.slug}
        prevTitle={nav.prev?.title}
        nextSlug={nav.next?.slug}
        nextTitle={nav.next?.title}
        basePath="/videos"
      />
    </main>
  );
}
