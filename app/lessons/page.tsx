import Link from "next/link";
import { getAllLessons } from "@/lib/content";
import { PageFooter } from "@/components/page-footer";

export default function LessonsPage(): JSX.Element {
  const lessons = getAllLessons();

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif", maxWidth: "56rem", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#1a1a2e" }}>Lessons</h1>
      {lessons.length === 0 ? (
        <p>No lessons found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {lessons.map((lesson) => (
            <li key={lesson.slug}>
              <Link 
                href={`/lessons/${lesson.slug}`}
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
                {lesson.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <PageFooter />
    </main>
  );
}
