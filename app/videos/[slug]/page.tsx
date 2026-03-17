import { notFound } from "next/navigation";
import { getVideoBySlug, getVideoNavigation } from "@/lib/content";
import { MDXRenderer } from "@/components/mdx-renderer";
import { ContentNav } from "@/components/content-nav";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function VideoDetailPage({ params }: Props) {
  const { slug } = await params;
  const video = getVideoBySlug(slug);

  if (!video) return notFound();

  const nav = getVideoNavigation(slug);

  return (
    <main className="p-8 max-w-4xl mx-auto">
      {video.isHtml ? (
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: video.content }} />
      ) : (
        <MDXRenderer source={video.content} contentSlug={slug} />
      )}
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
