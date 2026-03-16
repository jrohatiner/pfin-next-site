import { notFound } from "next/navigation";
import { getVideoBySlug, loadVideoComponent } from "@/lib/content-registry";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function VideoDetailPage({ params }: Props) {
  const { slug } = await params;
  const video = getVideoBySlug(slug);

  if (!video) return notFound();

  const VideoContent = await loadVideoComponent(video.id);

  if (!VideoContent) return notFound();

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>{video.title}</h1>
      <VideoContent />
    </main>
  );
}
