import Link from "next/link";
import { getAllVideos } from "@/lib/content";
import { PageFooter } from "@/components/page-footer";

export default function VideosPage(): JSX.Element {
  const videos = getAllVideos();

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif", maxWidth: "56rem", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#1a1a2e" }}>Videos</h1>
      {videos.length === 0 ? (
        <p>No videos found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {videos.map((video) => (
            <li key={video.slug}>
              <Link 
                href={`/videos/${video.slug}`}
                style={{ 
                  display: "block", 
                  padding: "1rem", 
                  background: "#f8f9fa", 
                  borderRadius: "8px", 
                  color: "#0b57d0", 
                  textDecoration: "none",
                  transition: "background 0.2s"
                }}
              >
                {video.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <PageFooter />
    </main>
  );
}
