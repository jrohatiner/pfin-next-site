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

  const VideoContent = await loadVideoComponent(slug);

  if (!VideoContent) {
    // Show a placeholder if no component is registered yet
    return (
      <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <h1>{video.title}</h1>
        <p>Content coming soon. This video component has not been created yet.</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>{video.title}</h1>
      <VideoContent />
    </main>
  );
}
