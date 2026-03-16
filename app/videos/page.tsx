import Link from "next/link";
import { getAllVideos } from "@/lib/content";
import { PageFooter } from "@/components/page-footer";

export default function VideosPage() {
  const videos = getAllVideos();

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Videos</h1>
      {videos.length === 0 ? (
        <p>No videos found.</p>
      ) : (
        <ul>
          {videos.map((video) => (
            <li key={video.filename}>
              <Link href={`/videos/${video.slug}`}>{video.title}</Link>
            </li>
          ))}
        </ul>
      )}
      <PageFooter />
    </main>
  );
}
