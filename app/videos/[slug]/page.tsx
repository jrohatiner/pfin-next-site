import { notFound } from "next/navigation";
import { getVideoBySlug } from "@/lib/content";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function VideoDetailPage({ params }: Props) {
  const { slug } = await params;
  const video = await getVideoBySlug(slug);

  if (!video) return notFound();

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <div dangerouslySetInnerHTML={{ __html: video.contentHtml }} />
    </main>
  );
}
