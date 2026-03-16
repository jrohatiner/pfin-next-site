import { notFound } from "next/navigation";
import { getVideoBySlug, loadVideoComponent } from "@/lib/content-registry";
import { readContentFile, markdownToHtml } from "@/lib/markdown-reader";

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

  if (VideoContent) {
    return (
      <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <h1>{video.title}</h1>
        <VideoContent />
      </main>
    );
  }

  // Fallback: Read markdown file
  const markdownContent = await readContentFile("videos", video.id);
  
  if (!markdownContent) {
    return (
      <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <h1>{video.title}</h1>
        <p>Content not available.</p>
      </main>
    );
  }

  const htmlContent = markdownToHtml(markdownContent);

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </main>
  );
}
