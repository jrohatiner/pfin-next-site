import { notFound } from "next/navigation";
import { getVideoBySlug } from "@/lib/content";
import { MDXRenderer } from "@/components/mdx-renderer";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function VideoDetailPage({ params }: Props) {
  const { slug } = await params;
  const video = getVideoBySlug(slug);

  if (!video) return notFound();

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <MDXRenderer source={video.content} />
    </main>
  );
}
